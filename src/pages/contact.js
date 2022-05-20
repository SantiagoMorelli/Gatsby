import React from "react"
import Layout from "../component/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>want to get in touch?</h3>
            <p>
              Mustache paleo put a bird on it vinyl williamsburg. Vaporware
              williamsburg freegan tbh disrupt cloud bread keytar. Humblebrag
              actually hexagon sartorial, flannel PBR&B master cleanse banjo
              pork belly put a bird on it hella. Shabby chic thundercats copper
              mug etsy.
            </p>
            <p>
              Literally chicharrones iPhone coloring book tumeric wolf
              thundercats put a bird on it before they sold out. Flannel
              biodiesel chicharrones, before they sold out actually deep v
              salvia seitan
            </p>
          </article>
          <article>
            <form className="form contact-form ">
              <div className="form-row">
                <label htmlFor="name">name</label>
                <input type="text" name="text" id="text"></input>
              </div>
              <div className="form-row">
                <label htmlFor="email">email</label>
                <input type="text" name="text" id="text"></input>
                <div className="form-row">
                  <lable htmlFor="message">Message</lable>
                  <textarea name="message" id="message"></textarea>
                  <button type="submit" className="btn block">
                    submit
                  </button>
                </div>
              </div>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
