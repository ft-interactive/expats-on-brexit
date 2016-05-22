import React, { PropTypes } from 'react';
import Opinion from './Opinion';

export default function OpinionsList({ opinions }) {
  return (
    <section className="opinions-list">
      {opinions.map(opinion => (
        <Opinion {...opinion} num={opinion.key} />
      ))}
    </section>
  );
}

OpinionsList.propTypes = {
  opinions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
