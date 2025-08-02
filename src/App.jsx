import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DevEmp from "./components/DevEmp";
import BrowseJobs from "./components/BrowseJobs";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <main>
      <Navbar />

      {/* <!-- Hero --> */}
      <Hero />

      {/* <!-- Developers and Employers --> */}
      <DevEmp />

      {/* <!-- Browse Jobs --> */}
      <BrowseJobs />

      <ViewAllJobs />
    </main>
  );
};

export default App;
