
import { useState } from "react";
import { ScrollAnimation } from "@/components/utils/ScrollAnimation";
import { toast } from "sonner";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    specialRequests: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Reservation form submitted:", formData);
    
    // Show success toast
    toast.success("Reservation request received", {
      description: "We'll confirm your reservation shortly.",
    });
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      guests: "2",
      occasion: "",
      specialRequests: "",
    });
  };

  // Available time slots
  const timeSlots = [
    "17:00", "17:30", "18:00", "18:30", "19:00", 
    "19:30", "20:00", "20:30", "21:00", "21:30"
  ];

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="pt-16">
      {/* Reservation Hero */}
      <div className="bg-onedine-brown text-white py-24 text-center relative">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80" 
            alt="Reservation background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">Make a Reservation</h1>
            <p className="max-w-xl mx-auto">
              Reserve your table at OneDine for an unforgettable dining experience
            </p>
          </ScrollAnimation>
        </div>
      </div>

      {/* Reservation Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Reservation Info */}
              <ScrollAnimation>
                <div className="space-y-6">
                  <h2 className="text-3xl font-playfair text-onedine-brown">Dining at OneDine</h2>
                  <div className="w-20 h-1 bg-onedine-gold"></div>
                  
                  <p className="text-gray-600">
                    We look forward to hosting you at OneDine. To ensure the best experience, we recommend making your reservation in advance.
                  </p>
                  
                  <div className="space-y-4 mt-8">
                    <div>
                      <h3 className="text-lg font-medium font-playfair text-onedine-brown">Hours</h3>
                      <ul className="mt-2 space-y-1 text-gray-600">
                        <li className="flex justify-between">
                          <span>Monday - Thursday</span>
                          <span>5:00 PM - 10:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Friday - Saturday</span>
                          <span>5:00 PM - 11:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sunday</span>
                          <span>5:00 PM - 9:00 PM</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium font-playfair text-onedine-brown">Private Events</h3>
                      <p className="mt-2 text-gray-600">
                        For private events or large parties, please contact us directly at <a href="tel:+11234567890" className="text-onedine-burgundy hover:underline">(123) 456-7890</a> or <a href="mailto:events@onedine.com" className="text-onedine-burgundy hover:underline">events@onedine.com</a>.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium font-playfair text-onedine-brown">Dress Code</h3>
                      <p className="mt-2 text-gray-600">
                        Smart casual attire is recommended. We kindly request no athletic wear, beachwear, or flip flops.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Reservation Form */}
              <ScrollAnimation delay={200}>
                <div className="bg-white rounded-lg shadow-custom p-6 md:p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-playfair text-onedine-brown mb-2">Reservation Request Received</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for choosing OneDine. We'll contact you shortly to confirm your reservation.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="btn-outline"
                      >
                        Make Another Reservation
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-playfair text-onedine-brown mb-6">Reserve Your Table</h2>
                      
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name*
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-onedine-burgundy focus:border-onedine-burgundy"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number*
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-onedine-burgundy focus:border-onedine-burgundy"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-onedine-burgundy focus:border-onedine-burgundy"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                              Date*
                            </label>
                            <input
                              type="date"
                              id="date"
                              name="date"
                              required
                              min={today}
                              value={formData.date}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-onedine-burgundy focus:border-onedine-burgundy"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                              Time*
                            </label>
                            <select
                              id="time"
                              name="time"
                              required
                              value={formData.time}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-onedine-burgundy focus:border-onedine-burgundy"
                            >
                              <option value="" disabled>Select a time</option>
                              {timeSlots.map((time) => (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                              Number of Guests*
                            </label>
                            <select
                              id="guests"
                              name="guests"
                              required
                              value={formData.guests}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-onedine-burgundy focus:border-onedine-burgundy"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <option key={num} value={num}>
                                  {num} {num === 1 ? "person" : "people"}
                                </option>
                              ))}
                              <option value="9+">9+ people</option>
                            </select>
                          </div>
                          
                          <div>
                            <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">
                              Occasion
                            </label>
                            <select
                              id="occasion"
                              name="occasion"
                              value={formData.occasion}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-onedine-burgundy focus:border-onedine-burgundy"
                            >
                              <option value="">Select (optional)</option>
                              <option value="Birthday">Birthday</option>
                              <option value="Anniversary">Anniversary</option>
                              <option value="Date Night">Date Night</option>
                              <option value="Business">Business</option>
                              <option value="Special Occasion">Special Occasion</option>
                            </select>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                            Special Requests
                          </label>
                          <textarea
                            id="specialRequests"
                            name="specialRequests"
                            rows={3}
                            value={formData.specialRequests}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-onedine-burgundy focus:border-onedine-burgundy"
                            placeholder="Allergies, dietary restrictions, seating preferences, etc."
                          ></textarea>
                        </div>
                        
                        <button 
                          type="submit"
                          className="w-full btn-primary mt-4"
                        >
                          Request Reservation
                        </button>
                        
                        <p className="text-xs text-gray-500 mt-4">
                          * Required fields. By submitting this form, you agree to our reservation policy.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
