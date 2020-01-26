import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Panel from "../components/Panel"

export default () => (
  <Layout>
    <SEO title="HOME" />
    <Panel pos={"left"} ct={2}></Panel>
    <Panel pos={"right"} ct={2}></Panel>
  </Layout>
)
