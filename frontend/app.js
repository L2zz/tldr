const paragraph1 = document.querySelector('#paragraph-1');
const arrow = document.querySelector('.arrow');
const content = document.querySelector('.content');
const sidebar = document.querySelector('.info');

const arrayItems = [
  'Machine learning (ML) is increasingly being used in image retrieval systems for medical decision making. One application of ML is to retrieve visually similar medical images from past patients (e.g. tissue from biopsies) to reference when making a medical decision with a new patient. However, no algorithm can perfectly capture an expert’s ideal notion of similarity for every case: an image that is algorithmically determined to be similar may not be medically relevant to a doctor’s specific diagnostic needs. In this paper, we identified the needs of pathologists when searching for similar images retrieved using a deep learning algorithm, and developed tools that empower users to cope with the search algorithm on-the-fly, communicating what types of similarity are most important at different moments in time. In two evaluations with pathologists, we found that these refinement tools increased the diagnostic utility of images found and increased user trust in the algorithm. The tools were preferred over a traditional interface, without a loss in diagnostic accuracy. We also observed that users adopted new strategies when using refinement tools, re-purposing them to test and understand the underlying algorithm and to disambiguate ML errors from their own errors. Taken together, these findings inform future human-ML collaborative systems for expert decision-making. ',
  '2Lorem ipsas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ',
  '3Lorem ipiquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ',
  '4Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ',
  '5Lorem ipsumrchitecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ',
  '6Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ',
  '7Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ',
  '8Lorem ipsum dolor sd p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ',
  '9Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ',
  '10Lorem ipsum dolor sit amet cur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! '
];

