import React from 'react';
import { Users, Package, ShoppingCart, TrendingUp } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const stats = [
    { label: 'Total Users', value: '15,349', icon: Users, trend: '+12%' },
    { label: 'Total Products', value: '28,456', icon: Package, trend: '+8%' },
    { label: 'Total Orders', value: '1,245', icon: ShoppingCart, trend: '+15%' },
    { label: 'Revenue', value: '₹45.6L', icon: TrendingUp, trend: '+18%' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                </div>
                <div className="bg-[#2E5B9A]/10 p-3 rounded-full">
                  <Icon size={24} className="text-[#2E5B9A]" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-500">{stat.trend}</span>
                <span className="text-gray-600 ml-2">vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">New user registered</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
                <span className="text-[#2E5B9A]">View</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Popular Products</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium">Product Name</p>
                    <p className="text-sm text-gray-600">₹1,299</p>
                  </div>
                </div>
                <span className="text-[#2E5B9A]">View</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;