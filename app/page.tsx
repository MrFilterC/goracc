import Image from "next/image";
import Link from "next/link";
import TokenPrice from "@/components/TokenPrice";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl floating" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pulse-scale"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 p-4 sm:p-6 md:p-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/main.png"
            alt="gor/acc logo"
            width={40}
            height={40}
            className="rounded-full sm:w-12 sm:h-12"
          />
          <span className="text-lg sm:text-xl font-bold">gor/acc</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <TokenPrice />
          <div className="flex items-center gap-2 sm:gap-3">
            <Link 
              href="https://x.com/GorbaganaAcc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              title="@GorbaganaAcc"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link 
              href="https://x.com/i/communities/1936391513543766206"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 gradient-border px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full hover:scale-105 transition-transform"
              title="X Community"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>Community</span>
            </Link>
            <Link 
              href="https://dexscreener.com/solana/7g3zkutx3w4cqbbx3gwbhe1dkoak7kp4kfcvxznfadu4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              title="View on DexScreener"
            >
              <Image
                src="/dexlogo.png"
                alt="DexScreener"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <div className="space-y-8 max-w-4xl">
          {/* Logo */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
            <div className="absolute inset-0 gradient-bg rounded-full blur-xl opacity-50"></div>
            <Image
              src="/main.png"
              alt="gor/acc logo"
              width={160}
              height={160}
              className="relative rounded-full floating"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
            <span className="gradient-text">Gorbagana Acceleration</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto px-4">
            The ultimate utility is coming to Gorbagana chain
          </p>

          {/* Mystery text */}
          <div className="mt-12 space-y-4">
            <p className="text-lg text-gray-500 glowing">
              Something revolutionary is building...
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Building on Gorbagana Network</span>
            </div>
          </div>

          {/* Token info */}
          <div className="mt-12 sm:mt-16 mx-4 sm:mx-auto p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-xl">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">$gor/acc Token</h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2">
                <span className="text-gray-400">Contract:</span>
                <span className="font-mono text-xs break-all">31TxE8kyhUJfq8JPeJNTdVPZeibQrcNnDbkvnigVpump</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2">
                <span className="text-gray-400">Network:</span>
                <span>Solana <span className="text-gray-500">(for now)</span></span>
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
  );
}