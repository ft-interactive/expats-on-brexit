import React from 'react';

export default function OFooter() {
  return (
    <footer className="o-footer o-footer--theme-light" data-o-component="o-footer">
      <div className="o-footer__container">
        <div className="o-footer__row o-footer__copyright">
          <div className="o-footer__col o-footer__col--full-width">
            <span>&#xA9; THE FINANCIAL TIMES LTD .</span>
            {' '}
            <span><abbr title="Financial Times">FT</abbr> and &#x2018;Financial Times&#x2019; are trademarks of The Financial Times Ltd.</span>
          </div>
        </div>
      </div>

      <div className="o-footer__brand">
        <div className="o-footer__container">
          <div className="o-footer__row">
            <div className="o-footer__col o-footer__col--full-width">
              <div className="o-footer__brand-logo" aria-label="A Nikkei Company"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
