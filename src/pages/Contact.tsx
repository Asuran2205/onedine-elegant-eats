
import { useState } from "react";
import { ScrollAnimation } from "@/components/utils/ScrollAnimation";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    
    // Show success toast
    toast.success("Message sent", {
      description: "We'll get back to you as soon as possible.",
    });
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="pt-16">
      {/* Contact Hero */}
      <div className="bg-onedine-brown text-white py-24 text-center relative">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80" 
            alt="Contact background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">Contact Us</h1>
            <p className="max-w-xl mx-auto">
              Get in touch with OneDine for inquiries, feedback, or special event planning
            </p>
          </ScrollAnimation>
        </div>
      </div>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-3xl font-playfair text-onedine-brown">Get In Touch</h2>
                <div className="w-20 h-1 bg-onedine-gold"></div>
                
                <p className="text-gray-600">
                  We'd love to hear from you. Whether you have a question about our menu, want to provide feedback about your dining experience, or are interested in hosting a special event, our team is here to assist you.
                </p>
                
                <div className="space-y-4 mt-8">
                  {/* Location */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-onedine-burgundy/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-onedine-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium font-playfair text-onedine-brown">Location</h3>
                      <address className="not-italic text-gray-600 mt-1">
                        123 Cuisine Street<br />
                        Foodie District<br />
                        Gourmet City, GC 12345
                      </address>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-onedine-burgundy/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-onedine-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium font-playfair text-onedine-brown">Phone</h3>
                      <p className="text-gray-600 mt-1">
                        <a href="tel:+11234567890" className="hover:text-onedine-burgundy">
                          (123) 456-7890
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-onedine-burgundy/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-onedine-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium font-playfair text-onedine-brown">Email</h3>
                      <p className="text-gray-600 mt-1">
                        <a href="mailto:info@onedine.com" className="hover:text-onedine-burgundy">
                          info@onedine.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-onedine-burgundy/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-onedine-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium font-playfair text-onedine-brown">Hours</h3>
                      <ul className="text-gray-600 mt-1 space-y-1">
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
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Form */}
            <ScrollAnimation delay={200}>
              <div className="bg-white rounded-lg shadow-custom p-6 md:p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-playfair text-onedine-brown mb-2">Message Sent</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out to us. We'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-playfair text-onedine-brown mb-6">Send a Message</h2>
                    
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email*
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-onedine-burgundy focus:border-onedine-burgundy"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone (optional)
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-onedine-burgundy focus:border-onedine-burgundy"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject*
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-onedine-burgundy focus:border-onedine-burgundy"
                        >
                          <option value="">Select a topic</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Reservation Question">Reservation Question</option>
                          <option value="Private Event">Private Event</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Job Application">Job Application</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message*
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-onedine-burgundy focus:border-onedine-burgundy"
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit"
                        className="w-full btn-primary mt-4"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.57669744407!2d78.15802057504834!3d11.218922588958005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcf2caac4f6d5%3A0x9c439cd2b9944877!2sOne%20Dine%20Namakkal!5e0!3m2!1sen!2sin!4v1746010811311!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="OneDine Restaurant Location"
              ></iframe>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Contact;
