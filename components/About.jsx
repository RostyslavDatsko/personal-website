export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div>
          <h2 className="about__title-main">About Me</h2>

          <h3 className="about__title-sub">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </h3>
        </div>

        <div className="about__content">
          <div className="about__info">
            <h4 className="about__subtitle">Get to know me!</h4>

            <div className="about__description">
              <p className="about__text">
                I'm a <strong>Web Developer</strong> building and managing
                Websites and Web Applications that leads to the success of
                the overall product.
              </p>

              <p className="about__text">
                Feel free to connect with me on
                <a
                  className="about__link"
                  href="https://linkedin.com/in/rostyslav-datsko-056a97296"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </p>
            </div>

            <a className="about__cta" href="#contact">
              Contact
            </a>
          </div>

          <div className="about__skills">
            <h4 className="about__subtitle">My Skills</h4>

            <div className="about__skills-list">
              <div className="about__skill">HTML</div>
              <div className="about__skill">CSS</div>
              <div className="about__skill">JavaScript</div>
              <div className="about__skill">TypeScript</div>
              <div className="about__skill">React</div>
              <div className="about__skill">Next.js</div>
              <div className="about__skill">Node.js</div>
              <div className="about__skill">Express.js</div>
              <div className="about__skill">PostgreSQL</div>
              <div className="about__skill">MongoDB</div>
              <div className="about__skill">GraphQL</div>
              <div className="about__skill">Git</div>
              <div className="about__skill">GitHub</div>
              <div className="about__skill">Docker</div>
              <div className="about__skill">REST APIs</div>
              <div className="about__skill">JWT Auth</div>
              <div className="about__skill">Responsive Design</div>
              <div className="about__skill">SEO</div>
              <div className="about__skill">Google Ads</div>
              <div className="about__skill">AI Automation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}