import { useState } from "react";
import { ScrollAnimation } from "@/components/utils/ScrollAnimation";
import { MenuItem } from "@/components/menu/MenuItem";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  // Menu categories
  const categories = [
    { id: "starters", name: "Starters" },
    { id: "mains", name: "Main Course" },
    { id: "desserts", name: "Desserts" },
    { id: "beverages", name: "Beverages" },
  ];

  const menuItems = {
    starters: [
      {
        name: "Truffle Arancini",
        description: "Crispy risotto balls with black truffle and mozzarella, served with truffle aioli",
        price: "$16",
        image: "https://images.unsplash.com/photo-1541517627790-94159afb3d65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Roasted Beet Salad",
        description: "Heirloom beets with goat cheese, arugula, and candied walnuts in a citrus vinaigrette",
        price: "$14",
        featured: true,
        image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Seared Scallops",
        description: "Pan-seared Atlantic scallops with cauliflower purée, crispy pancetta and chive oil",
        price: "$24",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Yellowfin Tuna Tartare",
        description: "Hand-cut tuna with avocado, cucumber, and wasabi-soy vinaigrette",
        price: "$18",
        image: "https://images.unsplash.com/photo-1579584207473-c00effcba9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Wild Mushroom Soup",
        description: "Creamy blend of seasonal mushrooms with truffle crème fraîche and herb oil",
        price: "$12",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
    ],
    mains: [
      {
        name: "Herb Crusted Rack of Lamb",
        description: "Dijon mustard and herb crusted lamb with root vegetables and red wine reduction",
        price: "$42",
        image: "https://images.unsplash.com/photo-1514516345957-556ca7c90a34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        featured: true,
      },
      {
        name: "Wild Mushroom Risotto",
        description: "Creamy Arborio rice with wild mushrooms, truffle oil, and Parmigiano-Reggiano",
        price: "$28",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Pan Seared Halibut",
        description: "Sustainably caught halibut with sweet corn purée, grilled asparagus, and lemon butter sauce",
        price: "$36",
        image: "https://images.unsplash.com/photo-1534043464124-3be32fe000c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Braised Short Rib",
        description: "Slow-cooked beef short rib with red wine reduction, served with garlic mashed potatoes",
        price: "$32",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Grilled Wagyu Ribeye",
        description: "Premium grade Wagyu beef with truffle butter and seasonal vegetables",
        price: "$65",
        image: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        featured: true,
      },
      {
        name: "Roasted Duck Breast",
        description: "Crispy skinned duck with cherry gastrique and wild rice pilaf",
        price: "$38",
        image: "https://images.unsplash.com/photo-1619860705243-43f23b69d538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
    ],
    desserts: [
      {
        name: "Dark Chocolate Soufflé",
        description: "Warm chocolate soufflé with vanilla bean ice cream and chocolate sauce",
        price: "$14",
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        featured: true,
      },
      {
        name: "Crème Brûlée",
        description: "Classic vanilla bean custard with caramelized sugar crust",
        price: "$12",
        image: "https://images.unsplash.com/photo-1615498566670-33de1641a153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Tiramisu",
        description: "Coffee-soaked ladyfingers layered with mascarpone cream",
        price: "$11",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Apple Tarte Tatin",
        description: "Caramelized apple tart served with vanilla ice cream",
        price: "$13",
        image: "https://images.unsplash.com/photo-1567191001695-d6d7d90e1011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
    ],
    beverages: [
      {
        name: "Wine Selection",
        description: "Extensive selection of domestic and international wines - ask for our complete wine list",
        price: "Varies",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Craft Cocktails",
        description: "House-made signature cocktails with premium spirits and fresh ingredients",
        price: "$14-18",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Artisanal Mocktails",
        description: "Creative non-alcoholic beverages featuring fresh fruits and herbs",
        price: "$9",
        featured: true,
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
    ],
  };

  return (
    <div className="pt-16">
      {/* Menu Hero */}
      <div className="bg-onedine-brown text-white py-24 text-center relative">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80" 
            alt="Menu background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">Our Menu</h1>
            <p className="max-w-xl mx-auto">
              Carefully crafted dishes that showcase the finest seasonal ingredients and culinary expertise
            </p>
          </ScrollAnimation>
        </div>
      </div>

      {/* Menu Categories Navigation */}
      <div className="sticky top-16 bg-white shadow-sm z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2 md:gap-6 overflow-x-auto py-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 font-medium whitespace-nowrap transition-colors rounded ${
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

      {/* Menu Items */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair text-onedine-brown">
                {categories.find((c) => c.id === activeCategory)?.name}
              </h2>
              <div className="w-20 h-1 bg-onedine-gold mx-auto mt-2"></div>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <ScrollAnimation key={`${activeCategory}-${index}`} delay={index * 100}>
                <MenuItem {...item} />
                {index < menuItems[activeCategory as keyof typeof menuItems].length - 1 && (
                  <div className="menu-item-divider" />
                )}
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Special Dietary Note */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation>
              <h3 className="text-2xl font-playfair text-onedine-brown mb-4">Special Dietary Requirements</h3>
              <p className="text-gray-600">
                We are happy to accommodate dietary restrictions and allergies. Please inform your server of any special requirements when ordering, and our chefs will make appropriate adjustments to your selected dishes whenever possible.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
