"""Get synonyms from the target word.

This module gets target word to find synonyms, and returns corresponding synonyms.

Example:
    $ get_synonyms.py [-h] [-n NUMBER] target
"""

from nltk.corpus import wordnet
import argparse


def get_synonyms_wordnet(target, num=None):
    """
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
    synonyms.remove(target)
    if num is None or len(synonyms) < num:
        pass
    else:
        synonyms = synonyms[:num]
    return synonyms


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('target', type=str, help="Target word to get synonyms")
    parser.add_argument('-n', '--number', type=int, help="The number of synonyms to get")
    args = parser.parse_args()
    synonyms = get_synonyms_wordnet(args.target, args.number)
    print(', '.join(synonyms))


if __name__ == '__main__':
    main()
