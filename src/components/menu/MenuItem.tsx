
import { cn } from "@/lib/utils";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  featured?: boolean;
}

export function MenuItem({
  name,
  description,
  price,
  image,
  featured = false,
}: MenuItemProps) {
  return (
    <div className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      featured ? 'neon-border' : 'border border-gray-100'
    }`}>
      {image && (
        <div className="w-full md:w-48 h-48 overflow-hidden rounded-lg flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <h3 className={cn(
            "text-lg font-medium font-playfair",
            featured && "neon-text"
          )}>{name}</h3>
          <span className={cn(
            "text-onedine-burgundy font-medium ml-2",
            featured && "neon-text"
          )}>{price}</span>
        </div>
        <p className="text-gray-600 mt-1 text-sm">{description}</p>
        {featured && (
          <span className="inline-block mt-2 text-xs bg-onedine-gold px-2 py-1 rounded text-white neon-box">
            Chef's Choice
          </span>
        )}
      </div>
    </div>
  );
}
