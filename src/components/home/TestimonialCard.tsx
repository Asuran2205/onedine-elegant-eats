
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
  featured?: boolean;
}

export function TestimonialCard({
  quote,
  author,
  role,
  image,
  featured = false,
}: TestimonialCardProps) {
  return (
    <div 
      className={cn(
        "bg-white shadow-custom p-6 rounded-lg transition-all duration-300",
        featured 
          ? "border-2 border-onedine-gold" 
          : "hover:shadow-lg hover:translate-y-[-5px]"
      )}
    >
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          {image ? (
            <img 
              src={image} 
              alt={author}
              className="h-14 w-14 rounded-full object-cover" 
            />
          ) : (
            <div className="h-14 w-14 rounded-full bg-onedine-gold/20 flex items-center justify-center text-onedine-gold font-playfair text-xl">
              {author.charAt(0)}
            </div>
          )}
        </div>
        <div className="ml-4">
          <h4 className="font-medium text-onedine-brown">{author}</h4>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
      <blockquote className="italic text-gray-600">"{quote}"</blockquote>
    </div>
  );
}
