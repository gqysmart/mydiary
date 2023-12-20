import * as React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import {StaticImage} from "gatsby-plugin-image"
import Seo from "../components/seo"

const DiaryPage = ({data}) => {
  return (
    <Layout pageTitle="My Diary">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="My Diaries"></Seo>
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
export default DiaryPage
