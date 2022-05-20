import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

const RecipesList = styled.div`
  display: grid;
  gap: 2rem 1rem;
  padding-bottom: 3rem;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Recipe = styled.div`
  display: block;
  h5 {
    margin-bottom: 0;
    margin-top: 0.25rem;
    line-height: 1;
    color: #333538;
    font-weight: 600;
  }
  p {
    margin-bottom: 0;
    line-height: 1;
    color: var(--grey-800);
    margin-top: 0.5rem;
  }
  .recipe-img {
    height: 15rem;
    border-radius: 0.25rem;
  }
`
const ItemList = ({ data = [] }) => {
  return (
    <RecipesList>
      {data.map((item, index) => {
        const { image, title } = item
        const newPath = getImage(image)

        return (
          <Recipe>
            <Link to={`/${title}`}>
              <GatsbyImage
                className="recipe-img"
                image={newPath}
                alt={title}
              ></GatsbyImage>
              <h5>{title}</h5>
            </Link>
          </Recipe>
        )
      })}
    </RecipesList>
  )
}

export default ItemList
