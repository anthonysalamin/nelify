// import needed stuff
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// define component with props
const Article = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

// define the page
const IndexPage = () => {

  // get data from strapi
  const data = useStaticQuery(graphql`
  query articles {
    allStrapiArticle {
      nodes {
        id
        title
        description
      }
    }
  }
  `
  )

  // render the component using props
  // pulled from strapi data layer 
  return (
    <main>
      <ul>
        {
          data.allStrapiArticle.nodes.map(article => (
            <li key={article.id}>
              <Article
                title={article.title}
                description={article.description}
              />
            </li>
          ))
        }
      </ul>
    </main>
  )
}

// export default Page
export default IndexPage