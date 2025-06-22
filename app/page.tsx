"use client";

import Image from "next/image";
import Link from "next/link";
import TokenPrice from "@/components/TokenPrice";
import { useState } from "react";

export default function Home() {
  const [copySuccess, setCopySuccess] = useState(false);

  // Copy to clipboard function
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const contractAddress = "31TxE8kyhUJfq8JPeJNTdVPZeibQrcNnDbkvnigVpump";

  return (
    <>
      {/* Copy Success Toast */}
      {copySuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-2 rounded-lg backdrop-blur-sm">
          ✓ Copied to clipboard!
        </div>
      )}

      {/* Background Particles */}
      <div className="bg-particles"></div>
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative">
        {/* Header */}
        <header className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 p-4 sm:p-6 md:p-10">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-blue-500/30 rounded-full blur-md animate-pulse"></div>
              <Image
                src="/logo333.png"
                alt="gor/acc logo"
                width={40}
                height={40}
                className="relative rounded-full sm:w-12 sm:h-12"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold gradient-text">gor/acc</span>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <TokenPrice />
            <div className="flex items-center gap-2 sm:gap-3">
              <Link 
                href="https://x.com/GorbaganaAcc"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-full gradient-card hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
                title="@GorbaganaAcc"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              
              <Link 
                href="https://t.me/gor_acc"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-full gradient-card hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                title="Telegram Channel"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </Link>
              
              <Link 
                href="https://x.com/i/communities/1936538249490481482"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 font-semibold transform hover:scale-105"
                title="X Community"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-blue-600 rounded-lg opacity-100 animate-gradient-x"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-blue-600 rounded-lg blur-lg opacity-50 animate-pulse"></div>
                
                {/* Button content */}
                <div className="relative flex items-center gap-2 text-white text-sm sm:text-base">
                  <svg className="w-4 h-4 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>Community</span>
                </div>
              </Link>
              
              <Link 
                href="https://dexscreener.com/solana/7g3zkutx3w4cqbbx3gwbhe1dkoak7kp4kfcvxznfadu4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-full gradient-card hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                title="View on DexScreener"
              >
                <Image
                  src="/beyaz.webp"
                  alt="DexScreener"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
          <div className="max-w-7xl mx-auto">
            {/* Hero Card */}
            <div className="relative overflow-hidden rounded-3xl">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 animate-pulse" />
              
              {/* Main Content */}
              <div className="relative gradient-card p-8 md:p-12">
                {/* Logo */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  <Image
                    src="/logo333.png"
                    alt="gor/acc logo"
                    width={160}
                    height={160}
                    className="relative rounded-full floating"
                    priority
                  />
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="gradient-text">gormeme.fun</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
                  Revolutionary gaming experience is being built, powered by gor/acc team
                </p>

                {/* Status Badge */}
                <div className="inline-flex items-center space-x-2 status-live px-4 py-2 rounded-full mb-8">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Building</span>
                </div>

                {/* Mystery text */}
                <div className="space-y-4 mb-12">
                  <p className="text-lg text-gray-400 pulse-glow">
                    The future of meme gaming is in development...
                  </p>
                </div>

                {/* Tweet Embed */}
                <div className="mt-8 max-w-xl mx-auto">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="gradient-card p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-white">CryptoSamet</span>
                            <span className="text-gray-400 text-sm">@CryptoSamettt</span>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed mb-3">
                            🚀 Exciting news in the crypto space! The gor/acc team is building something revolutionary. 
                            Can't wait to see what they're cooking up! #Crypto #Innovation #Building
                          </p>
                          <div className="flex items-center justify-between text-gray-500 text-sm">
                            <span>12:34 PM · Dec 22, 2024</span>
                            <Link 
                              href="https://x.com/CryptoSamettt/status/1936878341211971889"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                              View on X →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Token Info Card */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="token-info-card p-6">
                  <h3 className="text-lg font-semibold gradient-text mb-4">$gor/acc Token</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-800/30 rounded-xl p-3">
                      <p className="text-xs text-gray-400 mb-1">Contract</p>
                      <div className="flex items-center gap-2">
                        <p className="font-mono text-xs break-all text-gray-300 flex-1">{contractAddress}</p>
                        <button
                          onClick={() => copyToClipboard(contractAddress)}
                          className="p-1 rounded hover:bg-gray-700/50 transition-colors group"
                          title="Copy contract address"
                        >
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-2 12H10a2 2 0 01-2-2v-8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="bg-gray-800/30 rounded-xl p-3">
                      <p className="text-xs text-gray-400 mb-1">Network</p>
                      <p className="text-gray-300">Solana <span className="text-gray-500">(for now)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 text-center p-6 text-sm text-gray-500">
          <p>© 2025 gor/acc • Building on Gorbagana</p>
        </footer>
      </main>
    </>
  );
}