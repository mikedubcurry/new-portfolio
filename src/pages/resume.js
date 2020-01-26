import React from "react"

import Layout from "../components/layout"
import Panel from "../components/Panel"
import SEO from "../components/seo"

export default function Resume() {
  return (
    <Layout>
      <SEO title="RESUME" />
      <Panel pos={"left"} ct={3}></Panel>
      <Panel pos={"center"} ct={3}></Panel>
      <Panel pos={"right"} ct={3}></Panel>
    </Layout>
  )
}
