import { useState } from "react";
import { ScrollAnimation } from "@/components/utils/ScrollAnimation";
import { MenuItem } from "@/components/menu/MenuItem";
import starter_1 from '@/assets/images/starter_1.jpg';
import starter_2 from '@/assets/images/starter_2.jpg';
import starter_4 from '@/assets/images/starter_4.avif';
import starter_3 from '@/assets/images/starter_3.jpg';
import starter_5 from '@/assets/images/starter_5.jpeg';
import starter_6 from '@/assets/images/starter_6.jpg';
import starter_7 from '@/assets/images/starter_7.jpg';
import starter_8 from '@/assets/images/starter_8.webp';
import starter_9 from '@/assets/images/starter_9.jpeg';
import starter_10 from '@/assets/images/starter_10.jpg';
import mains_1 from '@/assets/images/mains_1.jpg';
import mains_2 from '@/assets/images/mains_2.jpg';
import mains_3 from '@/assets/images/mains_3.jpg';
import mains_4 from '@/assets/images/mains_4.jpg';
import mains_5 from '@/assets/images/mains_5.jpg';
import mains_6 from '@/assets/images/mains_6.jpeg';
import mains_7 from '@/assets/images/mains_7.webp';
import mains_8 from '@/assets/images/mains_8.jpg';
import mains_9 from '@/assets/images/mains_9.jpg';
import mains_10 from '@/assets/images/mains_10.jpg';
import dessert_1 from '@/assets/images/dessert_1.webp';
import dessert_2 from '@/assets/images/dessert_2.webp';
import dessert_3 from '@/assets/images/dessert_3.jpg';
import dessert_4 from '@/assets/images/dessert_4.jpg';
import dessert_5 from '@/assets/images/dessert_5.webp';
import beverages_1 from '@/assets/images/beverages_1.webp';
import beverages_2 from '@/assets/images/beverages_2.jpeg';
import beverages_3 from '@/assets/images/beverages_3.webp';
import beverages_4 from '@/assets/images/beverages_4.jpg';
import beverages_5 from '@/assets/images/beverages_5.webp';
import beverages_6 from '@/assets/images/beverages_6.jpg';
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
        name: "Bang bang cauliflower",
        description: "Crispy cauliflower florets tossed in a spicy creamy sauce, garnished with spring onions and sesame seeds",
        price: "₹290",
        image: starter_1,
      },
      {
        name: "Crispy Fried Mozzarella Balls",
        description: "Golden-fried mozzarella bites with a crunchy coating, served with a side of tangy marinara sauce",
        price: "₹290",
        image: starter_2,
      },
      {
        name: "Crumb Fried Baby Corn",
        description: "Tender baby corn coated in seasoned breadcrumbs, deep-fried to perfection and served with a spicy dip",
        price: "₹290",
        image: starter_3
      },
      {
        name: "Crispy Chilli Garlic Baby Corn",
        description: "Baby corn stir-fried with garlic, chilies, and Asian spices, finished with a crisp, flavorful glaze",
        price: "₹290",
        image: starter_4,
      },
      {
        name: "Dragon Paneer",
        description: "Soft paneer bites flash-fried and coated in a bold, spicy sauce with a smoky hint, tossed with crunchy veggies",
        price: "₹310",
        image: starter_5,
      },
      {
        name: "Honey Glazed Assorted Vegetables",
        description: "A colorful medley of seasonal vegetables sautéed to perfection and finished with a delicate honey glaze for a sweet-savory balance",
        price: "₹290",
        image: starter_6,
      },
      {
        name: "Roasted Double Mushroom",
        description: "A rich blend of button and shiitake mushrooms, slow-roasted with herbs and garlic, delivering deep umami flavors in every bite",
        price: "₹315",
        image: starter_7,
      },
      {
        name: "Chicken Momos",
        description: "Steamed dumplings filled with juicy minced chicken and aromatic spices, served with spicy red chilli chutney",
        price: "₹260",
        image: starter_8,
      },
      {
        name: "Chicken Lollipop",
        description: "Frenched chicken wings marinated in bold spices, deep-fried until crisp, and served with a tangy schezwan dip",
        price: "₹345",
        image: starter_9,
      },
      {
        name: "Dragon Chicken",
        description: "Crispy strips of chicken tossed in a fiery, tangy sauce with bell peppers and spring onions, delivering bold Indo-Chinese flair",
        price: "₹345",
        image: starter_10,
      },
      
    ],
    mains: [
      {
        name: "Alfaham Chicken",
        description: "Middle Eastern-style grilled chicken marinated in aromatic spices and flame-cooked for a smoky, juicy finish",
        price: "₹198",
        image: mains_1,
        // featured: true,
      },
      {
        name: "Tandoori Chicken",
        description: "Chicken marinated in yogurt and traditional tandoori spices, cooked in a clay oven for a charred, flavorful exterior",
        price: "₹162",
        image: mains_2,
      },
      {
        name: "Chicken Burnt Garlic Fried Rice",
        description: "Fragrant rice stir-fried with chicken, crispy burnt garlic, and vegetables for a bold, smoky twist on a classic favorite",
        price: "₹330",
        image: mains_3,
      },
      {
        name: "Chicken Chinese Chopsuey",
        description: "Crispy noodles topped with a savory chicken and vegetable stir-fry in a tangy, flavorful Chinese-style sauce",
        price: "₹330",
        image: mains_4,
      },
      {
        name: "Chicken Kadapa Pulao",
        description: "A fragrant South Indian-style pulao featuring tender chicken pieces cooked with aromatic spices, herbs, and mildly spiced rice",
        price: "₹330",
        image: mains_5,
      },
      {
        name: "Chicken Soupy Asian Noodles",
        description: "Slurpy noodles in a savory chicken broth, packed with vegetables, herbs, and a hint of soy for a comforting Asian-inspired dish",
        price: "₹330",
        image: mains_6,
      },
      {
        name: "Jeera Rice",
        description: "Fragrant basmati rice cooked with cumin seeds, offering a simple yet flavorful accompaniment to any meal",
        price: "₹240",
        image: mains_7,
      },
      {
        name: "Nei Choru",
        description: "Fragrant rice cooked in ghee with a subtle blend of spices, offering a rich and aromatic South Indian delight",
        price: "₹240",
        image: mains_8,
      },
      {
        name: "Prawns Burnt Garlic Fried Rice",
        description: "A delicious fusion of succulent prawns and fragrant fried rice, tossed with crispy burnt garlic for an irresistible, flavorful kick",
        price: "₹380",
        image: mains_9,
      },
      {
        name: "Chicken Ramen Noodles",
        description: "Tender chicken pieces in a rich, flavorful broth with perfectly cooked ramen noodles, topped with fresh veggies and herbs for a satisfying, savory meal",
        price: "₹440",
        image: mains_10,
      },
      
    ],
    desserts: [
      {
        name: "Biscoff Cheese Cake",
        description: "A creamy, indulgent cheesecake with a crunchy Biscoff biscuit base, topped with a luscious layer of caramelized Biscoff spread for a perfect blend of sweet and rich flavors",
        price: "₹300",
        image: dessert_1,
        // featured: true,
      },
      {
        name: "Blueberry Cheese Cake",
        description: "A creamy, smooth cheesecake topped with a vibrant blueberry compote, offering a perfect balance of tangy and sweet flavors in every bite",
        price: "₹300",
        image: dessert_2,
        // featured: true,
      },
      {
        name: "Double Cream Kunafa",
        description: "A rich, indulgent dessert made with crispy layers of golden pastry, filled with velvety double cream, and soaked in sweet syrup for a heavenly, melt-in-your-mouth experience",
        price: "₹349",
        image: dessert_3,
        // featured: true,
      },
      {
        name: "Double Fudge Brownie",
        description: "A decadent, chocolate-packed brownie with a gooey, fudgy center, topped with rich chocolate fudge for an ultimate sweet treat",
        price: "₹260",
        image: dessert_4,
        // featured: true,
      },
      {
        name: "Hot Brownie",
        description: "A warm, melt-in-your-mouth brownie straight from the oven, with a rich, fudgy texture and a hint of gooey chocolate perfection",
        price: "₹195",
        image: dessert_5,
        // featured: true,
      },
    ],
    beverages: [
      {
        name: "Blue Curacao Mojito",
        description: "A refreshing twist on the classic mojito, infused with zesty lime, mint, and the vibrant citrusy flavor of Blue Curacao for a cool, tropical vibe",
        price: "₹230",
        image: beverages_1,
      },
      {
        name: "Blueberry Mojito",
        description: "A refreshing blend of muddled blueberries, mint, and lime, mixed with soda for a fruity twist on the classic mojito",
        price: "₹230",
        image: beverages_2,
      },
      {
        name: "Iced Lemon Tea",
        description: "A chilled and refreshing brew of black tea with a zesty splash of lemon, perfect for a cool and energizing sip",
        price: "₹130",
        image: beverages_3,
      },
      {
        name: "Chocolate Milkshake",
        description: "A rich and creamy blend of chilled milk and decadent chocolate, topped with a swirl of whipped cream for the ultimate sweet treat",
        price: "₹260",
        image: beverages_4,
      },
      {
        name: "Cocount Milkshake",
        description: "A smooth and refreshing blend of creamy coconut milk and ice, offering a tropical twist in every cool, luscious sip",
        price: "₹290",
        image: beverages_5,
      },
      {
        name: "Nutella Milkshake",
        description: "A rich and indulgent milkshake made with creamy Nutella and chilled milk, topped with whipped cream for a chocolaty delight",
        price: "₹290",
        image: beverages_6,
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
                className={`px-4 py-2 font-medium whitespace-nowrap transition-colors rounded ₹{
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
              <ScrollAnimation key={`₹{activeCategory}-₹{index}`} delay={index * 100}>
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
