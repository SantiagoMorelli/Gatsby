import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const getData = graphql`
  {
    allFile {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 200, height: 200, layout: CONSTRAINED)
        }
        name
      }
    }
  }
`
const FetchData = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(getData)

  console.log(nodes)

  return (
    <div>
      {nodes.map((img, index) => {
        const path = getImage(img)
        const { name } = img
        return (
          <div>
            <GatsbyImage key={index} image={path} alt={name}></GatsbyImage>
            {name}
          </div>
        )
      })}
    </div>
  )
}

export default FetchData
