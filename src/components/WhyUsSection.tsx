import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers,
  Laptop,
  GraduationCap,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "Training + Hiring Under One Umbrella",
    description:
      "Seamless transition from learning to earning with our integrated ecosystem that covers your entire career journey.",
  },
  {
    icon: Laptop,
    title: "Real-Time Projects",
    description:
      "Work on live industry projects that give you practical experience and build a portfolio that impresses employers.",
  },
  {
    icon: GraduationCap,
    title: "Internship + Placement Focus",
    description:
      "Every program includes internship opportunities and dedicated placement support to launch your career.",
  },
  {
    icon: Briefcase,
    title: "Corporate-Ready Skill Development",
    description:
      "Our curriculum is designed with industry input, ensuring you develop skills that companies actually need.",
  },
];

const highlights = [
  "Industry-aligned curriculum",
  "Expert instructors",
  "Flexible learning options",
  "Career counseling",
  "Interview preparation",
  "Soft skills training",
  "Resume building",
  "Mock interviews",
];

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            Your Success Is Our Priority
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing an unparalleled learning experience that
            prepares you for real-world challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto p-8 rounded-2xl gradient-hero text-primary-foreground"
        >
          <h3 className="text-2xl font-display font-semibold text-center mb-8">
            What Sets Us Apart
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-primary-foreground/90"
              >
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
