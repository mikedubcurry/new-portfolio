import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import { Info, Message } from "../components/contact/"
import { Layout, Panel, SEO } from "../components"

export default function Contact() {
  return (
    <Layout>
      <GoogleReCaptchaProvider reCaptchaKey="6LcRsdMUAAAAABOu-tDA3v-sHfvfcM1zgQZdj_Uk">
        <SEO title="Contact" />
        <Panel first={true} pos={"left"} ct={2}>
          <Info />
        </Panel>
        <Panel pos={"right"} ct={2}>
          {/* <Message /> */}
          <p>Sorry but the contact form is currently under development. You can still reach me on Twitter <a href="www.twitter.com/mikedubcurry">@mikedubcurry</a></p>
        </Panel>
      </GoogleReCaptchaProvider>
    </Layout>
  )
}
