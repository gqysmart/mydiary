import * as React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../../components/layout"
import {StaticImage} from "gatsby-plugin-image"
import Seo from "../../components/seo"

const DiaryPost = ({data, children}) => {
  return (
    <Layout pageTitle="My Diary">
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const Head = () => <Seo title="My Diaries"></Seo>
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
export default DiaryPost
