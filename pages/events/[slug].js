import React from "react";
// localhost:3000/events/anything_here - for params
import { useRouter } from "next/router"; //a hook
import Layout from "../../styles/Layout.module.css";

const EventPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      <h1>My Event</h1>
    </Layout>
  );
};

export default EventPage;

//NOTES
//{router.push} - to #7400b8irect
//{router.query.slug} - gives param name - called slug bcs file name is slug
