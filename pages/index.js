"use client";

import Head from "next/head";
import { Footer, Navbar } from "../components";
import LiveChat from "../components/LiveChat";

import {
  About,
  Explore,
  GetStarted,
  Hero,
  WhatsNew,
  Contact,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Head>
      <title>KleverBPO - Digital Marketing Company</title>

      <meta name="viewport" content="width=device-width, initial-scale=1," />
      <meta
        name="description"
        content="Boost your online presence and drive more sales with our expert digital marketing services. From SEO to social media, we'll help you reach your target audience."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Hero />
    <Explore />
    <About />
    <GetStarted />
    <WhatsNew />
    <Contact />
    <LiveChat />
    <Footer />
  </div>
);

export default Page;
