import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main className='flex justify-center items-center'>
      <form className='max-w-600 w-[500px] bg-white shadow-xl rounded-lg p-6 my-24'>
        <h1 className='font-bold text-3xl text-center'>Sign Up</h1>
        <h2 className='font-semibold text-center mt-5'>
          Get Started by creating an account
        </h2>

        <div className='mt-6'>
          <input
            type='text'
            placeholder='Username'
            className='border py-4 px-3 rounded-md w-full border-gray-300 focus:border-teal-600'
          />
        </div>
        <div className='mt-6'>
          <input
            type='text'
            placeholder='Email'
            className='border py-4 px-3 rounded-md w-full border-gray-300 focus:border-teal-600'
          />
        </div>
        <div className='mt-4'>
          <input
            type='password'
            placeholder='Password'
            className='border py-4 px-3 rounded-md w-full border-gray-300 focus:border-teal-600'
          />
        </div>
        <div className='mt-4'>
          <input
            type='password'
            placeholder='Repeat Password'
            className='border py-4 px-3 rounded-md w-full border-gray-300 focus:border-teal-600'
          />
        </div>
        <div className='mt-4'>
          <input
            type='submit'
            value='Sign Up'
            className='bg-teal-600 text-white py-4 px-3 rounded-md w-full border-gray-300 hover:bg-teal-500 focus:bg-teal-700 cursor-pointer'
          />
        </div>
        <div className='mt-4'>
          <p>
            Already have an account?{" "}
            <Link className='text-teal-500' to='/login'>
              Login
            </Link>{" "}
          </p>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
