export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__about">
            <h2 className="footer__name">Rostyslav Datsko</h2>
            <p className="footer__description">
              A Web Developer building the Frontend of Websites and Web
              Applications that leads to the success of the overall product.
            </p>
          </div>

          <div className="footer__social">
            <h2 className="footer__title">
              <span className="footer__title-main">Social</span>
            </h2>

            <div className="footer__social-links">
              <a
                className="footer__social-link"
                href="https://linkedin.com/in/rostyslav-datsko-056a97296"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  className="footer__social-icon"
                  src="/img/common-footer/linkedin-ico.png"
                  alt="LinkedIn"
                />
              </a>

              <a
                className="footer__social-link"
                href="https://github.com/RostyslavDatsko"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <img
                  className="footer__social-icon"
                  src="/img/common-footer/github-ico.png"
                  alt="GitHub"
                />
              </a>

              {/*
              <a
                className="footer__social-link"
                href="https://x.com/rostyslavdatsko"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <img
                  className="footer__social-icon"
                  src="/img/common-footer/twitter-ico.png"
                  alt="Twitter"
                />
              </a>
              */}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © Copyright 2025. Made by
            <a
              className="footer__credit-link"
              href="https://rostyslavdatsko.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Rostyslav Datsko
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}