import {
  ArrowRight,
  Shirt,
  Watch,
  ShoppingBag,
  Footprints,
  Layers,
  Trash2,
  HelpCircle,
  Info,
  Ticket,
  Search,
  User,
  ShoppingCart,
  Menu,
  Smartphone,
  Facebook,
  Instagram,
  Mail,
  Star,
  Heart,
  Briefcase,
} from "lucide-react";
import { createLucideIcon } from "lucide-react";
import { coatHanger, hatBaseball, trousers } from "@lucide/lab";

const Hanger = createLucideIcon("Hanger", coatHanger);
const BaseballCap = createLucideIcon("BaseballCap", hatBaseball);
const Trousers = createLucideIcon("Trousers", trousers);

const categories = [
  { name: "T-Shirt", icon: Shirt },
  { name: "Jacket", icon: Hanger },
  { name: "Shirt", icon: Shirt },
  { name: "Jeans", icon: Trousers },
  { name: "Bag", icon: ShoppingBag },
  { name: "Shoes", icon: Footprints },
  { name: "Watches", icon: Watch },
  { name: "Cap", icon: BaseballCap },
  { name: "More", icon: Layers },
];

export default function Categories() {
  return (
    <section className="mb-8 sm:mb-12">
      <div className="flex justify-between items-center mb-4 px-1 sm:px-0">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
          Categories
        </h2>
        <button className="sm:hidden w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="flex sm:grid sm:grid-cols-4 md:grid-cols-9 gap-3 sm:gap-4 text-center overflow-x-auto scrollbar-hide pb-2 sm:pb-0">
        {categories.map((cat) => (
          <a
            key={cat.name}
            className="group flex flex-col items-center gap-2 p-1 sm:p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors flex-shrink-0 w-20 sm:w-auto"
            href="#"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all dark:group-hover:bg-gray-600 border border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-500 overflow-hidden">
              <cat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors" />
            </div>
            <span className="text-[10px] sm:text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-white truncate w-full">
              {cat.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
