import {useEffect} from 'react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {Head, Link, useForm} from '@inertiajs/react';

export default function NewRegister() {
  const {data, setData, post, processing, errors, reset} = useForm({
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('register'));
  };

  return (
    <>
      {/* Start New Form */}
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div className="flex flex-col items-center">
          <h1 className="text-lg xl:text-3xl font-extrabold text-center">
            Sign up and discover local Mexican Artesans
          </h1>
          <div className="w-full flex-1 mt-4 md:mt-8">
            <div className="flex flex-col items-center">
              <button
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-1 lg:py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
              >
                <div className="bg-white p-1 md:p-2 rounded-full">
                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <Link href="/artesans/1" className="ml-4 text-sm">
                  Sign Up with Google
                </Link>
              </button>

            </div>
            <div className="my-2 border-b text-center">
              <div
                className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
              >
                Or sign up with e-mail
              </div>
            </div>
            <form onSubmit={submit}>
              <div className="mx-auto max-w-xs">
                <TextInput
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={data.name}
                  className="mt-1 block w-full"
                  autoComplete="name"
                  isFocused={true}
                  onChange={(e) => setData('name', e.target.value)}
                  required
                />
                <InputError message={errors.name} className="mt-2"/>

                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={data.email}
                  className="mt-1 block w-full"
                  autoComplete="username"
                  onChange={(e) => setData('email', e.target.value)}
                  required
                />
                <InputError message={errors.email} className="mt-2"/>

                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={data.password}
                  className="mt-1 block w-full"
                  autoComplete="new-password"
                  onChange={(e) => setData('password', e.target.value)}
                  required
                />
                <InputError message={errors.password} className="mt-2"/>

                <PrimaryButton className="ml-4" disabled={processing}>
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <path d="M20 8v6M23 11h-6"/>
                  </svg>
                  <span className="ml-3 text-sm">
                      Sign Up
                  </span>
                </PrimaryButton>

                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account with us?
                  {' '}
                  <Link href={route('login')}>Sign in here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End new Form */}

    </>
  );
}
