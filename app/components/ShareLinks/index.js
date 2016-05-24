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
  const url = e('ft.com/expats');
  const fullURL = e('https://www.ft.com/expats');

  return (
    <aside className="share-links">
      {getLink(
        `https://twitter.com/intent/tweet/?text=${e('Hundreds of British expats share their thoughts on Brexit with @ft pic.twitter.com/PhlbVLc6Me')}&url=${url}`,
        'Twitter',
      )}

      {getLink(
        `https://facebook.com/sharer/sharer.php?u=${url}`,
        'Facebook',
      )}

      {getLink(
        `https://www.linkedin.com/shareArticle?mini=true&amp;url=${fullURL}&amp;title=${e('Many Britons abroad are eligible to vote in the EU referendum. Here’s what they think of Brexit')}&amp;summary=${e('FT survey aggregates the British expat perspective from 300+ readers across 53 countries')}&amp;source=${fullURL}`,
        'LinkedIn',
      )}
    </aside>
  );
}

ShareLinks.propTypes = {};
