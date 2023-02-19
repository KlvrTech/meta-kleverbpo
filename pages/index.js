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
    <Head />
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
