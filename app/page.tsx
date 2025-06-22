"use client";

import Image from "next/image";
import Link from "next/link";
import TokenPrice from "@/components/TokenPrice";
import { useState, useRef } from "react";

export default function Home() {
  const [copySuccess, setCopySuccess] = useState(false);
  const [playingVideos, setPlayingVideos] = useState<{ [key: string]: boolean }>({});
  
  // Video refs
  const buyVideoRef = useRef<HTMLVideoElement>(null);
  const createVideoRef = useRef<HTMLVideoElement>(null);
  const exploreVideoRef = useRef<HTMLVideoElement>(null);

  // Copy to clipboard function
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  // Play video function
  const playVideo = (videoKey: string, videoRef: React.RefObject<HTMLVideoElement | null>) => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlayingVideos(prev => ({ ...prev, [videoKey]: true }));
    }
  };

  // Handle video play/pause events
  const handleVideoPlay = (videoKey: string) => {
    setPlayingVideos(prev => ({ ...prev, [videoKey]: true }));
  };

  const handleVideoPause = (videoKey: string) => {
    setPlayingVideos(prev => ({ ...prev, [videoKey]: false }));
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
                  <span className="gradient-text">Gorbagana Acceleration</span>
                </h1>

                {/* Main subtitle */}
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
                  First official launchpad of Gorbagana Chain is being built
                </p>

                {/* Status Badge */}
                <div className="inline-flex items-center space-x-2 status-live px-4 py-2 rounded-full mb-8">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Building</span>
                </div>

                {/* Mystery text */}
                <div className="space-y-4 mb-12">
                  <p className="text-lg text-gray-400 pulse-glow">
                    The future of Gorbagana ecosystem is in development...
                  </p>
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

        {/* Live Updates Section */}
        <section className="relative z-10 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold gradient-text text-center mb-12">Live Updates</h2>
            
            {/* Tweet Card */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="gradient-card p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-white">CryptoSamet</span>
                      <span className="text-gray-400 text-sm">@CryptoSamettt</span>
                    </div>
                    <div className="text-gray-300 text-sm leading-relaxed mb-4">
                      <p className="mb-3">
                        Alright guys, I think it's time to clear a few things up.
                      </p>
                      <p className="mb-3">
                        I loved Gor/Acc as a meme, paid for the DEX listing out of my own pocket, and launched the X community myself — everything's been going great. Then we listened to the community feedback and decided to build real upgrades for Gor/Acc.
                      </p>
                      <p className="mb-3">
                        No clickbait. No "coming soon." No scams, no bundles, no influencers, no paid shills. Just a solid project built together with the community.
                      </p>
                      <p className="mb-3">
                        Leaving you some visuals — we'll answer your questions in the Twitter Space we're hosting Monday evening.
                      </p>
                      <p className="mb-3">
                        The community is with us, and we're ready to take this to the next level.
                      </p>
                      <p className="text-orange-400 font-semibold">
                        Join the $Gor/Acc army. 🫡
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-gray-500 text-sm border-t border-gray-600/30 pt-3">
                      <span>12:34 PM · Jun 22, 2025</span>
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
        </section>

        {/* Beta Screenshots Section */}
        <section className="relative z-10 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold gradient-text text-center mb-12">Beta Screenshots</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Buy Sell Page */}
              <div className="relative overflow-hidden rounded-2xl group hover:scale-105 transition-all duration-300">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative gradient-card p-6 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold gradient-text">Buy Sell Page</h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Advanced trading interface with real-time price charts and instant swap functionality
                  </p>
                  
                  <div className="relative rounded-xl overflow-hidden bg-gray-900/50 group/video">
                    {/* Play Button Overlay */}
                    <div 
                      className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 z-10 cursor-pointer ${
                        playingVideos.buy ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover/video:opacity-0'
                      }`}
                      onClick={() => playVideo('buy', buyVideoRef)}
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    <video 
                      className="w-full h-auto transition-all duration-300 group-hover/video:scale-105" 
                      controls 
                      preload="metadata"
                      poster="/logo333.png"
                      ref={buyVideoRef}
                      onPlay={() => handleVideoPlay('buy')}
                      onPause={() => handleVideoPause('buy')}
                      onEnded={() => handleVideoPause('buy')}
                    >
                      <source src="/buy_sell_page.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Video Duration Badge */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-mono">
                      0:15
                    </div>
                  </div>
                </div>
              </div>

              {/* Token Create */}
              <div className="relative overflow-hidden rounded-2xl group hover:scale-105 transition-all duration-300">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative gradient-card p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold gradient-text">Token Create</h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    One-click token creation with automated liquidity pools and fair launch mechanisms
                  </p>
                  
                  <div className="relative rounded-xl overflow-hidden bg-gray-900/50 group/video">
                    {/* Play Button Overlay */}
                    <div 
                      className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 z-10 cursor-pointer ${
                        playingVideos.create ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover/video:opacity-0'
                      }`}
                      onClick={() => playVideo('create', createVideoRef)}
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    <video 
                      className="w-full h-auto transition-all duration-300 group-hover/video:scale-105" 
                      controls 
                      preload="metadata"
                      poster="/logo333.png"
                      ref={createVideoRef}
                      onPlay={() => handleVideoPlay('create')}
                      onPause={() => handleVideoPause('create')}
                      onEnded={() => handleVideoPause('create')}
                    >
                      <source src="/token_create.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Video Duration Badge */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-mono">
                      0:45
                    </div>
                  </div>
                </div>
              </div>

              {/* Explore Page */}
              <div className="relative overflow-hidden rounded-2xl group hover:scale-105 transition-all duration-300 lg:col-span-2 xl:col-span-1">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative gradient-card p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold gradient-text">Explore Page</h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Discover trending tokens, analytics dashboard and community-driven project listings
                  </p>
                  
                  <div className="relative rounded-xl overflow-hidden bg-gray-900/50 group/video">
                    {/* Play Button Overlay */}
                    <div 
                      className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 z-10 cursor-pointer ${
                        playingVideos.explore ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover/video:opacity-0'
                      }`}
                      onClick={() => playVideo('explore', exploreVideoRef)}
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    <video 
                      className="w-full h-auto transition-all duration-300 group-hover/video:scale-105" 
                      controls 
                      preload="metadata"
                      poster="/logo333.png"
                      ref={exploreVideoRef}
                      onPlay={() => handleVideoPlay('explore')}
                      onPause={() => handleVideoPause('explore')}
                      onEnded={() => handleVideoPause('explore')}
                    >
                      <source src="/explore page.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Video Duration Badge */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-mono">
                      0:30
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coming Soon Badge */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-500/30">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">More Features Coming Soon</span>
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