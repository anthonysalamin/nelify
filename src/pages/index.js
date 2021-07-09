// import needed stuff
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

// define component with props
const Article = ({ title, description, id }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{id}</p>
    </div>
  )
}

// define the page
const IndexPage = () => {

  // get data from strapi
  const data = useStaticQuery(graphql`
  query ArticlesInfo {
    allStrapiArticle(sort: {fields: id, order: DESC}) {
      nodes {
        title
        description
        id
      }
    }
  }  
  `
  )

  // render the component using props
  // pulled from strapi data layer 
  return (
    <Layout pageTitle="Home Page">
      <ul>
        {
          data.allStrapiArticle.nodes.map(article => (
            <li key={article.id}>
              <Article
                title={article.title}
                description={article.description}
                id={article.id}
              />
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

// export default Page
export default IndexPage