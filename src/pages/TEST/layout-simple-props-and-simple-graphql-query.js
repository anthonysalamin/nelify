// Step 1: Import your component
import * as React from 'react'
import Layout from '../../components/layout'
import { useStaticQuery, graphql } from 'gatsby'

// defining component 
const Greeting = (props) => {
  const data = useStaticQuery(graphql`
  query description {
    site {
      siteMetadata {
        description
      }
    }
  }  
  `)
  return (
    <div>
      <p>Hi {props.name}, your age is {props.age}</p>
      <p>2nd query (description) : {data.site.siteMetadata.description}</p>
    </div>
  )
}

// rendering component
const TestPage = () => {
  return (
    <Layout pageTitle="Test Page">
      <h3>this is a static H3 title</h3>
      <Greeting name="Megan" age="23" />
      <Greeting name="Obinna" age="34" />
      <Greeting name="Generosa" age="53" />
    </Layout>
  )
}

// export default Page
export default TestPage