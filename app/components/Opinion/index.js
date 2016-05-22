import React, { Component, PropTypes } from 'react';
import styles from './styles.scss';
import classify from 'classnames';

class Opinion extends Component {
  static propTypes = {
    num: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    displayLocation: PropTypes.string.isRequired,
    canVote: PropTypes.bool.isRequired,
    textHTML: PropTypes.string.isRequired,
  };

  shouldComponentUpdate = (nextProps) => nextProps.num !== this.props.num;

  render() {
    const { name, displayLocation, canVote, textHTML } = this.props;

    return (
      <article className={styles.opinion}>
        <header className={styles.header}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.location}>{displayLocation}</p>
          {canVote
            ? <p className={classify(styles.eligibility, styles.canVote)}><span>Can vote</span></p>
            : <p className={classify(styles.eligibility, styles.cannotVote)}><span>Can't vote</span></p>
          }
        </header>

        <div className={styles.text} dangerouslySetInnerHTML={{ __html: textHTML }}></div>
      </article>
    );
  }
}

export default Opinion;
