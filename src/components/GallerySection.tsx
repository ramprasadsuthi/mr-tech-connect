import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Users, Award, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const galleryItems = [
  {
    icon: BookOpen,
    title: "Training Sessions",
    description: "Interactive classroom and online learning experiences",
    path: "/TrainingSessions",
  },
  {
    icon: Users,
    title: "Workshops",
    description: "Hands-on workshops with industry experts",
    path: "/Workshops",
  },
  {
    icon: Award,
    title: "Our Team",
    description: "Team building and networking events",
    path: "/Certifications",
  },
  {
    icon: Camera,
    title: "Student Activities",
    description: "Recognition ceremonies and achievements",
    path: "/StudentActivities",
  },
];


export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            Life at MR Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Glimpses of our vibrant learning community, workshops, and success
            stories.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => item.path && navigate(item.path)}
              className="group relative aspect-square rounded-2xl bg-gradient-to-br from-muted to-muted/50 overflow-hidden cursor-pointer"
            >
              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-2xl gradient-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
