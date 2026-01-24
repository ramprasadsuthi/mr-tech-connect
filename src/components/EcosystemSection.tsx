import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  Briefcase,
  ArrowRight,
  BookOpen,
  Code,
  Users,
  Building,
  Handshake,
  TrendingUp,
} from "lucide-react";

export const EcosystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="ecosystem"
      className="py-20 lg:py-32 bg-muted/30"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            Two Partners, One Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our ecosystem combines world-class training with strategic hiring
            partnerships to create a complete career development journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Medha XL Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="partner" className="h-full overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl gradient-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl font-display">
                  Medha XL
                </CardTitle>
                <span className="text-secondary font-medium">
                  Training Partner
                </span>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Your gateway to industry-ready skills. Medha XL provides
                  comprehensive training programs designed to transform beginners
                  into professionals.
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: BookOpen, text: "Industry-aligned curriculum" },
                    { icon: Code, text: "Hands-on live projects" },
                    { icon: Users, text: "Expert mentorship" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" size="lg" className="w-full" asChild>
                  <a
                    href="https://www.medhatest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn"
                  >
                    Explore Training Programs
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* RUBIKS Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card variant="partner" className="h-full overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-display">RUBIKS</CardTitle>
                <span className="text-primary font-medium">Hiring Partner</span>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Your bridge to career success. RUBIKS connects trained
                  professionals with leading companies looking for skilled talent.
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: Building, text: "Corporate hiring partnerships" },
                    { icon: Handshake, text: "Dedicated placement support" },
                    { icon: TrendingUp, text: "Career growth guidance" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a
                    href="https://www.rubiksbs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn"
                  >
                    Explore Hiring Solutions
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
