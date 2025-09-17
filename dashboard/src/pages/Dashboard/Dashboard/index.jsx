import React from 'react';
import PortfolioPerformance from '../PortfolioPerformance';
import TokensSection from '../TokensSection';
import ChainAllocation from '../ChainAllocation';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Portfolio Performance Chart with Stats Cards Inside */}
        <PortfolioPerformance />

        {/* Chain Allocation */}
        <ChainAllocation />
      </div>

      {/* Tokens Section */}
      <TokensSection />
    </div>
  );
}