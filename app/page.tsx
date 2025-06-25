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

  // Video control states
  const [playingStates, setPlayingStates] = useState<{ [key: number]: boolean }>({});
  const [videoDurations, setVideoDurations] = useState<{ [key: number]: number }>({});
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Video modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState<{src: string, title: string} | null>(null);

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

  // Toggle video play/pause
  const toggleVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingStates[index]) {
      video.pause();
      setPlayingStates(prev => ({ ...prev, [index]: false }));
    } else {
      video.play();
      setPlayingStates(prev => ({ ...prev, [index]: true }));
    }
  };

  // Format duration
  const formatDuration = (duration: number): string => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Open video modal
  const openVideoModal = (src: string, title: string) => {
    setModalVideo({ src, title });
    setModalOpen(true);
    // Prevent body scroll on mobile
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  };

  // Close video modal
  const closeVideoModal = () => {
    setModalOpen(false);
    setModalVideo(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
    document.body.style.position = 'unset';
    document.body.style.width = 'unset';
  };

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
      {/* Beta Announcement Banner */}
      <div className="relative z-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-b border-green-500/30">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">NEW</span>
            </div>
            <p className="text-sm sm:text-base text-gray-200 font-medium">
              gormeme.fun beta is live! 
              <Link 
                href="https://www.gormeme.fun/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-green-400 hover:text-green-300 underline transition-colors"
              >
                Visit now →
              </Link>
            </p>
          </div>
        </div>
      </div>

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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a 
              href="#live-updates" 
              className="relative text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm font-bold tracking-wide uppercase hover:scale-105 group"
            >
              <span className="relative z-10">Live Updates</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </a>
            <a 
              href="#beta-screenshots" 
              className="relative text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm font-bold tracking-wide uppercase hover:scale-105 group"
            >
              <span className="relative z-10">Beta Videos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </a>
            <a 
              href="#what-is-gorbagana" 
              className="relative text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm font-bold tracking-wide uppercase hover:scale-105 group"
            >
              <span className="relative z-10">What is Gorbagana?</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </a>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg gradient-card"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
        {/* Mobile-optimized header right section */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Mobile: First group - X, TG, DEX icons only */}
          <div className="flex sm:hidden items-center gap-1.5">
            {/* X/Twitter */}
            <Link 
              href="https://x.com/GorbaganaAcc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg gradient-card hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-orange-500/20"
              title="@GorbaganaAcc"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
              
            {/* Telegram */}
            <Link 
              href="https://t.me/gor_acc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg gradient-card hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20"
              title="Telegram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </Link>
              
            {/* DexScreener */}
            <Link 
              href="https://dexscreener.com/solana/7g3zkutx3w4cqbbx3gwbhe1dkoak7kp4kfcvxznfadu4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg gradient-card hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20"
              title="DexScreener"
            >
              <Image
                src="/beyaz.webp"
                alt="DexScreener"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </Link>
          </div>
          
          {/* Mobile: Second group - Price and X Community */}
          <div className="flex sm:hidden items-center gap-2">
            <TokenPrice />
            
            {/* X Community */}
            <Link 
              href="https://x.com/i/communities/1936538249490481482"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-2 py-1.5 rounded-lg transition-all duration-300 font-medium transform hover:scale-105"
              title="X Community"
            >
              {/* Simplified gradient background for mobile */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg opacity-90"></div>
              
              {/* Mobile content */}
              <div className="relative flex items-center gap-1 text-white">
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-xs font-semibold">CT</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop: Reordered - Price, X CT, X, TG, DEX */}
          <div className="hidden sm:flex items-center gap-2">
            {/* TokenPrice - First */}
            <TokenPrice />
            
            {/* X Community - Second */}
            <Link 
              href="https://x.com/i/communities/1936538249490481482"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-3 py-2 rounded-lg transition-all duration-300 font-medium transform hover:scale-105"
              title="X Community"
            >
              {/* Simplified gradient background for mobile */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg opacity-90"></div>
              
              {/* Desktop content */}
              <div className="relative flex items-center gap-1 text-white">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-sm font-semibold">CT</span>
              </div>
            </Link>
            
            {/* X/Twitter - Third */}
            <Link 
              href="https://x.com/GorbaganaAcc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg gradient-card hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-orange-500/20"
              title="@GorbaganaAcc"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
              
            {/* Telegram - Fourth */}
            <Link 
              href="https://t.me/gor_acc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg gradient-card hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20"
              title="Telegram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </Link>
              
            {/* DexScreener - Fifth */}
            <Link 
              href="https://dexscreener.com/solana/7g3zkutx3w4cqbbx3gwbhe1dkoak7kp4kfcvxznfadu4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg gradient-card hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20"
              title="DexScreener"
            >
              <Image
                src="/beyaz.webp"
                alt="DexScreener"
                width={16}
                height={16}
                className="w-5 h-5"
              />
            </Link>
          </div>
        </div>
      </header>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold gradient-text">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg gradient-card"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="space-y-3">
                <a 
                  href="#live-updates" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-orange-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50 font-bold tracking-wide uppercase text-sm hover:scale-105 transform"
                >
                  Live Updates
                </a>
                <a 
                  href="#beta-screenshots" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-orange-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50 font-bold tracking-wide uppercase text-sm hover:scale-105 transform"
                >
                  Beta Videos
                </a>
                <a 
                  href="#what-is-gorbagana" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-orange-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50 font-bold tracking-wide uppercase text-sm hover:scale-105 transform"
                >
                  What is Gorbagana?
                </a>
              </nav>
            </div>
          </div>
        )}

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
        <section id="live-updates" className="section-padding relative z-10 py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h2 className="text-3xl font-bold gradient-text">Live Updates</h2>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">LIVE</span>
              </div>
            </div>
            
            {/* Tweet Card */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="gradient-card p-6">
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
        </section>

                  {/* Beta Videos Section */}
        <section id="beta-screenshots" className="section-padding relative z-10 py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold gradient-text text-center mb-12">Beta Videos</h2>
            
            <div className="grid-responsive grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Buy/Sell Demo */}
              <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[0] = el;
                    }}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loop
                    muted
                    playsInline
                    onLoadedMetadata={() => {
                      if (videoRefs.current[0]) {
                        setVideoDurations(prev => ({ ...prev, 0: videoRefs.current[0]?.duration || 0 }));
                      }
                    }}
                    onPlay={() => setPlayingStates(prev => ({ ...prev, 0: true }))}
                    onPause={() => setPlayingStates(prev => ({ ...prev, 0: false }))}
                    onEnded={() => setPlayingStates(prev => ({ ...prev, 0: false }))}
                  >
                    <source src="/buy_sell_page.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Play button overlay */}
                  <div 
                    className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${playingStates[0] ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:opacity-80'}`}
                    onClick={() => toggleVideo(0)}
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <svg className="w-8 h-8 text-gray-900 ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded pointer-events-none">
                    {videoDurations[0] ? formatDuration(videoDurations[0]) : '--:--'}
                  </div>
                  
                  {/* Fullscreen button */}
                  <button
                    onClick={() => openVideoModal('/buy_sell_page.mp4', 'Buy/Sell Interface')}
                    className="absolute bottom-3 right-3 w-8 h-8 sm:w-10 sm:h-10 bg-black/70 hover:bg-orange-500/80 text-white rounded flex items-center justify-center transition-colors duration-200"
                    title="Open in modal"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
                
                <div className="gradient-card mt-4 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 14l5-5 5 5z"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-white text-lg">Buy/Sell Interface</h3>
                  </div>
                </div>
              </div>
              
              {/* Token Creation Demo */}
              <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[1] = el;
                    }}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loop
                    muted
                    playsInline
                    onLoadedMetadata={() => {
                      if (videoRefs.current[1]) {
                        setVideoDurations(prev => ({ ...prev, 1: videoRefs.current[1]?.duration || 0 }));
                      }
                    }}
                    onPlay={() => setPlayingStates(prev => ({ ...prev, 1: true }))}
                    onPause={() => setPlayingStates(prev => ({ ...prev, 1: false }))}
                    onEnded={() => setPlayingStates(prev => ({ ...prev, 1: false }))}
                  >
                    <source src="/token_create.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Play button overlay */}
                  <div 
                    className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${playingStates[1] ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:opacity-80'}`}
                    onClick={() => toggleVideo(1)}
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <svg className="w-8 h-8 text-gray-900 ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded pointer-events-none">
                    {videoDurations[1] ? formatDuration(videoDurations[1]) : '--:--'}
                  </div>
                  
                  {/* Fullscreen button */}
                  <button
                    onClick={() => openVideoModal('/token_create.mp4', 'Token Creation')}
                    className="absolute bottom-3 right-3 w-8 h-8 sm:w-10 sm:h-10 bg-black/70 hover:bg-orange-500/80 text-white rounded flex items-center justify-center transition-colors duration-200"
                    title="Open in modal"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
          </div>

                <div className="gradient-card mt-4 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-white text-lg">Token Creation</h3>
                  </div>
                </div>
              </div>
              
              {/* Explore Page Demo */}
              <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[2] = el;
                    }}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loop
                    muted
                    playsInline
                    onLoadedMetadata={() => {
                      if (videoRefs.current[2]) {
                        setVideoDurations(prev => ({ ...prev, 2: videoRefs.current[2]?.duration || 0 }));
                      }
                    }}
                    onPlay={() => setPlayingStates(prev => ({ ...prev, 2: true }))}
                    onPause={() => setPlayingStates(prev => ({ ...prev, 2: false }))}
                    onEnded={() => setPlayingStates(prev => ({ ...prev, 2: false }))}
                  >
                    <source src="/explore page.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Play button overlay */}
                  <div 
                    className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${playingStates[2] ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:opacity-80'}`}
                    onClick={() => toggleVideo(2)}
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <svg className="w-8 h-8 text-gray-900 ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded pointer-events-none">
                    {videoDurations[2] ? formatDuration(videoDurations[2]) : '--:--'}
                  </div>
                  
                  {/* Fullscreen button */}
                  <button
                    onClick={() => openVideoModal('/explore page.mp4', 'Explore Page')}
                    className="absolute bottom-3 right-3 w-8 h-8 sm:w-10 sm:h-10 bg-black/70 hover:bg-orange-500/80 text-white rounded flex items-center justify-center transition-colors duration-200"
                    title="Open in modal"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
                
                <div className="gradient-card mt-4 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-white text-lg">Explore Page</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Gorbagana Chain Section - En son konuma alındı */}
        <section id="what-is-gorbagana" className="section-padding relative z-10 py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold gradient-text text-center mb-12">What is Gorbagana Chain?</h2>
            
            <div className="grid-responsive grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              {/* Info Card */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="gradient-card p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold gradient-text">The Grouch Fork</h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Gorbagana Chain emerged as a community-driven fork with a unique vision: 
                      combining the technical excellence of modern blockchain infrastructure 
                      with the cultural power of meme-driven communities.
                    </p>
                    <p>
                      Unlike traditional blockchain networks, Gorbagana Chain embraces the 
                      chaotic energy that drives true innovation in the crypto space.
                    </p>
                    <p>
                      With <span className="text-orange-400 font-semibold">$GOR</span> as the native token 
                      and <span className="text-green-400 font-semibold">oscar the grouch.png</span> as 
                      the iconic mascot, this chain represents a new paradigm in decentralized finance.
                    </p>
          </div>

                  {/* Website Link */}
                  <div className="mt-8 p-4 bg-gray-800/30 rounded-xl border border-gray-600/30">
                    <p className="text-xs text-gray-400 mb-2">Official Website</p>
                    <Link 
                      href="https://gorbaganachain.xyz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm break-all"
                    >
                      gorbaganachain.xyz →
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Tweet Card - lex_node */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="gradient-card p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-white">lex_node</span>
                        <span className="text-gray-400 text-sm">@lex_node</span>
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-gray-300 text-sm leading-relaxed mb-4">
                        <p className="mb-3">
                          two forks:
                        </p>
                        <p className="mb-2">
                          one is called <span className="text-purple-400 font-semibold">Solana</span>, has the ticker <span className="text-purple-400 font-mono">SOL</span>, and has the Solana logos
                        </p>
                        <p className="mb-3">
                          one is called <span className="text-green-400 font-semibold">Gorbagana</span>, has the ticker <span className="text-green-400 font-mono">GOR</span> and has <span className="text-green-400">oscar the grouch.png</span> as a logo
                        </p>
                        <p className="text-orange-400 font-semibold">
                          which is going to be more valuable? 🤔
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-gray-500 text-sm border-t border-gray-600/30 pt-3">
                        <span>2:15 PM · Jun 19, 2025</span>
                        <Link 
                          href="https://x.com/lex_node/status/1935469530626601081"
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
      </section>

        {/* Video Modal */}
        {modalOpen && modalVideo && (
          <div 
            className="video-modal entering"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeVideoModal();
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') closeVideoModal();
            }}
            tabIndex={-1}
          >
            <div className="video-modal-content">
              <div className="video-modal-title">
                {modalVideo.title}
              </div>
              <button
                onClick={closeVideoModal}
                className="video-modal-close"
                aria-label="Close video modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <video
                src={modalVideo.src}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-auto"
                onEnded={closeVideoModal}
                style={{ maxHeight: '70vh' }}
              />
            </div>
          </div>
        )}

      {/* Footer */}
      <footer className="relative z-10 text-center p-6 text-sm text-gray-500">
        <p>© 2025 gor/acc • Building on Gorbagana</p>
      </footer>
    </main>
    </>
  );
}