export default function FinalBanner() {
  return (
    <section className="relative bg-primary dark:bg-gray-950 rounded-2xl overflow-hidden min-h-[250px] sm:h-[300px] flex items-center mb-12 sm:mb-20">
      <div className="absolute inset-0 z-0">
        <img
          alt="Footer Banner Background"
          className="w-full h-full object-cover opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeqOgYATwlFQhKkQ8cNLsDlkRTx7G6egnbKRrxp_2kUdRC5eSePdFgf95GChTWQZ_zqMkliy1e8iPM21a4WRARbRElT0GNm1fW104yDx2JTl3zDk8T31dBgCPa6vdoX6TpSFp3t1YUr5YhgnNWzuW4PgONVy4h97FkfRTLZ2lSAEfSFNk2XeZqSecqLkhFyq_nfA_-mcDm5wODKdaQK6p-e-IQEz867kdy6QQeSPTV1OEzl0swsOo7_M3YdZBkYOFlnbwzguAE"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/50"></div>
      </div>
      <div className="relative z-10 w-full flex flex-col justify-center items-center text-center px-6 sm:px-12 py-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
          "Let's Shop Beyond Boundaries"
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed">
          Discover a world of styles that transcend borders. Quality, elegance,
          and speed delivered right to your doorstep.
        </p>
        <button className="px-6 sm:px-10 py-2.5 sm:py-3.5 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base shadow-xl transform active:scale-95 transition-all">
          Start Shopping Now
        </button>
      </div>
    </section>
  );
}
