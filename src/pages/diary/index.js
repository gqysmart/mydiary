import * as React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../../components/layout"
import {StaticImage} from "gatsby-plugin-image"
import Seo from "../../components/seo"

const DiaryPage = ({data}) => {
  return (
    <Layout pageTitle="My Diary">
      {data.allMdx.nodes.map((node) => (
        <article>
          <h2>
            <Link to={`/diary/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted:{node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="My Diaries"></Seo>
export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        frontmatter {
          date
          slug
          title
        }
      }
    }
  }
`
export default DiaryPage
