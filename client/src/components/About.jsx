import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 dark:text-gray-200 sm:text-4xl">
            About My Personal Library
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 dark:text-gray-400 mx-auto">
            Welcome to my personal library where I collect and share my favorite books and stories.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                {/* Heroicon name: globe-alt */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-100 dark:text-gray-200">
                  Our Mission
                </h3>
                <p className="mt-2 text-base text-gray-300 dark:text-gray-400">
                  To promote reading and share knowledge through our curated collection of books.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                {/* Heroicon name: scale */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h18M3 9h9m-9 6h9m-9 6h9M5 3v18"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-100 dark:text-gray-200">
                  Our Values
                </h3>
                <p className="mt-2 text-base text-gray-300 dark:text-gray-400">
                  Integrity, Diversity, and a Passion for Learning are at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
