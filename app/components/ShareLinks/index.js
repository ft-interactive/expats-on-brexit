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

export default function ShareLinks({ url, text }) {
  const encodedURL = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  return (
    <aside className="share-links">
      {getLink(
        `https://facebook.com/sharer/sharer.php?u=${encodedURL}`,
        'Facebook',
      )}

      {getLink(
        `https://twitter.com/intent/tweet/?text=${encodedText}&url=${encodedURL}`,
        'Twitter',
      )}

      {getLink(
        `https://www.linkedin.com/shareArticle?mini=true&amp;url=${encodedURL}&amp;title=${encodedText}&amp;summary=${encodedText}&amp;source=${encodedURL}`,
        'LinkedIn',
      )}
    </aside>
  );
}

ShareLinks.propTypes = {

};
