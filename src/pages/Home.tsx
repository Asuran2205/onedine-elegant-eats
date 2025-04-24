
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ScrollAnimation } from "@/components/utils/ScrollAnimation";
import { MenuItem } from "@/components/menu/MenuItem";
import { TestimonialCard } from "@/components/home/TestimonialCard";

const Home = () => {
  // Featured dishes data
  const featuredDishes = [
    {
      name: "Seared Scallops",
      description: "Pan-seared Atlantic scallops with cauliflower purée, crispy pancetta and chive oil",
      price: "$24",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      name: "Wild Mushroom Risotto",
      description: "Creamy Arborio rice with wild mushrooms, truffle oil, and Parmigiano-Reggiano",
      price: "$22",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Braised Short Rib",
      description: "Slow-cooked beef short rib with red wine reduction, served with garlic mashed potatoes and seasonal vegetables",
      price: "$32",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "OneDine consistently delivers exceptional dining experiences. The braised short rib is absolute perfection!",
      author: "Emma Johnson",
      role: "Food Critic",
      featured: true,
    },
    {
      quote: "The attention to detail in presentation and flavors is what sets OneDine apart from other fine dining establishments.",
      author: "Michael Chen",
    },
    {
      quote: "As a regular patron, I'm always impressed by the innovative menu and impeccable service at OneDine.",
      author: "Sarah Williams",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80" 
            alt="Restaurant interior" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-white mb-6">
            Culinary Excellence <br />
            <span className="text-onedine-gold">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Experience a unique blend of flavors in an elegant atmosphere
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/reservation" className="btn-primary">
              Book a Table
            </Link>
            <Link to="/menu" className="btn-outline text-white border-white hover:bg-white hover:text-onedine-brown">
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollAnimation>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="OneDine restaurant interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-playfair text-onedine-brown">
                  About <span className="text-onedine-burgundy">OneDine</span>
                </h2>
                <div className="w-20 h-1 bg-onedine-gold"></div>
                <p className="text-gray-600">
                  Founded in 2015, OneDine has become synonymous with culinary excellence and exceptional service. Our approach combines traditional techniques with innovative methods, resulting in dishes that are both familiar and surprising.
                </p>
                <p className="text-gray-600">
                  Located in the heart of the city, our restaurant offers a warm and sophisticated atmosphere where every detail has been carefully considered to enhance your dining experience.
                </p>
                <Link to="/about" className="inline-flex items-center text-onedine-burgundy font-medium hover:underline">
                  Learn more about us <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair text-onedine-brown mb-4">
                Our Featured <span className="text-onedine-burgundy">Dishes</span>
              </h2>
              <div className="w-20 h-1 bg-onedine-gold mx-auto mb-4"></div>
              <p className="text-gray-600">
                Discover our chef's carefully curated selection of signature dishes that showcase the finest seasonal ingredients and expert culinary techniques.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <ScrollAnimation key={dish.name} delay={index * 100}>
                <MenuItem {...dish} />
              </ScrollAnimation>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/menu" className="btn-outline">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair text-onedine-brown mb-4">
                Guest <span className="text-onedine-burgundy">Testimonials</span>
              </h2>
              <div className="w-20 h-1 bg-onedine-gold mx-auto mb-4"></div>
              <p className="text-gray-600">
                Read what our valued guests have to say about their dining experiences at OneDine.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.author} delay={index * 100}>
                <TestimonialCard {...testimonial} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-onedine-burgundy text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80" 
            alt="Restaurant background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-playfair mb-4">
                Reserve Your Table Today
              </h2>
              <p className="mb-8 text-white/90">
                Experience the perfect blend of exceptional cuisine, elegant atmosphere and attentive service. Make your reservation now and create memories with us.
              </p>
              <Link to="/reservation" className="btn-outline text-white border-white hover:bg-white hover:text-onedine-burgundy">
                Book a Table
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
