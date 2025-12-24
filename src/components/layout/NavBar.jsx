import {
  Search,
  ShoppingCart,
  Menu,
  ShoppingBag,
  Bell,
  Heart,
} from "lucide-react";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.qty, 0);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const wishlistCount = wishlistItems.length;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center py-4 sm:h-20 gap-4 sm:gap-8">
          <div className="flex w-full sm:w-auto justify-between items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-primary dark:text-white" />
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-primary dark:text-white">
                BeliBeli<span className="text-gray-400 font-light">.com</span>
              </span>
            </div>
          </div>

          <div className="hidden sm:block flex-1 w-full max-w-2xl">
            <div className="relative flex items-center border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800 hover:border-primary transition-colors focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
              <div className="relative hidden md:block">
                <select className="h-10 border-0 border-r border-gray-300 dark:border-gray-700 bg-transparent py-0 pl-4 pr-8 text-gray-600 dark:text-gray-300 focus:ring-0 text-sm font-medium">
                  <option>All Category</option>
                  <option>Fashion</option>
                  <option>Electronics</option>
                </select>
              </div>
              <input
                className="block w-full border-0 py-2 sm:py-2.5 pl-4 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-sm"
                placeholder="Search product..."
                type="text"
              />
              <button className="px-4 text-gray-400 hover:text-primary dark:hover:text-white">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <button className="relative text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors p-2">
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button className="relative text-gray-600 dark:text-gray-300 hover:text-primary transition-colors p-2">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="relative text-gray-600 dark:text-gray-300 hover:text-primary transition-colors p-2">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="sm:hidden text-gray-600 dark:text-gray-300 p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
