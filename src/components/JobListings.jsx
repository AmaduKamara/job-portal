import { useEffect, useState } from "react";
import Job from "./Job";
import LoadingSpinner from "./LoadingSpinner";
// import jobs from "../jobs.json";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;

  useEffect(() => {
    const getJobs = async () => {
      try {
        // 1.Fetch jobs with await fetch()
        const res = await fetch("http://localhost:8000/jobs");

        //  2. Create data variable and assign the returned res.json data to it
        const data = await res.json();

        // 3. Update the state with the retured json data in the data variable on the setJobs state updating function
        setJobs(data);
      } catch (error) {
        console.log("Error fetching jobs: ", error.message);
      } finally {
        // 4. Whethere it fetched data or returned error, we set the loading to false in the finally block of the try catch. If not using try/catch, setLoading(false) should be called after the data is fetched successfully 👍🏽
        setLoading(false);
      }
    };

    getJobs();
  }, []);

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-teal-500 mb-6 text-center'>
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
