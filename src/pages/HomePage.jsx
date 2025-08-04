import React from "react";
import Hero from "../components/Hero";
import DevEmp from "../components/DevEmp";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero
        title='Become a React Dev'
        subtitle='Find the React job that fits your skills and needs'
      />
      <DevEmp />
      <JobListings isHome />
      {/* <JobListings isHome={true} /> */}
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
