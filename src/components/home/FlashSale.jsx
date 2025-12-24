import { Zap, ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "../product/ProductCard";

export default function FlashSale() {
  const flashProducts = [
    {
      id: 1,
      title: "EliteShield Performance Men's Jackets",
      price: "Rs.255.000",
      oldPrice: "Rs.625.000",
      sold: 85,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2A6NNd01IoE-4luy1YYgy2XYvOahoJDTAAimqoGu8s5GwfP9YrXlzr8OSLj39kozQqFW3hLgCpSbxtDq_5JumRai8hfIcC1TqwPND4pzPiiTZiMcP-IizjG6M_ejujzaqtlTaJWCGeOTbtO6zkXOEqQd_Zdf1n7XkzVjxtTBFHsy-7nY2CguuUsrXKzWr2gThBmxV8CTYKfBPrsHgjMGCDfI-nWhc3V4g3A4wt2GZPDcv-WFg5LHjP-vYcZWTdu3W-WjX98qC",
    },
    {
      id: 2,
      title: "Gentlemen's Summer Gray Hat",
      price: "Rs.99.000",
      oldPrice: "Rs.150.000",
      sold: 60,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuACijQrpxmWmKXd4bE9gDkIkA4hCiJ6i3AE1QM447Eu6KaKNZ2Ql009kz2IhTCRnpgjuCwcNWy5oy5_rQDKbO6Td5zRJXwoVh9E14cn8u4nI5JwSUIx_KoBQOWIv2qQ3X3iV-CeyIWB8PlAj8af56KZ2CvPc1aszLSydNEkqOCjdgHJKmZbWhOVQIb10nSrPR41MXJsCgAuG3sXqMkEds2LH4yzqQ167sRpzK2GjsSz6uagfnqooTNMQdKVtThd2cfCowU7D-gm",
    },
    {
      id: 3,
      title: "OptiZoom Camera Shoulder Bag",
      price: "Rs.250.000",
      oldPrice: "Rs.425.000",
      sold: 30,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC92ehaBS4kq_drmFa9QQMUhW1upSAoQd5AwN3k2rh9WdQzGGSSwGNdAdU_fwxoY0UEAtnomRouK3XqLxuBVTD6yR-6uPkU5W6stLDLRjyw1NTLzzwu5ikPkRMHtPL9pnfDB9kJdDiYqy4hw8FfQ5fSVbn6WPM3k0PuXmBzRDrpDzqaE-7v3zldttTyqaDAmdP78SFjL3eTVn2CVEvnkgJJUT6Y2Ad-Dh9-7S0qDEjUzYklvsLpIfBZBtKUoThb64FESb0fMlLQ",
    },
    {
      id: 4,
      title: "Cloudy Chic - Grey Heels",
      price: "Rs.270.000",
      oldPrice: "Rs.580.000",
      sold: 45,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBNnYhXs-m9who2bKTZg9H0b8XNkyuzjOj1x2ZBBGTOMIHrU-MkvaHeVwq-9GVmi2OBDin2A_9jJEEaItc5E07p1kY-TY0NrCG4wfTrm3cey_gtXeJqifMAdbUNBwTiMylU8XhGceleaEFRBCXFD3acMJ1WtDjNSRHhfkJhECRCh3bw6QOZ0ZAnbFHtqBk2XJMrE3a_08D8YSGbNFYnRRbeRc3u4UDB4h_WCVL9Celj09DD2R04VEWiITwA2yEFeQAfMfJN0249",
    },
  ];

  return (
    <section className="mb-8 sm:mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-bold">
          <h2 className="text-xl sm:text-2xl flex items-center gap-2 text-gray-900 dark:text-white uppercase tracking-tight">
            <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            Flash Sale
          </h2>
          <div className="flex gap-1.5 items-center text-white text-xs sm:text-sm">
            <div className="bg-red-500 rounded px-2 py-1">08</div>
            <span className="text-gray-400">:</span>
            <div className="bg-red-500 rounded px-2 py-1">17</div>
            <span className="text-gray-400">:</span>
            <div className="bg-red-500 rounded px-2 py-1">56</div>
          </div>
        </div>
        <div className="hidden sm:flex gap-2">
          <button className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {flashProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
