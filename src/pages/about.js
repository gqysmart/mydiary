import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>This is my diary sites. I'll update my diary here.</p>
    </Layout>
  )
}
export const Head = () => <Seo title="About me"></Seo>

export default AboutPage
