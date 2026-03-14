export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__title">
          <h2 className="projects__title-main">Projects</h2>
          <h3 className="projects__title-sub">
            Here you will find some of the personal and client projects that I
            created
          </h3>
        </div>

        <div className="projects__list">
          <div className="projects__item">
            <div className="projects__image-wrapper">
              <img
                className="projects__image"
                src="/img/pitchboulder.jpeg"
                alt="PitchBoulder"
              />
            </div>

            <div className="projects__details">
              <h4 className="projects__name">PitchBoulder</h4>
              <p className="projects__description">
                PitchBoulder is a platform where entrepreneurs refine their
                pitches with expert feedback at free weekly events in Boulder,
                Colorado.
              </p>
              <a
                className="projects__link"
                href="https://pitchboulder.co/"
                target="_blank"
                rel="noreferrer"
              >
                Case Study
              </a>
            </div>
          </div>

          <div className="projects__item">
            <div className="projects__image-wrapper">
              <img
                className="projects__image"
                src="/img/maple-code-photo.jpg"
                alt="Maple code Discord bot"
              />
            </div>

            <div className="projects__details">
              <h4 className="projects__name">Maple code Discord bot</h4>
              <p className="projects__description">
                Maple code is a Discord bot designed to manage developers community with coding club and readingg club and provide helpful resources.
              </p>
              <a
                className="projects__link"
                href="https://discord.gg/e3U9fmEnXk"
                target="_blank"
                rel="noreferrer"
              >
                Case Study
              </a>
            </div>
          </div>

                    <div className="projects__item">
            <div className="projects__image-wrapper">
              <img
                className="projects__image"
                src="/img/dsstoneland-demo.png"
                alt="Dsstoneland"
              />
            </div>

            <div className="projects__details">
              <h4 className="projects__name">Dsstoneland</h4>
              <p className="projects__description">
                DS Stoneland Ltd. is proud to be a professionally owned and operated business with experts who have been beautifying landscapers for over 20 years. 
              </p>
              <a
                className="projects__link projects__link--disabled"
                href="https://pitchboulder.co/"
                target="_blank"
                rel="noreferrer"
              >
                Soon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}