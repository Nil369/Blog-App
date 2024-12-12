import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-800 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-4">Page Not Found</p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
