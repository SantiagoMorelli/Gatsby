import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import AllItems from "../component/AllItems"
import Layout from "../component/Layout"
export default function Home() {
  return (
    <Layout>
      <main className="page ">
        <header className="hero">
          <StaticImage
            src="../image/2.jpg"
            alt="crypto"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>XPLOR</h1>
              <h4>Discover the world</h4>
            </div>
          </div>
        </header>
        <AllItems />
      </main>
    </Layout>
  )
}
