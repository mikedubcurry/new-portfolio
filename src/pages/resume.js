import React from "react"
import { graphql } from "gatsby"

import { Bio, Skill, WorkExp, ExpSwitcher } from "../components/resume"
import Layout from "../components/layout"
import Panel from "../components/Panel"
import SEO from "../components/seo"

export default function Resume({ data }) {
  let { me, exp, skills } = data.resume

  return (
    <Layout>
      <SEO title="RESUME" />
      <Panel pos={"left"} ct={3}>
        <Bio selfie={data.bioImage.childImageSharp} me={me} />
      </Panel>
      <Panel pos={"center"} ct={3}>
        <ul
          style={{
            height: "100%",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {skills.map((skill, i) => (
            <Skill key={i} skill={skill} />
          ))}
        </ul>
      </Panel>
      <Panel pos={"right"} ct={3}>
        {/* <ul
          style={{
            height: "100%",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
          }}
        > */}
          <ExpSwitcher exp={exp} />
      </Panel>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ResumePageQuery {
    bioImage: file(absolutePath: { regex: "/selfie/" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    resume: contentJson {
      me {
        name
        email
        github
        bio
      }
      exp {
        title
        company
        start(formatString: "MMM D, Y")
        end(formatString: "MMM D, Y")
        duties
        current
      }
      skills {
        topic
        exp
      }
    }
  }
`
