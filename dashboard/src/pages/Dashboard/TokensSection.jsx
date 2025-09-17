import React from 'react';

const TokensSection = () => {
  const tokens = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      balance: '0.04321',
      totalValue: '$2,340.32',
      icon: '₿',
      color: 'bg-orange-500'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      balance: '32.234',
      totalValue: '$5,340.32',
      icon: 'Ξ',
      color: 'bg-blue-500'
    }
  ];

  return (
    <div className="mt-8">
      <div className="mb-6">
        <h4 className="text-lg font-bold text-white">Tokens</h4>
      </div>

      <div className="grid grid-cols-4 gap-4 px-4 py-2 text-gray-400 text-sm font-medium border-b border-gray-700 mb-4">
        <div>Name</div>
        <div className="text-center">Balance</div>
        <div className="text-center">Total Value</div>
        <div className="text-center">Trade</div>
      </div>

      <div className="space-y-3">
        {tokens.map((token, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 items-center p-4 rounded-lg hover:bg-opacity-70 transition-all duration-200" style={{ backgroundColor: 'rgba(50, 45, 70, 0.4)' }}>
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${token.color}`}>
                <span className="text-white text-sm font-bold">
                  {token.icon}
                </span>
              </div>
              <div>
                <div className="text-white font-medium">{token.name}</div>
                <div className="text-gray-400 text-xs">{token.symbol}</div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-white font-medium">{token.balance}</div>
            </div>

            <div className="text-center">
              <div className="text-white font-medium">{token.totalValue}</div>
            </div>

            <div className="text-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Trade
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokensSection;