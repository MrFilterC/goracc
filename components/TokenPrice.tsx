'use client';

import { useEffect, useState, useRef } from 'react';

export default function TokenPrice() {
  const [marketCap, setMarketCap] = useState<number | null>(null);
  const [priceChange, setPriceChange] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [flashClass, setFlashClass] = useState('');
  const prevMarketCapRef = useRef<number | null>(null);

  const formatMarketCap = (value: number): string => {
    if (value >= 1_000_000_000) {
      return `$${(value / 1_000_000_000).toFixed(2)}B`;
    } else if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(2)}M`;
    } else if (value >= 1_000) {
      return `$${(value / 1_000).toFixed(2)}K`;
    }
    return `$${value.toFixed(2)}`;
  };

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        // DexScreener API for the token
        const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/31TxE8kyhUJfq8JPeJNTdVPZeibQrcNnDbkvnigVpump`);
        const data = await response.json();
        
        if (data.pairs && data.pairs.length > 0) {
          const pair = data.pairs[0];
          console.log('DexScreener data:', pair); // Debug log
          
          const fdv = parseFloat(pair.fdv); // Fully Diluted Valuation
          const mcap = parseFloat(pair.marketCap) || fdv; // Use marketCap if available, otherwise FDV
          
          // Trigger animation if market cap changed
          if (prevMarketCapRef.current !== null && mcap !== prevMarketCapRef.current) {
            if (mcap > prevMarketCapRef.current) {
              setFlashClass('flash-green');
            } else {
              setFlashClass('flash-red');
            }
            // Remove animation class after animation completes
            setTimeout(() => setFlashClass(''), 600);
          }
          
          prevMarketCapRef.current = mcap;
          setMarketCap(mcap);
          
          // Try different fields for price change
          const change = pair.priceChange?.h24 || pair.priceChange24h || pair.priceChange?.["24h"];
          const parsedChange = parseFloat(change);
          setPriceChange(isNaN(parsedChange) ? null : parsedChange);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching price:', error);
        setLoading(false);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 10000); // Update every 10 seconds for better animation demo

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <div className="w-24 h-6 gradient-card rounded-full animate-pulse"></div>
      </div>
    );
  }

  if (!marketCap) {
    return null;
  }

  return (
    <div className={`relative flex items-center gap-1 text-xs bg-gray-800/30 px-2 py-1.5 rounded-lg transition-all duration-300 ${flashClass}`}>
      <div className="flex items-center gap-1">
        <span className="font-mono font-medium text-gray-300">{formatMarketCap(marketCap)}</span>
        {priceChange !== null && !isNaN(priceChange) && (
          <span className={`text-xs font-medium ${priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(1)}%
          </span>
        )}
      </div>
    </div>
  );
}