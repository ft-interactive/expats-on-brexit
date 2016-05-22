import React, { Component, PropTypes } from 'react';

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
      <article className="opinion">
        <header className="opinion__header">
          <h2 className="opinion__name">{name}</h2>
          <p className="opinion__location">{displayLocation}</p>
          {canVote
            ? <p className="opinion__eligibility opinion__eligibility--can"><span>Can vote</span></p>
            : <p className="opinion__eligibility opinion__eligibility--cannot"><span>Can't vote</span></p>
          }
        </header>

        <div className="opinion__text" dangerouslySetInnerHTML={{ __html: textHTML }}></div>
      </article>
    );
  }
}

export default Opinion;
