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
      <div className="relative bg-gray-50 dark:bg-gray-800/50 h-56 flex items-center justify-center overflow-hidden">
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
        <h3 className="text-sm font-semibold truncate text-gray-900 dark:text-white">
          {product.title}
        </h3>
        {product.subTitle && (
          <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate mt-0.5">
            {product.subTitle}
          </p>
        )}

        <div className="flex items-center justify-between gap-2 mt-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900 dark:text-white">
              {product.price}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                {product.oldPrice}
              </span>
            )}
          </div>
          {typeof product.sold !== "number" && product.sold && (
            <span className="text-[10px] text-gray-400 italic">
              {product.sold} Sold
            </span>
          )}
        </div>

        {typeof product.sold === "number" && (
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden border border-gray-100 dark:border-gray-800">
              <div
                className="bg-primary h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${Math.min(
                    (product.sold / (product.total || 100)) * 100,
                    100
                  )}%`,
                }}
              />
            </div>
            <span className="text-[10px] font-bold text-gray-900 dark:text-white whitespace-nowrap uppercase">
              {product.sold}/{product.total || 100} SALE
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
