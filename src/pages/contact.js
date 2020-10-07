import React from "react"

function Contact() {
  return (
    <div>
      {/*start contact*/}
      <div className="contact" id="contact">
        <div className="container">
          <div className="contact-header">
            <h1>Lets Get In Touch!</h1>
          </div>
          <form
            method="post"
            className="contact-form"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <span style={{ visibility: "hidden" }}>
              <label>Do not Fill This If You're Human:</label>
              <input name="bot-field" />
            </span>
            <input
              type="text"
              className="form-text"
              name="name"
              required
              placeholder="Jelson J.."
            />
            <input
              type="email"
              className="form-text"
              name="email"
              required
              placeholder="email@example.com."
            />
            <input
              type="tel"
              className="form-text"
              name="phone"
              required
              placeholder="Your tel number.."
            />
            <textarea
              className="form-text"
              name="message"
              required
              placeholder="Your message"
            ></textarea>
            <input type="submit" className="form-text-btn" value="Submit" />
          </form>
        </div>
      </div>
      {/*end contact*/}
    </div>
  )
}

export default Contact