const data = {
  title:
    'hfhshfsfs hfhshfsfshfhshfsfshfhsh hfhshfsfs  fsfshfhshfsfshfhshfsfshfhshfsfshfhshfsfs',
  sections: [
    {
      sectionHeading: 'Heading1',
      sectionContent:
        'Machine learning (ML) is increasingly being used in image retrieval systems for medical decision making. One application of ML is to retrieve visually similar medical images from past patients (e.g. tissue from biopsies) to reference when making a medical decision with a new patient. However, no algorithm can perfectly capture an expert’s ideal notion of similarity for every case: an image that is algorithmically determined to be similar may not be medically relevant to a doctor’s specific diagnostic needs. In this paper, we identified the needs of pathologists when searching for similar images retrieved using a deep learning algorithm, and developed tools that empower users to cope with the search algorithm on-the-fly, communicating what types of similarity are most important at different moments in time. In two evaluations with pathologists, we found that these refinement tools increased the diagnostic utility of images found and increased user trust in the algorithm. The tools were preferred over a traditional interface, without a loss in diagnostic accuracy. We also observed that users adopted new strategies when using refinement tools, re-purposing them to test and understand the underlying algorithm and to disambiguate ML errors from their own errors. Taken together, these findings inform future human-ML collaborative systems for expert decision-making.',
      summary: {
        model1: {
          short:
            'shortshortshortshortshortshortshortshortshortshortshortshortshortshort',
          medium:
            'mediummediummediummediummediummediummediummediummediummediummediummediummediummediummediummediummedium',
          long: 'Machine learning (ML) is increasingly being used in image retrieval systems for medical decision making. One application of ML is to retrieve visually similar medical images from past patients (e.g. tissue from biopsies) to reference when making a medical decision with a new patient. However, no algorithm can perfectly capture an expert’s ideal notion of similarity for every case: an image that is algorithmically determined to be similar may not be medically relevant to a doctor’s specific diagnostic needs. In this paper, we identified the needs of pathologists when searching for similar images retrieved using a deep learning algorithm, and developed tools that empower users to cope with the search algorithm on-the-fly, communicating what types of similarity are most important at different moments in time. In two evaluations with pathologists, we found that these refinement tools increased the diagnostic utility of images found and increased user trust in the algorithm. The tools were preferred over a traditional interface, without a loss in diagnostic accuracy. We also observed that users adopted new strategies when using refinement tools, re-purposing them to test and understand the underlying algorithm and to disambiguate ML errors from their own errors. Taken together, these findings inform future human-ML collaborative systems for expert decision-making.'
        },
        model2: {
          short:
            'shortshortshortshortshortshortshortshortshortshortshortshortshortshort',
          medium:
            'mediummediummediummediummediummediummediummediummediummediummediummediummediummediummediummediummedium',
          long: 'Machine learning (ML) is increasingly being used in image retrieval systems for medical decision making. One application of ML is to retrieve visually similar medical images from past patients (e.g. tissue from biopsies) to reference when making a medical decision with a new patient. However, no algorithm can perfectly capture an expert’s ideal notion of similarity for every case: an image that is algorithmically determined to be similar may not be medically relevant to a doctor’s specific diagnostic needs. In this paper, we identified the needs of pathologists when searching for similar images retrieved using a deep learning algorithm, and developed tools that empower users to cope with the search algorithm on-the-fly, communicating what types of similarity are most important at different moments in time. In two evaluations with pathologists, we found that these refinement tools increased the diagnostic utility of images found and increased user trust in the algorithm. The tools were preferred over a traditional interface, without a loss in diagnostic accuracy. We also observed that users adopted new strategies when using refinement tools, re-purposing them to test and understand the underlying algorithm and to disambiguate ML errors from their own errors. Taken together, these findings inform future human-ML collaborative systems for expert decision-making.'
        }
      }
    },
    {
      sectionHeading: 'Heading2',
      sectionContent:
        'Machine learning (ML) is increasingly being used in image retrieval systems for medical decision making. One application of ML is to retrieve visually similar medical images from past patients (e.g. tissue from biopsies) to reference when making a medical decision with a new patient. However, no algorithm can perfectly capture an expert’s ideal notion of similarity for every case: an image that is algorithmically determined to be similar may not be medically relevant to a doctor’s specific diagnostic needs. In this paper, we identified the needs of pathologists when searching for similar images retrieved using a deep learning algorithm, and developed tools that empower users to cope with the search algorithm on-the-fly, communicating what types of similarity are most important at different moments in time. In two evaluations with pathologists, we found that these refinement tools increased the diagnostic utility of images found and increased user trust in the algorithm. The tools were preferred over a traditional interface, without a loss in diagnostic accuracy. We also observed that users adopted new strategies when using refinement tools, re-purposing them to test and understand the underlying algorithm and to disambiguate ML errors from their own errors. Taken together, these findings inform future human-ML collaborative systems for expert decision-making.',
      summary: {
        model1: {
          short:
            'shortshortshortshortshortshortshortshortshortshortshortshortshortshort',
          medium:
            'mediummediummediummediummediummediummediummediummediummediummediummediummediummediummediummediummedium',
          long: 'Machine learning (ML) is increasingly being used in image retrieval systems for medical decision making. One application of ML is to retrieve visually similar medical images from past patients (e.g. tissue from biopsies) to reference when making a medical decision with a new patient. However, no algorithm can perfectly capture an expert’s ideal notion of similarity for every case: an image that is algorithmically determined to be similar may not be medically relevant to a doctor’s specific diagnostic needs. In this paper, we identified the needs of pathologists when searching for similar images retrieved using a deep learning algorithm, and developed tools that empower users to cope with the search algorithm on-the-fly, communicating what types of similarity are most important at different moments in time. In two evaluations with pathologists, we found that these refinement tools increased the diagnostic utility of images found and increased user trust in the algorithm. The tools were preferred over a traditional interface, without a loss in diagnostic accuracy. We also observed that users adopted new strategies when using refinement tools, re-purposing them to test and understand the underlying algorithm and to disambiguate ML errors from their own errors. Taken together, these findings inform future human-ML collaborative systems for expert decision-making.'
        },
        model2: {
          short:
            'shortshortshortshortshortshortshortshortshortshortshortshortshortshort',
          medium:
            'mediummediummediummediummediummediummediummediummediummediummediummediummediummediummediummediummedium',
          long: 'Machine learning (ML) is increasingly being used in image retrieval systems for medical decision making. One application of ML is to retrieve visually similar medical images from past patients (e.g. tissue from biopsies) to reference when making a medical decision with a new patient. However, no algorithm can perfectly capture an expert’s ideal notion of similarity for every case: an image that is algorithmically determined to be similar may not be medically relevant to a doctor’s specific diagnostic needs. In this paper, we identified the needs of pathologists when searching for similar images retrieved using a deep learning algorithm, and developed tools that empower users to cope with the search algorithm on-the-fly, communicating what types of similarity are most important at different moments in time. In two evaluations with pathologists, we found that these refinement tools increased the diagnostic utility of images found and increased user trust in the algorithm. The tools were preferred over a traditional interface, without a loss in diagnostic accuracy. We also observed that users adopted new strategies when using refinement tools, re-purposing them to test and understand the underlying algorithm and to disambiguate ML errors from their own errors. Taken together, these findings inform future human-ML collaborative systems for expert decision-making.'
        }
      }
    },
    {
      sectionHeading: 'Heading3',
      sectionContent:
        'Machine learning (ML) is increasingly being used in image retrieval systems for medical decision making. One application of ML is to retrieve visually similar medical images from past patients (e.g. tissue from biopsies) to reference when making a medical decision with a new patient. However, no algorithm can perfectly capture an expert’s ideal notion of similarity for every case: an image that is algorithmically determined to be similar may not be medically relevant to a doctor’s specific diagnostic needs. In this paper, we identified the needs of pathologists when searching for similar images retrieved using a deep learning algorithm, and developed tools that empower users to cope with the search algorithm on-the-fly, communicating what types of similarity are most important at different moments in time. In two evaluations with pathologists, we found that these refinement tools increased the diagnostic utility of images found and increased user trust in the algorithm. The tools were preferred over a traditional interface, without a loss in diagnostic accuracy. We also observed that users adopted new strategies when using refinement tools, re-purposing them to test and understand the underlying algorithm and to disambiguate ML errors from their own errors. Taken together, these findings inform future human-ML collaborative systems for expert decision-making.',
      summary: {
        model1: {
          short:
            'shortshortshortshortshortshortshortshortshortshortshortshortshortshort',
          medium:
            'mediummediummediummediummediummediummediummediummediummediummediummediummediummediummediummediummedium',
          long: 'Machine learning (ML) is increasingly being used in image retrieval systems for medical decision making. One application of ML is to retrieve visually similar medical images from past patients (e.g. tissue from biopsies) to reference when making a medical decision with a new patient. However, no algorithm can perfectly capture an expert’s ideal notion of similarity for every case: an image that is algorithmically determined to be similar may not be medically relevant to a doctor’s specific diagnostic needs. In this paper, we identified the needs of pathologists when searching for similar images retrieved using a deep learning algorithm, and developed tools that empower users to cope with the search algorithm on-the-fly, communicating what types of similarity are most important at different moments in time. In two evaluations with pathologists, we found that these refinement tools increased the diagnostic utility of images found and increased user trust in the algorithm. The tools were preferred over a traditional interface, without a loss in diagnostic accuracy. We also observed that users adopted new strategies when using refinement tools, re-purposing them to test and understand the underlying algorithm and to disambiguate ML errors from their own errors. Taken together, these findings inform future human-ML collaborative systems for expert decision-making.'
        },
        model2: {
          short:
            'shortshortshortshortshortshortshortshortshortshortshortshortshortshort',
          medium:
            'mediummediummediummediummediummediummediummediummediummediummediummediummediummediummediummediummedium',
          long: 'Machine learning (ML) is increasingly being used in image retrieval systems for medical decision making. One application of ML is to retrieve visually similar medical images from past patients (e.g. tissue from biopsies) to reference when making a medical decision with a new patient. However, no algorithm can perfectly capture an expert’s ideal notion of similarity for every case: an image that is algorithmically determined to be similar may not be medically relevant to a doctor’s specific diagnostic needs. In this paper, we identified the needs of pathologists when searching for similar images retrieved using a deep learning algorithm, and developed tools that empower users to cope with the search algorithm on-the-fly, communicating what types of similarity are most important at different moments in time. In two evaluations with pathologists, we found that these refinement tools increased the diagnostic utility of images found and increased user trust in the algorithm. The tools were preferred over a traditional interface, without a loss in diagnostic accuracy. We also observed that users adopted new strategies when using refinement tools, re-purposing them to test and understand the underlying algorithm and to disambiguate ML errors from their own errors. Taken together, these findings inform future human-ML collaborative systems for expert decision-making.'
        }
      }
    }
  ]
};
let title;

