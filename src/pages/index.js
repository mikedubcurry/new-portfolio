import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import { Layout, SEO, Panel } from "../components/"
import { TopicList, ProjectList } from "../components/projects"

export default function Index({ data }) {
  const [topics, setTopics] = useState([])
  const [selected, setSelected] = useState("")

  const repos = data.githubData.data.user.pinnedRepositories.edges

  useEffect(() => {
    // go through each repo
    if (repos) {
      repos.forEach(({ node }) => {
        // in each repo, go through its topics
        node.topics.edges.forEach(topic => {
          if (!topics.includes(topic.node.topic.name)) {
            setTopics([...topics, topic.node.topic.name])
          }
        })
      })
    }

    // a double nested loop repeated topics.length times.
    // done only because repos.length <= 6, and each repo has at most 3 topics.
    // worst case is 216 renders
    // there has to be a better way
  }, [topics, repos])
  return (
    <Layout>
      <SEO title="HOME" />
      <Panel first={true} pos={"right"} ct={2}>
        <ProjectList selected={selected} repos={repos} />
      </Panel>
      <Panel pos={"left"} ct={2}>
        <TopicList topics={topics} state={[selected, setSelected]} />
      </Panel>
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
