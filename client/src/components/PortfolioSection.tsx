import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const portfolioItems = [
    {
      title: "Brand Identity Design",
      description: "Complete brand identity for a tech startup including logo, color palette, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      tags: ["Branding", "Logo"],
      colors: ["hsl(200,100%,50%)", "hsl(320,100%,50%)"]
    },
    {
      title: "Creative Poster Series",
      description: "A series of creative posters exploring modern typography and geometric compositions.",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      tags: ["Print", "Typography"],
      colors: ["hsl(150,100%,50%)", "hsl(200,100%,50%)"]
    },
    {
      title: "Web Design",
      description: "Modern web interface design with focus on user experience and interactive elements.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      tags: ["UI/UX", "Web"],
      colors: ["hsl(320,100%,50%)", "hsl(150,100%,50%)"]
    },
    {
      title: "Packaging Design",
      description: "Sustainable packaging design for organic beauty products with minimal aesthetic.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      tags: ["Packaging", "3D"],
      colors: ["hsl(200,100%,50%)", "hsl(150,100%,50%)"]
    },
    {
      title: "Digital Illustration",
      description: "Custom digital illustrations for editorial and commercial use with unique style.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      tags: ["Illustration", "Digital"],
      colors: ["hsl(320,100%,50%)", "hsl(200,100%,50%)"]
    },
    {
      title: "Motion Graphics",
      description: "Animated graphics and motion design for social media and digital campaigns.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      tags: ["Animation", "Motion"],
      colors: ["hsl(150,100%,50%)", "hsl(320,100%,50%)"]
    }
  ];

  return (
    <section id="portfolio" className="min-h-screen py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 neon-text text-[hsl(150,100%,50%)]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Portfolio
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="portfolio-card rounded-xl p-6 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              data-interactive="true"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className={`text-xl font-bold mb-2 text-[${item.colors[0]}]`}>
                {item.title}
              </h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="flex space-x-2">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 bg-opacity-20 rounded-full text-sm`}
                    style={{
                      backgroundColor: `${item.colors[tagIndex % item.colors.length]}20`,
                      color: item.colors[tagIndex % item.colors.length]
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
