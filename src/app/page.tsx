'use client'
import Head from 'next/head';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

export default function Home() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues
  } = useForm();

  const onSubmit= async (data: Partial<FormValues>) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-4 md:p-24">
      <Head>
        <title>Registration Form</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 container mx-auto">
        <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <Controller
              name="username"
              control={control}
              rules={{
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username must be at least 3 characters',
                },
                maxLength: {
                  value: 15,
                  message: 'Username must be at most 15 characters',
                },
                pattern: {
                  value: /^[a-zA-Z0-9_]+$/,
                  message:
                    'Username must be alphanumeric including underscores',
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="username"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              )}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">
                {errors.username.message?.toString()}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message?.toString()}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
                  message:
                    'Password must include uppercase, lowercase, number, and special character',
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="password"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message?.toString()}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: 'Confirm Password is required',
                validate: (value) =>
                  value === getValues('password') ||
                  'Passwords do not match',
              }}
              render={({ field }) => (
                <div className="mb-4">
                  <input
                    {...field}
                    type="password"
                    id="confirmPassword"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.confirmPassword.message?.toString()}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <Controller
              name="dateOfBirth"
              control={control}
              rules={{
                required: 'Date of Birth is required',
                validate: (value) =>
                  new Date().getFullYear() - new Date(value).getFullYear() >=
                  18 || 'You must be at least 18 years old',
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="date"
                    id="dateOfBirth"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                )}
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.dateOfBirth.message?.toString()}
                </p>
              )}
            </div>
  
            {/* Bio */}
            <div className="mb-4">
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <Controller
                name="bio"
                control={control}
                rules={{
                  maxLength: {
                    value: 300,
                    message: 'Bio must be at most 300 characters',
                  },
                }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="bio"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                )}
              />
              {errors.bio && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.bio.message?.toString()}
                </p>
              )}
            </div>
  
            {/* Gender */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <div className="mt-1">
                <label className="inline-flex items-center mr-4">
                  <Controller
                    name="gender"
                    control={control}
                    rules={{ required: 'Gender is required' }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="radio"
                        value="Male"
                        className="form-radio h-4 w-4 text-indigo-600"
                      />
                    )}
                  />
                  <span className="ml-2 text-sm">Male</span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <Controller
                    name="gender"
                    control={control}
                    rules={{ required: 'Gender is required' }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="radio"
                        value="Female"
                        className="form-radio h-4 w-4 text-indigo-600"
                      />
                    )}
                  />
                  <span className="ml-2 text-sm">Female</span>
                </label>
                <label className="inline-flex items-center">
                  <Controller
                    name="gender"
                    control={control}
                    rules={{ required: 'Gender is required' }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="radio"
                        value="Other"
                        className="form-radio h-4 w-4 text-indigo-600"
                      />
                    )}
                  />
                  <span className="ml-2 text-sm">Other</span>
                </label>
              </div>
              {errors.gender && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.gender.message?.toString()}
                </p>
              )}
            </div>
  
            {/* Terms and Conditions */}
            <div className="mb-4">
              <label className="flex items-center">
                <Controller
                  name="termsAndConditions"
                  control={control}
                  rules={{ required: 'Terms and Conditions must be accepted' }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-indigo-600"
                    />
                  )}
                />
                <span className="ml-2 text-sm">
                  I agree to the{' '}
                  <a href="#" className="text-indigo-600 underline">
                    Terms and Conditions
                  </a>
                </span>
              </label>
              {errors.termsAndConditions && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.termsAndConditions.message?.toString()}
                </p>
              )}
            </div>
  
            <div className='flex items-center justify-center'>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3"
              >
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>
    );
  }
  
 //FORM VALUES TYPES
  interface FormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: string;
    bio: string;
    gender: string;
    termsAndConditions: boolean;
  }