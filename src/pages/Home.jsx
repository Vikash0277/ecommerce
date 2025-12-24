import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FlashSale from "../components/home/FlashSale";
import TodayForYou from "../components/home/TodayForYou";
import BestStores from "../components/home/BestStores";
import FinalBanner from "../components/home/FinalBanner";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-4 space-y-12">
      <Hero />
      <Categories />
      <FlashSale />
      <TodayForYou />
      <BestStores />
      <FinalBanner />
    </main>
  );
}
