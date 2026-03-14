export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">
          <span className="contact__title-main">Contact</span>
          <span className="contact__title-sub">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </span>
        </h2>

        <div className="contact__form-wrapper">
          <form
            className="contact__form"
            action="https://formspree.io/f/xreypqgd"
            method="POST"
          >
            <div className="contact__field">
              <label className="contact__label" htmlFor="name">
                Name
              </label>
              <input
                className="contact__input"
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="email">
                Email
              </label>
              <input
                className="contact__input"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">
                Message
              </label>
              <textarea
                className="contact__textarea"
                id="message"
                name="message"
                rows="10"
                placeholder="Enter Your Message"
                required
              />
            </div>

            <button type="submit" className="contact__button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}