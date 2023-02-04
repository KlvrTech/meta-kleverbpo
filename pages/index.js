"use client";

import { Footer, Navbar } from "../components";

import {
  About,
  Explore,
  GetStarted,
  Hero,
  WhatsNew,
  Contact,
} from "../sections";
import Head from "./head";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <head>
      <title>KleverBPO - Digital Marketing Company</title>

      <meta name="viewport" content="width=device-width, initial-scale=1," />
      <meta
        name="description"
        content="Boost your online presence and drive more sales with our expert digital marketing services. From SEO to social media, we'll help you reach your target audience and achieve your business goal"
      />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <Navbar />
    <Hero />
    <Explore />
    <About />
    <GetStarted />
    <WhatsNew />
    <Contact />
    <Footer />
  </div>
);

export default Page;
