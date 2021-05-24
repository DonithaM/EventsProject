import React from "react";
// localhost:3000/about
import Link from "next/link";
import Layout from "@/components/layout";

const AboutPage = () => {
  return (
    <Layout title="About DJ Events">
      <h1>About</h1>
      <p>An application to find the latest DJ and other events</p>
      <p>Version: 1.0.0</p>
      <Link href="/">Home</Link>
    </Layout>
  );
};

export default AboutPage;

//NOTES:
// In React, Link from react-router-dom and <Link to="/">Home</Link>. Here, its href
