import React from 'react';

const ChainAllocation = () => {
  const cryptocurrencies = [
    { 
      name: 'Bitcoin', 
      symbol: 'BTC', 
      price: '$23.38', 
      change: '71.68%', 
      color: 'bg-orange-500',
      progressColor: 'bg-orange-500',
      icon: '₿'
    },
    { 
      name: 'Ethereum', 
      symbol: 'ETH', 
      price: '$23.38', 
      change: '71.68%', 
      color: 'bg-blue-500',
      progressColor: 'bg-blue-500',
      icon: 'Ξ'
    },
    { 
      name: 'Shiba', 
      symbol: 'SHIB', 
      price: '$23.38', 
      change: '71.68%', 
      color: 'bg-orange-400',
      progressColor: 'bg-orange-400',
      icon: '🐕'
    },
    { 
      name: 'Solana', 
      symbol: 'SOL', 
      price: '$23.38', 
      change: '71.68%', 
      color: 'bg-purple-500',
      progressColor: 'bg-purple-500',
      icon: '◎'
    },
    { 
      name: 'Tether', 
      symbol: 'USDT', 
      price: '$23.38', 
      change: '71.68%', 
      color: 'bg-green-500',
      progressColor: 'bg-green-500',
      icon: '₮'
    },
  ];

  return (
    <div className="rounded-xl p-6" style={{ backgroundColor: 'rgba(60, 50, 80, 0.4)', backdropFilter: 'blur(20px)' }}>
      <h3 className="text-xl font-bold text-white mb-6">Chain Allocation</h3>
      
      <div className="space-y-4">
        {cryptocurrencies.map((crypto, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${crypto.color}`}>
                  <span className="text-white text-xs font-bold">
                    {crypto.icon}
                  </span>
                </div>
                <span className="text-white font-medium">{crypto.name}</span>
              </div>
              <div className="text-right">
                <div className="text-white font-medium">{crypto.price}</div>
                <div className="text-green-400 text-sm">{crypto.change}</div>
              </div>
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-1.5">
              <div 
                className={`h-1.5 rounded-full ${crypto.progressColor}`}
                style={{ width: '71.68%' }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-2 text-purple-400 hover:text-purple-300 transition-colors">
        View All
      </button>

      <div className="mt-8 rounded-lg p-4" style={{ backgroundColor: 'rgba(40, 35, 60, 0.6)' }}>
        <div className="flex -space-x-2 mb-3">
          <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-gray-900"></div>
          <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-gray-900"></div>
          <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-gray-900"></div>
          <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
            <span className="text-white text-xs font-bold">+</span>
          </div>
        </div>
        <h4 className="text-white font-bold mb-2">Join Our Community</h4>
        <p className="text-gray-400 text-sm mb-4">Learn from best in market, connect!</p>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default ChainAllocation;