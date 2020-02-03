import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Panel from "../components/Panel"

export default function Index({ data }) {
  // console.log(data)
  return (
    <Layout>
      <SEO title="HOME" />
      <Panel pos={"left"} ct={2}></Panel>
      <Panel pos={"right"} ct={2}></Panel>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    githubData {
      data {
        user {
          pinnedRepositories {
            edges {
              node {
                name
                description
                homepageUrl
                url
                topics: repositoryTopics {
                  edges {
                    node {
                      topic {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
