import { useStaticQuery, graphql } from "gatsby"

import React from "react"
import ItemList from "./itemList"

const getData = graphql`
  {
    allContentfulRecipe {
      nodes {
        title
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`
const AllItems = () => {
  const {
    allContentfulRecipe: { nodes: data },
  } = useStaticQuery(getData)

  return (
    <div>
      <ItemList data={data} />
    </div>
  )
}

export default AllItems
