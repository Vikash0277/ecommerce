import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toggleWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [justLiked, setJustLiked] = useState(false);
  const wishlist = useSelector((s) => s.wishlist.items);
  const liked = wishlist.find((i) => i.id === product.id);

  const handleLike = () => {
    dispatch(toggleWishlist(product));
    setJustLiked(true);
    setTimeout(() => setJustLiked(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg group transition-all">
      <div className="relative bg-gray-50 dark:bg-gray-800/50 h-48 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />

        <button
          onClick={handleLike}
          className="absolute top-3 right-3 bg-white/90 dark:bg-black/60 rounded-full p-2 shadow-sm hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-4 h-4 transition-colors duration-300 ${
              liked || justLiked ? "text-red-500 fill-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold truncate text-gray-800 dark:text-white">
          {product.title}
        </h3>

        <div className="flex items-center gap-2 mt-1.5">
          <span className="font-bold text-gray-900 dark:text-white">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
