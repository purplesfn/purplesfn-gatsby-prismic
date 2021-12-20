import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <h1>About page people</h1>
    <p>About page text.</p>
    <p>
      <Link to="/">Go to Home</Link> <br />
    </p>
  </Layout>
)

export default AboutPage
