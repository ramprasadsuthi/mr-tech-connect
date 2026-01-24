import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Rocket, Award } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "Focused Training",
      description: "Industry-aligned curriculum designed for real-world success",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from professionals with years of industry experience",
    },
    {
      icon: Rocket,
      title: "Career Launch",
      description: "Seamless transition from learning to earning",
    },
    {
      icon: Award,
      title: "Certified Skills",
      description: "Recognized certifications that employers trust",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6">
              Bridging Skills and Careers
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              MR Technologies is a strategic collaboration that brings together the
              best of training and hiring under one powerful ecosystem. We're
              committed to transforming aspiring professionals into industry-ready
              talents.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                The Power of Partnership
              </h3>
              <p className="text-muted-foreground mb-6">
                Founded through a strategic collaboration between{" "}
                <strong className="text-foreground">Medha XL</strong> and{" "}
                <strong className="text-foreground">RUBIKS</strong>, MR
                Technologies creates a seamless pathway from skill development to
                career placement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-12 h-12 rounded-lg gradient-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-foreground font-bold">MX</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Medha XL — Training Partner
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Focuses on skills development, hands-on training, live
                      projects, and internship opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">RB</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      RUBIKS — Hiring Partner
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Handles placements, corporate partnerships, and recruitment
                      support for trained candidates.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-6 rounded-xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <feature.icon className="w-8 h-8 text-secondary mb-3" />
                  <h4 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
