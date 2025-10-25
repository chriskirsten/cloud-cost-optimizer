import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-4">Welcome back, {user?.email}!</p>
        <p className="text-gray-500">
          Use the navigation menu to access your career tools.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;