
import { ScrollAnimation } from "@/components/utils/ScrollAnimation";

const About = () => {
  // Team members data
  const team = [
    {
      name: "Chef Michael Laurent",
      role: "Executive Chef",
      bio: "With over 20 years of experience in Michelin-starred restaurants across Europe, Chef Michael brings his passion for innovative cuisine and commitment to excellence to OneDine.",
      image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Timeline events
  const timeline = [
    {
      year: "2015",
      title: "The Beginning",
      description: "OneDine opened its doors with a mission to create an exceptional dining experience that celebrates diverse culinary traditions.",
    },
    {
      year: "2017",
      title: "First Recognition",
      description: "Named 'Best New Restaurant' by City Dining Guide and received our first critical acclaim in national publications.",
    },
    {
      year: "2019",
      title: "Expansion",
      description: "Expanded our dining area and introduced the Chef's Table experience, offering an intimate view of our kitchen in action.",
    },
    {
      year: "2021",
      title: "Sustainability Commitment",
      description: "Launched our farm-to-table initiative, partnering with local farmers to source seasonal, sustainable ingredients.",
    },
    {
      year: "Present",
      title: "Continuing Excellence",
      description: "Continuing to innovate while honoring culinary traditions, OneDine remains committed to providing unforgettable dining experiences.",
    },
  ];

  return (
    <div className="pt-16">
      {/* About Hero */}
      <div className="bg-onedine-brown text-white py-24 text-center relative">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80" 
            alt="About us background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">About OneDine</h1>
            <p className="max-w-xl mx-auto">
              Our story, our team, and our passion for exceptional cuisine
            </p>
          </ScrollAnimation>
        </div>
      </div>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-playfair text-onedine-brown">Our Story</h2>
                <div className="w-20 h-1 bg-onedine-gold"></div>
                <p className="text-gray-600">
                  OneDine was born from a simple yet ambitious vision: to create a dining destination where culinary traditions from around the world could harmoniously blend together, offering guests a unique and memorable experience.
                </p>
                <p className="text-gray-600">
                  Founded by Chef Michael Laurent in 2015, our restaurant quickly became known for its innovative approach to fine dining, combining classic techniques with contemporary presentation and unexpected flavor combinations.
                </p>
                <p className="text-gray-600">
                  What sets us apart is our unwavering commitment to quality in every aspect of the dining experience—from sourcing the finest ingredients to providing attentive service in an elegant yet welcoming atmosphere.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Restaurant interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair text-onedine-brown mb-4">Our Values & Mission</h2>
              <div className="w-20 h-1 bg-onedine-gold mx-auto mb-4"></div>
              <p className="text-gray-600">
                At OneDine, our philosophy is built upon these core principles that guide everything we do
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="w-14 h-14 bg-onedine-burgundy/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-onedine-burgundy text-2xl font-playfair">1</span>
                </div>
                <h3 className="text-xl font-medium font-playfair text-onedine-brown mb-3">Quality</h3>
                <p className="text-gray-600">
                  We source the finest ingredients, with a focus on seasonality, sustainability, and supporting local producers whenever possible.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="w-14 h-14 bg-onedine-burgundy/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-onedine-burgundy text-2xl font-playfair">2</span>
                </div>
                <h3 className="text-xl font-medium font-playfair text-onedine-brown mb-3">Creativity</h3>
                <p className="text-gray-600">
                  We embrace innovation in our cuisine, constantly evolving our menu to surprise and delight our guests with new flavor combinations.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="w-14 h-14 bg-onedine-burgundy/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-onedine-burgundy text-2xl font-playfair">3</span>
                </div>
                <h3 className="text-xl font-medium font-playfair text-onedine-brown mb-3">Hospitality</h3>
                <p className="text-gray-600">
                  We believe in creating a welcoming environment where every guest feels valued and every special occasion becomes truly memorable.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair text-onedine-brown mb-4">Meet Our Team</h2>
              <div className="w-20 h-1 bg-onedine-gold mx-auto mb-4"></div>
              <p className="text-gray-600">
                The passionate professionals behind OneDine's culinary excellence
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-1 gap-8">
            {team.map((member, index) => (
              <ScrollAnimation key={member.name} delay={index * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-custom hover-scale">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-contain object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-medium font-playfair text-onedine-brown">{member.name}</h3>
                    <p className="text-onedine-burgundy mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair text-onedine-brown mb-4">Our Journey</h2>
              <div className="w-20 h-1 bg-onedine-gold mx-auto mb-4"></div>
              <p className="text-gray-600">
                The evolution of OneDine through the years
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            {timeline.map((event, index) => (
              <ScrollAnimation key={event.year} delay={index * 100}>
                <div className="flex mb-8">
                  <div className="flex-shrink-0 w-24 md:w-32 text-right pr-4 md:pr-8">
                    <span className="text-onedine-gold font-playfair font-bold">{event.year}</span>
                  </div>
                  <div className="relative pb-8">
                    {index < timeline.length - 1 && (
                      <div className="absolute top-5 left-4 -ml-px h-full w-0.5 bg-onedine-gold/30"></div>
                    )}
                    <div className="absolute top-1 -left-2 w-6 h-6 bg-white rounded-full border-2 border-onedine-gold"></div>
                    <div className="ml-6">
                      <h3 className="text-lg font-medium font-playfair text-onedine-brown">{event.title}</h3>
                      <p className="mt-1 text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
