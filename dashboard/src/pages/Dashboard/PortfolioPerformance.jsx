import React from 'react';

const PortfolioPerformance = () => {
  const chartData = [
    { date: '17 Mar', value: 3100 },
    { date: '18 Mar', value: 3200 },
    { date: '19 Mar', value: 3800 },
    { date: '20 Mar', value: 4200 },
    { date: '21 Mar', value: 4100 },
    { date: '22 Mar', value: 4800 },
    { date: '23 Mar', value: 5200 },
    { date: '24 Mar', value: 5100 },
    { date: '25 Mar', value: 5600 },
    { date: '26 Mar', value: 5400 },
  ];

  const createLinePath = (data, width, height) => {
    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    const range = maxValue - minValue;
    
    return data.map((point, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((point.value - minValue) / range) * height;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  return (
    <div className="lg:col-span-2 rounded-xl p-6" style={{ backgroundColor: 'rgba(60, 50, 80, 0.4)', backdropFilter: 'blur(20px)' }}>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(70, 60, 90, 0.5)', backdropFilter: 'blur(10px)' }}>
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-gray-600/50 rounded-lg flex items-center justify-center">
              <span className="text-sm">💰</span>
            </div>
            <span className="text-gray-300 text-sm">Total assets</span>
          </div>
          <div className="text-2xl font-bold text-white">$87,743</div>
        </div>

        <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(70, 60, 90, 0.5)', backdropFilter: 'blur(10px)' }}>
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-gray-600/50 rounded-lg flex items-center justify-center">
              <span className="text-sm">📊</span>
            </div>
            <span className="text-gray-300 text-sm">Total deposits</span>
          </div>
          <div className="text-2xl font-bold text-white">$78,342</div>
        </div>

        <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(70, 60, 90, 0.5)', backdropFilter: 'blur(10px)' }}>
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-gray-600/50 rounded-lg flex items-center justify-center">
              <span className="text-sm">📈</span>
            </div>
            <span className="text-gray-300 text-sm">APY</span>
          </div>
          <div className="text-2xl font-bold text-green-400">+12.3%</div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Portfolios performance</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-700 rounded-lg px-3 py-1">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">Ξ</span>
            </div>
            <span className="text-white text-sm font-medium">ETH</span>
            <span className="text-gray-400">📊</span>
          </div>
          
          <div className="flex items-center space-x-1 text-sm">
            <button className="px-2 py-1 text-gray-400 hover:text-white">3H</button>
            <button className="px-2 py-1 text-gray-400 hover:text-white">1D</button>
            <button className="px-2 py-1 bg-gray-600 text-white rounded">1W</button>
            <button className="px-2 py-1 text-gray-400 hover:text-white">1M</button>
            <button className="px-2 py-1 text-gray-400 hover:text-white">3M</button>
            <button className="px-2 py-1 text-gray-400 hover:text-white">1Y</button>
            <button className="px-2 py-1 text-gray-400 hover:text-white">ALL</button>
          </div>
        </div>
      </div>

      <div className="bg-black rounded-lg p-4 relative" style={{ height: '500px' }}>
        <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-between text-gray-500 text-xs py-4">
          <span>$ 6000</span>
          <span>$ 5500</span>
          <span>$ 5000</span>
          <span>$ 4500</span>
          <span>$ 4000</span>
          <span>$ 3500</span>
          <span>$ 3000</span>
        </div>

        <div className="absolute inset-0 ml-12 mr-4">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full border-t border-gray-800"
              style={{ top: `${(i * 100) / 6}%` }}
            />
          ))}
        </div>

        <div className="absolute bottom-8 left-12 right-4 top-8">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            <path
              d={createLinePath(chartData, 100, 100) + ' L 100 100 L 0 100 Z'}
              fill="url(#areaGradient)"
            />
            
            <path
              d={createLinePath(chartData, 100, 100)}
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              fill="none"
              className="drop-shadow-lg"
            />
            
            {chartData.map((point, index) => {
              const maxValue = Math.max(...chartData.map(d => d.value));
              const minValue = Math.min(...chartData.map(d => d.value));
              const range = maxValue - minValue;
              const x = (index / (chartData.length - 1)) * 100;
              const y = 100 - ((point.value - minValue) / range) * 100;
              
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="0.8"
                  fill="#10b981"
                  className="drop-shadow-sm"
                />
              );
            })}
          </svg>
        </div>

        <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded text-sm font-bold">
          $5400
        </div>

        <div className="absolute bottom-2 left-12 right-4 flex justify-between text-gray-500 text-xs px-2">
          {chartData.map((data, index) => (
            <span key={index} className={index % 2 === 0 ? 'block' : 'hidden sm:block'}>
              {data.date}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPerformance;