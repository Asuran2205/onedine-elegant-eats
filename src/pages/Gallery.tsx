
import { useState } from "react";
import { ScrollAnimation } from "@/components/utils/ScrollAnimation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images data
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Restaurant interior with elegant table settings",
      category: "interior",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Elegant restaurant dining area",
      category: "interior",
    },
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Bar area with stylish lighting",
      category: "interior",
    },
    {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Braised short rib with vegetables",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Seared scallops appetizer",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Wild mushroom risotto",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Chocolate dessert with berries",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Chef plating a dish in the kitchen",
      category: "kitchen",
    },
    {
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Private dining room",
      category: "interior",
    },
    {
      src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Cocktails at the bar",
      category: "drinks",
    },
    {
      src: "https://images.unsplash.com/photo-1546305626-389089ccee43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Wine rack in the cellar",
      category: "drinks",
    },
    {
      src: "https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Seasonal table setting",
      category: "interior",
    },
  ];

  // Categories for filtering
  const categories = [
    { id: "all", name: "All" },
    { id: "interior", name: "Interior" },
    { id: "food", name: "Food" },
    { id: "drinks", name: "Drinks" },
    { id: "kitchen", name: "Kitchen" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  // Filter images based on active category
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Gallery Hero */}
      <div className="bg-onedine-brown text-white py-24 text-center relative">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80" 
            alt="Gallery background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">Gallery</h1>
            <p className="max-w-xl mx-auto">
              Explore the ambiance, culinary creations, and experiences at OneDine
            </p>
          </ScrollAnimation>
        </div>
      </div>

      {/* Gallery Filters */}
      <div className="sticky top-16 bg-white shadow-sm z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2 md:gap-6 overflow-x-auto py-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 font-medium transition-colors rounded ${
                  activeCategory === category.id
                    ? "bg-onedine-burgundy text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <ScrollAnimation key={image.src} delay={index % 4 * 100}>
                <div 
                  className="relative overflow-hidden rounded-lg aspect-square cursor-pointer hover-scale group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                      <span className="text-lg font-medium">View</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          <div className="relative">
            <button 
              className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Gallery preview" 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
