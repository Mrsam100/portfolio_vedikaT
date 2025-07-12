import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 dynamic-text text-glow"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Let's Connect
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 dynamic-text">Get In Touch</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Ready to bring your creative vision to life? I'd love to hear about your project and discuss how we can collaborate to create something amazing together.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-[hsl(200,100%,50%)]"></i>
                <span>tvedika65@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-[hsl(150,100%,50%)]"></i>
                <span>+91 7487-02-1974</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-[hsl(320,100%,50%)]"></i>
                <span>Ahmedabad, India</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[hsl(0,0%,10%)] border-2 border-gray-700 rounded-lg focus:border-[hsl(200,100%,50%)] focus:outline-none transition-colors text-white"
                  data-interactive="true"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[hsl(0,0%,10%)] border-2 border-gray-700 rounded-lg focus:border-[hsl(200,100%,50%)] focus:outline-none transition-colors text-white"
                  data-interactive="true"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[hsl(0,0%,10%)] border-2 border-gray-700 rounded-lg focus:border-[hsl(200,100%,50%)] focus:outline-none transition-colors resize-none text-white"
                  data-interactive="true"
                />
              </div>
              <motion.button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full py-3 bg-transparent border-2 border-[hsl(200,100%,50%)] text-[hsl(200,100%,50%)] hover:bg-[hsl(200,100%,50%)] hover:text-black transition-all duration-300 rounded-lg glow disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-interactive="true"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
