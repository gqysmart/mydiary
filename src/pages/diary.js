import * as React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import {StaticImage} from "gatsby-plugin-image"
import Seo from "../components/seo"

const DiaryPage = () => {
  return (
    <Layout pageTitle="My diary posts">
      <p>this is my diary list</p>
    </Layout>
  )
}

export const Head = () => <Seo title="My Diaries"></Seo>
export default DiaryPage
