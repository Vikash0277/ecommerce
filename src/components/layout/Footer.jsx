import { ShoppingBag, Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-10 sm:pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 sm:mb-12">
          <div className="col-span-2 md:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-primary dark:text-white" />
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-primary dark:text-white">
                BeliBeli<span className="text-gray-400 font-light">.com</span>
              </span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              The ultimate destination for fashion enthusiasts. We bring you the
              latest trends at the best prices.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h5 className="font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">
              BeliBeli
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
              <li>
                <a
                  className="hover:text-primary dark:hover:text-white transition-colors"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary dark:hover:text-white transition-colors"
                  href="#"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary dark:hover:text-white transition-colors"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h5 className="font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">
              Support
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
              <li>
                <a
                  className="hover:text-primary dark:hover:text-white transition-colors"
                  href="#"
                >
                  Payments
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary dark:hover:text-white transition-colors"
                  href="#"
                >
                  COD
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary dark:hover:text-white transition-colors"
                  href="#"
                >
                  Shipping
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h5 className="font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">
              Seller
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
              <li>
                <a
                  className="hover:text-primary dark:hover:text-white transition-colors"
                  href="#"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary dark:hover:text-white transition-colors"
                  href="#"
                >
                  Brand Index
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary dark:hover:text-white transition-colors"
                  href="#"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] sm:text-xs text-gray-400 font-medium">
            © 2025 BeliBeli.com. All rights reserved.
          </p>
          <div className="flex space-x-6 sm:space-x-4">
            <a
              className="text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
              href="#"
            >
              <Facebook className="w-5 h-5 sm:w-4 sm:h-4" />
            </a>
            <a
              className="text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
              href="#"
            >
              <Instagram className="w-5 h-5 sm:w-4 sm:h-4" />
            </a>
            <a
              className="text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
              href="#"
            >
              <Mail className="w-5 h-5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
