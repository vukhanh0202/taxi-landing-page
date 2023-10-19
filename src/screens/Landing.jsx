import React from "react";
// Sections
import { useMobileView } from "../hooks/useMobileView"
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import Header from "../components/Sections/Header";
import Pricing from "../components/Sections/Pricing";
import Projects from "../components/Sections/Projects";
import Services from "../components/Sections/Services";

export default function Landing() {
  const { mobileView } = useMobileView();
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      {/* <Blog /> */}
      <Pricing />
      <div style={{ margin: "1rem auto", textAlign: "center" }}>
        {mobileView ? (
          <iframe
            title="Address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.01708377412234!2d108.35153367666183!3d15.736672789902036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420a0a0a46eed7%3A0x90cec496d1df65ed!2zNDQgTmd1eeG7hW4gVsSDbiBUcuG7l2ksIFRULiBIw6AgTGFtLCBUaMSDbmcgQsOsbmgsIFF14bqjbmcgTmFtLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1697721608182!5m2!1sen!2s"
            width={400}
            height={400}
            style={{ border: 0 }}
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <iframe
            title="Address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.01708377412234!2d108.35153367666183!3d15.736672789902036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420a0a0a46eed7%3A0x90cec496d1df65ed!2zNDQgTmd1eeG7hW4gVsSDbiBUcuG7l2ksIFRULiBIw6AgTGFtLCBUaMSDbmcgQsOsbmgsIFF14bqjbmcgTmFtLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1697721608182!5m2!1sen!2s"
            width={1200}
            height={600}
            style={{ border: 0 }}
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>

      <Footer />
    </>
  );
}
