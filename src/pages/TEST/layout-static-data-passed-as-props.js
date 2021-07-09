// Step 1: Import your component
import * as React from 'react'
import Layout from '../../components/layout'

/*
//fake API calls
async function getRandomUsers() {
  const res = await fetch(`https://randomuser.me/api/?results=10`);
  const data = await res.json();
  return data.results;
}
*/

// JSON data
const users = [
  {
    name: "Megan",
    age: 23,
    id: 1
  },
  {
    name: "Obinna",
    age: 34,
    id: 2
  },
  {
    name: "Generosa",
    age: 56,
    id: 3
  }
]

// Defining the <User> component 
const User = ({ name, age }) => (
  <div>
    <p>hello {name}, your age is {age}</p>
  </div>
)

// Rendering the <GrettingsList> component
// based on <User> component using dynmaic data passed through props
const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <h3>this is a static H3 title</h3>
      <ul>
        {
          users.map(user => (
            <li>
              <User
                name={user.name}
                age={user.age}
                key={user.id}
              />
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

// export default Page
export default AboutPage