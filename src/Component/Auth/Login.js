import React from 'react';

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-serif mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
            <input type="text" id="username" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
