"use client"

import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";

  const main = {
    backgroundColor: "#ffffff",
    color: "#24292e",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  };
  
  const container = {
    maxWidth: "480px",
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const title = {
    fontSize: "24px",
    lineHeight: 1.25,
  };
  
  const section = {
    padding: "24px",
    border: "solid 1px #dedede",
    borderRadius: "5px",
    textAlign: "center" ,
  };
  
  const text = {
    margin: "0 0 10px 0",
    textAlign: "left" ,
  };
  
  const button = {
    fontSize: "14px",
    backgroundColor: "#D07553",
    color: "#fff",
    lineHeight: 1.5,
    borderRadius: "0.5em",
    padding: "12px 24px",
   
  };
  
  const links = {
    textAlign: "center",
  };

  const btn ={
    marginTop: "2rem",
    marginBottom: "2rem",
  }
  
  const link = {
    color: "#0366d6",
    fontSize: "12px",
   
  };
  
  const footer = {
    color: "#6a737d",
    fontSize: "12px",
    textAlign: "center" ,
    marginTop: "60px",
  };

  const baseUrl =  `https://demo.react.email/preview`;

 ;
const EmailTemplate = ({ username }) => (
    <Html>
    <Head />
    <Preview>
    Willkommen bei der AG „WordPress lernen
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="/images/logo.png"
          width="32"
          height="32"
          alt="logo"
        />

        <Text style={title}>
          <strong>@{username}</strong>, Willkommen bei der AG „WordPress lernen
        </Text>

        <Section style={section}>
          <Text style={text}>
          Hallo <strong>{username}</strong>!
          </Text>
          <Text style={text}>
          Sehr geehrte Damen und Herren,liebe Schüler:innen und Eltern, 
            wir freuen uns, Ihnen mitteilen zu können, dass die AG „WordPress lernen“ an unserer Schule startet! Dieses spannende Angebot richtet sich an Schüler:innen, die ihre digitalen Fähigkeiten ausbauen und lernen möchten, eigene Websites zu erstellen.
          </Text>

          <Button style={btn} >
            <Link style={button} target="_blank" href="www.google.com">Jetzt anmelden</Link>
          </Button>
        </Section>
        <Text style={links}>
          <Link style={link}>Your security audit log</Link> ・{" "}
          <Link style={link}>Contact support</Link>
        </Text>

        <Text style={footer}>
          GitHub, Inc. ・88 Colin P Kelly Jr Street ・San Francisco, CA 94107
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;