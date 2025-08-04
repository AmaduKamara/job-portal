import React from "react";
import JobListings from "../components/JobListings";

const JobsPage = () => {
  return (
    <>
      {/* <!-- Filter Jobs --> */}
      <section class='bg-blue-50 py-4'>
        <div class='container mx-auto px-4'>
          <div class='relative'>
            <input
              type='text'
              class='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500'
              placeholder='Filter jobs...'
            />
          </div>
        </div>
      </section>

      {/* <!-- All Jobs --> */}
      <section class='bg-blue-50 px-4 py-10'>
        <JobListings />
      </section>
    </>
  );
};

export default JobsPage;
