import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { SidebarItems } from './sidebarItems';

const DashboardLayout = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-100 via-purple-900 to-violet-900 text-white">
      <div className="w-64 p-4 space-y-2" style={{ backgroundColor: '#440495' }}>
        <div className="mb-8 p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-purple-900 font-bold text-sm">⚡</span>
            </div>
            <h1 className="text-xl font-bold text-white">CrypTest</h1>
          </div>
        </div>
        
        <div className="space-y-1">
          {SidebarItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg' 
                    : 'hover:bg-purple-800/40 text-gray-300 hover:text-white'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <button className="w-[10%] p-3 bg-gray-800/50 hover:bg-gray-700/60 rounded-xl transition-all duration-200 flex items-center space-x-3">
            <span>🚪</span>
            <span>Log Out</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="p-4" style={{ backgroundColor: 'rgba(30, 20, 45, 0.8)' }}>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Welcome Back, Arkhan</h2>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-800/60 border border-gray-600/30 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
              
              <div className="relative">
                <button className="bg-gray-800/60 p-2 rounded-lg hover:bg-gray-700/60 transition-colors">
                  <span className="text-lg">🔔</span>
                </button>
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">3</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <span className="text-white font-medium">Evano</span>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;