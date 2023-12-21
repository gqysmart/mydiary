import * as React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../../components/layout"
import {StaticImage, GatsbyImage, getImage} from "gatsby-plugin-image"
import Seo from "../../components/seo"

const DiaryPost = ({data, children}) => {
  var img = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle="My Diary">
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={img}
        alt={data.mdx.frontmatter.hero_image_alt}
      ></GatsbyImage>

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
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
export default DiaryPost
