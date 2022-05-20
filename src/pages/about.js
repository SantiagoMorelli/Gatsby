import React from "react"
import Layout from "../component/Layout"
import { StaticImage } from "gatsby-plugin-image"
const About = () => {
  return (
    <Layout>
      <main className="page ">
        <section className="about-page">
          <article>
            <h2>Travellers around the globe.</h2>
            <p>
              That's over 30 years of adventures, of visiting new places and old
              friends, of countless unforgettable moments. More than 30 years of
              changing the way people see the world, on small group tours with
              like-minded Intrepid people.
            </p>
            <p>
              As a responsible business, we've always been committed to being
              there for our travellers and the communities we visit. So, you can
              trust that when you travel with us, we won't just be there for
              your first adventure, we'll be there every step of your journey.
            </p>
          </article>
          <StaticImage src="../image/3.jpg"></StaticImage>
        </section>
      </main>
    </Layout>
  )
}

export default About
