import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DevEmp from "./components/DevEmp";
import ViewAllJobs from "./components/ViewAllJobs";
import JobListings from "./components/JobListings";

const App = () => {
  return (
    <main>
      <Navbar />

      {/* <!-- Hero --> */}
      <Hero
        title='Become a React Dev'
        subtitle='Find the React job that fits your skills and needs'
      />

      {/* <!-- Developers and Employers --> */}
      <DevEmp />

      {/* <!-- Browse Jobs --> */}
      <JobListings />

      <ViewAllJobs />
    </main>
  );
};

export default App;
