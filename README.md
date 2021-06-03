# TLDR

Understanding long and difficult academic papers is **hard because readers often lose context while reading**. We provide **active interaction** and **visual aids** to help maintain the reading context. The active interaction part helps users **continuously check on their understanding** of the paper which helps maintain reading context.


#### /frontend
**main javascript file: frontend/app.js**
All the data is stored in app.js due to absence of necessity for backend.
The structure of the data is as follows:

      sectionHeading: `Introduction`,
      sectionContent: [
        `paragraph1`,
        `paragraph2`,
        `paragraph3`,
        `paragraph4`,
        `paragraph5`,
        `paragraph6`,
      ],
      summary: {
        model1: {
          short: `summaryShort`,
          medium: `summaryMedium`,
          long: `summaryLong`,
        },
        model2: {
          short: `summaryShort`,
          medium: `summaryMedium`,
          long: `summaryLong`,
        },
      },
    },
All sections consist of headers and content (which consists of paragraphs). For each section there is a summary text generated by two models. The two AI models each provide short, medium and long versions of the summary.

Note: there might be inconsistency of data structure on section 'Related work', but this due to the fact that we wanted to implement paraphrasing feature so much, and thus sacrificed bit of consistensy in the representation of data.




#### /backend/python
**ext_summarize.py**
```
Extractive summarization using target pretrained model with defined output length.

This module gets target content, model, and expected length of the result from users,
and return(print) corresponding summarization result.

Example:
    $ ext_summarize.py [-h] [-m MODEL] [-l LENGTH] body

Attributes:
    available_models: List of the available pretrained models
        scibert: https://github.com/allenai/scibert
    available_models_src: Map between available pretrained model name and its source.
    length: Map between avaliable input length format and actual ratio value to convert.
    _params: Defined paraemters for summarization.
        {
            'body' (str): Target content to summarize
            'model' (str): Target model name to build language model (default: scibert)
            'length' (float): The ratio of sentences in final summary (default: 0.4)
        } 
```


**abst_summarize.py**
```
Abstractive summarization using target pretrained model with defined output length.

This module gets target content, model, and expected length of the result from users,
and return(print) generated summarization result.

Example:
    $ abst_summarize.py [-h] [-m MODEL] [-l LENGTH] body

Attributes:
    available_models: List of the available pretrained models
        distilbart: https://huggingface.co/sshleifer/distilbart-cnn-12-6
    available_models_src: Map between available pretrained model name and its source.
    length: Map between avaliable input length format and actual ratio value to convert.
    _params: Defined paraemters for summarization.
        {
            'body' (str): Target content to summarize
            'model' (str): Target model name to build language model (default: distilbart)
            'length' (float): The ratio of sentences in final summary (default: 0.4)
        } 
```

*Both of summarization works like belows:*
```
In main() function
1) Get model and tokenizer from user input
2) Return summarization of the body according to user requested length
    model, tokenizer = get_model(...)
    summarizer = Summarizer(model, tokenizer)
    result = summarizer(body, length)
```

**get_synonyms.py**
```
Get synonyms from the target word.

This module gets target word to find synonyms, and returns corresponding synonyms.

Example:
    $ get_synonyms.py [-h] [-n NUMBER] target
```