const initialLoad = () => {
  const PageHeader = document.querySelector('.header');
  title = document.createElement('h1');
  title.textContent = data.title;
  PageHeader.append(title);
};
initialLoad();

data.sections.forEach((section, i) => {
  const sectionElement = document.createElement('section');
  const sectionParagraph = document.createElement('p');
  const sectionHeading = document.createElement('h2');
  sectionHeading.textContent = section.sectionHeading;
  sectionElement.append(sectionHeading, sectionParagraph);
  sectionParagraph.textContent = section.sectionContent;
  sectionParagraph.setAttribute('class', 'paragraph');
  sectionParagraph.setAttribute('id', `id${i}id`);
  content.append(sectionElement);
});
const paragraphs = document.querySelectorAll('.paragraph');
window.addEventListener('scroll', (e) => {
  for (let i = paragraphs.length - 1; i >= 0; i--) {
    const paragraph = paragraphs[i];
    let topHeight =
      paragraph.getBoundingClientRect().height +
      i * 30 +
      i * 38 +
      38 +
      34 +
      title.getBoundingClientRect().height;

    for (let j = 0; j < i; j++) {
      if (paragraphs[j] === paragraph) {
        return;
      } else {
        topHeight =
          topHeight + paragraphs[j].getBoundingClientRect().height;
      }
    }

    if (window.pageYOffset < topHeight) {
      const info = document.querySelector('.info');
      const infoHeading = document.querySelector('.summary-heading h3');
      info.textContent = data.sections[i].summary.model1.long;
      infoHeading.textContent = data.sections[i].sectionHeading;
    }
  }
});

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener('mouseup', (e) => {
    console.log('====================================');
    console.log(e.target);
    console.log('====================================');
    const selection = window.getSelection().toString();

    if (selection === '') {
      console.log('click');
    } else {
      console.log('selection', selection);
    }
  });
});

const dataSummarySpecific = {
  'heading1-heading2': 'content',
  'heading1-heading3': 'content',
  'heading2-heading3': 'content'
};
