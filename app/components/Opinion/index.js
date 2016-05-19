import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

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
          <p>{displayLocation}</p>
          {canVote
            ? <p className={styles.canVote}>Can vote</p>
            : <p className={styles.cannotVote}>Can't vote</p>
          }
        </header>

        <div className={styles.text} dangerouslySetInnerHTML={{ __html: textHTML }}></div>
      </article>
    );
  }
}

export default Opinion;
