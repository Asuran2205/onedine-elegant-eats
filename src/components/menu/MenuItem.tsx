
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
    <div
      className={cn(
        "group flex flex-col md:flex-row gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50",
        featured && "border border-onedine-gold/30"
      )}
    >
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
          <h3 className="text-lg font-medium font-playfair">{name}</h3>
          <span className="text-onedine-burgundy font-medium ml-2">{price}</span>
        </div>
        <p className="text-gray-600 mt-1 text-sm">{description}</p>
        {featured && (
          <span className="inline-block mt-2 text-xs bg-onedine-gold px-2 py-1 rounded text-white">
            Chef's Choice
          </span>
        )}
      </div>
    </div>
  );
}
