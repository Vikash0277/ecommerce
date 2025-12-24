import { Smartphone, Info, Ticket } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-[10px] sm:text-xs py-2 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
          <a
            className="hover:text-primary dark:hover:text-white flex items-center gap-1"
            href="#"
          >
            <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Download BeliBeli App</span>
            <span className="xs:hidden">App</span>
          </a>
        </div>
        <div className="flex space-x-3 sm:space-x-6 text-gray-600 dark:text-gray-400 items-center">
          <a
            className="hover:text-primary dark:hover:text-white hidden sm:inline"
            href="#"
          >
            Mitra BeliBeli
          </a>
          <a className="hover:text-primary dark:hover:text-white" href="#">
            About
          </a>
          <a
            className="hover:text-primary dark:hover:text-white hidden xs:inline"
            href="#"
          >
            BeliBeli Care
          </a>
          <a
            className="hover:text-primary dark:hover:text-white font-bold text-red-500 flex items-center gap-1 pr-4 border-r border-gray-300 dark:border-gray-700"
            href="#"
          >
            <Ticket className="w-3 h-3" />
            Promo
          </a>

          <div className="flex items-center gap-4 ml-4">
            <a
              href="#"
              className="font-bold text-gray-900 dark:text-white hover:text-primary transition-colors"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="font-bold text-gray-900 dark:text-white hover:text-primary transition-colors"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
