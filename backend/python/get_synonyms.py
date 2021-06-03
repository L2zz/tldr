"""Get synonyms from the target word.

This module gets target word to find synonyms, and returns corresponding synonyms.

Example:
    $ get_synonyms.py [-h] [-n NUMBER] target
"""

from nltk.corpus import wordnet
import argparse


def get_candidates(body):
    """Get candiate words form the body

    This function assume that body is from academic paper, it handle some words which 
    don't need to get synonyms. Handling cases are as belows:
    1) reference e.g. [1]
    2) numeric values

    Args:
        body (string): Target content to get candidate words, it can be sentences or paragraphs.

    Returns:
        candidates: 
    """
    tkns = body.split(' ')
    tkns_uniq = list(dict.fromkeys(tkns))
    candidates = [tkn for tkn in tkns_uniq
                  if '[' not in tkn and ']' not in tkn and not any(c.isdigit() for c in tkn)]
    if '\n' in candidates:
        candidates.remove('\n')

    return candidates


def get_synonyms_wordnet(target, num=None):
    """Get synonyms from wordnet

    Args:
        target (string): Target word to get synonyms.
        num (int): The number of the synonyms to get.

    Returns:
        synonyms (list): List of synonyms
    """
    synonyms = []
    for syn in wordnet.synsets(target):
        for l in syn.lemmas():
            synonyms.append(l.name())
    synonyms = list(dict.fromkeys(synonyms))
    if target in synonyms:
        synonyms.remove(target)
    if num is None or len(synonyms) < num:
        pass
    else:
        synonyms = synonyms[:num]
    return synonyms


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('target', type=str, help="Target word to get synonyms")
    parser.add_argument('-n', '--number', type=int,
                        help="The number of synonyms to get")
    args = parser.parse_args()
    synonyms = get_synonyms_wordnet(args.target, args.number)
    print(', '.join(synonyms))


if __name__ == '__main__':
    main()
