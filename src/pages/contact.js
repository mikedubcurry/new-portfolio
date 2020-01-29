import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import Message from "../components/contact/Message"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Panel from "../components/Panel"

export default function Contact() {
  return (
    <Layout>
      <GoogleReCaptchaProvider reCaptchaKey="6LcRsdMUAAAAABOu-tDA3v-sHfvfcM1zgQZdj_Uk">
        <SEO title="CONTACT" />
        <Panel pos={"left"} ct={2}></Panel>
        <Panel pos={"right"} ct={2}>
          <Message />
        </Panel>
      </GoogleReCaptchaProvider>
    </Layout>
  )
}
