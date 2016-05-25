import React from 'react';

const getLink = (url, networkName) => (
  <a
    href={url}
    target="_blank"
    title={`Share on ${networkName}`}
    className={`share-links__link share-links__link--${networkName.toLowerCase()}`}
  >
    <span>{`Share on ${networkName}`}</span>
  </a>
);

export default function ShareLinks() {
  const e = encodeURIComponent;
  const url = 'ft.com/expats';
  const fullURL = 'https://www.ft.com/expats';

  return (
    <aside className="share-links">
      {getLink(
        `https://twitter.com/intent/tweet/?text=${e(`Hundreds of British expats share their thoughts on Brexit with @FT ${url} pic.twitter.com/PhlbVLc6Me`)}`,
        'Twitter',
      )}

      {getLink(
        `https://facebook.com/sharer/sharer.php?u=${e(url)}`,
        'Facebook',
      )}
      {getLink(
        `https://www.linkedin.com/shareArticle?mini=true&url=${e(fullURL)}&title=${e('Many Britons abroad are eligible to vote in the EU referendum. Here\'s what they think of Brexit')}&summary=${e('FT survey aggregates the British expat perspective from more than 300 readers across 53 countries')}&source=${e(fullURL)}`,
        'LinkedIn',
      )}
    </aside>
  );
}

ShareLinks.propTypes = {};
