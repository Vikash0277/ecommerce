import ProductCard from "../product/ProductCard";

export default function TodayForYou() {
  const products = [
    {
      id: 5,
      title: "Essentials Men's Long-Sleeve Oxford Shirt",
      subTitle: "Oxford Shirt",
      price: "Rs.179.000",
      rating: "4.8",
      sold: 85,
      total: 100,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDhxCMrf7KW9ztYFCXvDvOwEujvVloBg3azLPw_96YNd0KJEz9VfBnHzPQhbGoPU00x-fsdHeEBRPU_jRcOi7aGC7TyOar4KZBR6Hby1My9R4NaWCldlfTSYiMr8FZEJP4anwcdlf8-6URCNWzXRip_JCOMBJxHt703b3LIEa1PVCBZFpd3d8BIygfXvXyNWl2EwSAksTJ1SipHlvQufK6RcYDOckdDzD7Ae9TIDa1ouGsWyVsqWoA5o2dVxgY93cyk5tTjRfD2",
    },
    {
      id: 6,
      title: "StyleHaven Men's Fashionable Brogues",
      subTitle: "Fashionable Brogues",
      price: "Rs.199.000",
      discount: "20% OFF",
      rating: "4.9",
      sold: 120,
      total: 150,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJcrdpShNTFtL7Wz8koILkhWKfRSWkI9JHvKE6sCvTpGzwfEVSyBBLJEDs9O2PiS0Sk-f6ojmtJHGWNWrFVauAFDc3AcLyyO5ClrpUsTPYR6yt0P4Ko0BiKd1ATUeiqlwIXAK_Pqefai9ZR_cfvSueZ1iR1DkHvhxmvcmJRTtQJsHX9wm9AkZPLZPx56GmPjf00HbSwMSNGVlULRThnjUU8DVVQbK-9Rra65eEkhWuTzxmQ-ehJLOmfeoeqfLo-JhzXN7mCIcY",
    },
    {
      id: 7,
      title: "Essential Long-Sleeve Crewneck Shirt",
      subTitle: "Crewneck Shirt",
      price: "Rs.120.000",
      rating: "4.6",
      sold: 45,
      total: 60,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCmf-DppR_qcHoiQKsWv034WjoY1UTZqR5G5Oz2VYPZTLzeEXFHwrUTRtRw-2pLljbdc3-8UaBEqAgsm30VF0fmGD10F1r5EDyb-xbwWEdus3xQqP4s87yWZlW0TjEu0a_JASJd9SyGBXF19TybXZWU1zEi9kSK1LM18QoAfm87TgmJxbAwTMlwK2L6AORQdvkgQU_vLkAApNHvkoYjqlEE1JZXD8lKNAV8gcvhrlOMcvu4_kGLCT_9p-px3bOEAQS5cGIr4UgS",
    },
    {
      id: 8,
      title: "UrbanFlex Men's Short Pants Collection",
      subTitle: "Short Pants",
      price: "Rs.102.000",
      rating: "4.5",
      sold: 180,
      total: 200,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBMr5AsM2yO-IIq6dUysRdbfw6OV-Ttp4SHrqW7rMA52xcSqu9fTbZA3LE6gOpeuwSuaD4Ev3BUP72o3lW8mdWWehB9kkRjXtZBThkIV_mvE0Y8fEfWC8sxJlW1ySF96T_Z_DxMYZKD1XJliAedQOxH0itTMacl_HnwKPvpqzH263IrSQE2Gyk3iRY1m6u4rRwRXzJxzNUE3jQXUdWETvlwfxmG-wGoB8Smy1eLuyrXmCliuLjMTfbhJdd1b85ZMIJXo9vq0wwF",
    },
    {
      id: 9,
      title: "ChicCarry - Elegant Women's Tote",
      subTitle: "Women's Tote",
      price: "Rs.650.000",
      rating: "4.9",
      sold: 25,
      total: 40,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDsoIUT_K6dYloMMVGIr59Jv7DnoWD4m4m1zF1fKygbu9vSF_mdgkNb6SiruElaZzPM6eL3pR-RK7Tw8X1lf5pjxHNHHcm7ZttXyJ7D6Qm7Sam1avzoKBWRpJQGS_KsUKORQR4bTZb8FBFogW204eg4bouADCNA-lsahivG8PNaxQ1knYImmhDM9-_WLCBHlmGZjVMSi6PfLBTeGiobXFfpKG4To7RsrDE3XCWZVnBWdQX012x6tHAGscbxu-wqVXK9RGTyzt7E",
    },
  ];

  const filters = [
    "Best Seller",
    "Keep Stylish",
    "Discount",
    "Official",
    "Coveted",
  ];

  return (
    <section className="mb-8 sm:mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap uppercase tracking-tight">
          Todays For You!
        </h2>
        <div className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 w-[calc(100%+2rem)] md:w-auto ml-0 md:ml-4 no-scrollbar">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`px-4 py-1.5 rounded text-xs sm:text-sm whitespace-nowrap transition-colors border ${
                i === 0
                  ? "bg-primary text-white border-primary"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-4 sm:gap-6 w-max">
          {products.map((p) => (
            <div
              key={p.id}
              className="w-[172px] sm:w-[220px] lg:w-[230px] flex-shrink-0"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
