// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useLoaderData } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();
  // const [job, setJob] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getJob = async () => {
  //     try {
  //       const res = await fetch(`http://localhost:8000/jobs/${id}`);
  //       const data = await res.json();
  //       // console.log(data);
  //       setJob(data);
  //     } catch (error) {
  //       console.log("Error fetching job details: ", error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getJob();
  // }, [id]);

  return (
    <>
      {/* <!-- Go Back --> */}
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/jobs'
            className='text-teal-500 hover:text-teal-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className='bg-teal-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <div className='text-gray-500 mb-4'>{job.type}</div>
                <h1 className='text-3xl font-bold mb-4'>{job.title}</h1>
                <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-lg text-orange-700 mr-2' />
                  <p className='text-orange-700'>{job.location}</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-teal-800 text-lg font-bold mb-6'>
                  Job Description
                </h3>

                <p className='mb-4'>{job.description}</p>

                <h3 className='text-teal-800 text-lg font-bold mb-2'>Salary</h3>

                <p className='mb-4'>{job.salary}</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              {/* <!-- Company Info --> */}
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Company Info</h3>

                <h2 className='text-2xl'>{job.company.name}</h2>

                <p className='my-2'>{job.company.description}</p>

                <hr className='my-4' />

                <h3 className='text-xl'>Contact Email:</h3>

                <p className='my-2 bg-teal-100 p-2 font-bold'>
                  {job.company.contactEmail}
                </p>

                <h3 className='text-xl'>Contact Phone:</h3>

                <p className='my-2 bg-teal-100 p-2 font-bold'>
                  {job.company.contactPhone}
                </p>
              </div>

              {/* <!-- Manage --> */}
              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-xl font-bold mb-6'>Manage Job</h3>
                <a
                  href='/add-job.html'
                  className='bg-teal-500 hover:bg-teal-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit Job
                </a>
                <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'>
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:8000/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

// eslint-disable-next-line react-refresh/only-export-components
export { JobPage as default, jobLoader };
