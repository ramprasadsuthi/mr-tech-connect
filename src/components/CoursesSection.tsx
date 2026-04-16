import { motion, useInView } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Database,
  BarChart3,
  TestTube,
  Cpu,
  MonitorSmartphone,
  ArrowRight,
  Briefcase,
  Camera,
  Laptop,
} from "lucide-react";
import { link } from "fs";

const courses = [
  {
    icon: Code2,
    title: "Java Full Stack Development",
    description: "Comprehensive Java front-end back-end & DB",
    duration: "3-6 months",
    color: "from-orange-500 to-red-500",
    link: "/javafullstack.html",
  },
  {
    icon: TestTube,
    title: "Software Development Engineer in Test (SDET)",
    description: "Training in development + testing",
    duration: "4-6 months",
    color: "from-green-500 to-emerald-500",
    link: "/sdet.html",
  },
  {
    icon: Code2,
    title: "Python with AI",
    description: "Master Python programming and Artificial Intelligence with real-world projects",
    duration: "3-6 months",
    color: "from-green-500 to-emerald-500",
    link: "/pythonwithai.html",
  },
  {
    icon: Code2,
    title: "Python with Data Science",
    description: "Master Python programming and Data Science with real-world projects",
    duration: "3-6 months",
    color: "from-orange-500 to-red-500",
    link: "/pythonwithds.html",
  },
   {
    icon: Code2,
    title: "Python with Data Analytics",
    description: "Master Python programming and Data Analytics with real-world projects",
    duration: "3-6 months",
    color: "from-blue-500 to-cyan-500",
    link: "/pythonwithda.html",
  },
  {
    icon: Laptop,
    title: "Internship Projects (Get the Realtime Experience)",
    description: "Real project execution experience",
    duration: "2-3 months",
    color: "from-blue-500 to-cyan-500",
    link: "/internship-projects.html",
  },
   {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Digital marketing strategies & tools",
    duration: "6-8 weeks",
    color: "from-yellow-500 to-orange-500",
    link: "/digitalmarketing.html",
  },
  {
    icon: Code2,
    title: "Full Stack Web Development (MERN)",
    description: "MERN stack development with real projects",
    duration: "3-6 months",
    color: "from-orange-500 to-red-500",
    link: "/mernstack.html",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Analyst (Agile, SQL & Power BI)",
    description: "Learn requirement gathering, Agile practices, SQL data analysis, and Power BI dashboards with real-world BA projects.",
    duration: "6-8 weeks",
    color: "from-blue-500 to-indigo-500",
    link: "/business-analyst.html",
  },
  {
  icon: GraduationCap,
  title: "College Workshops & CRT Programs",
  description: "Industry-focused workshops and campus recruitment training programs on AI, Full Stack, Data Analytics, Cybersecurity, and more.",
  duration: "15 - 20 days",
  color: "from-orange-500 to-red-500",
  link: "/college-workshops.html",
  },
];

export const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Course Offerings
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            Industry-Ready Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our programs feature industry-aligned curriculum, live projects, and
            internship opportunities to ensure you're job-ready from day one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => {
            const cardContent = (
              <Card
                variant="feature"
                className={`h-full group ${
                  course.link ? "" : "cursor-pointer"
                }`}
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <course.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <span className="text-sm text-secondary font-medium">
                    {course.duration}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                      Live Projects
                    </span>
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                      Internship
                    </span>
                    <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                      Placement
                    </span>
                  </div>
                </CardContent>
              </Card>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {course.link ? (
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="accent" size="lg" asChild>
            <a
              href="https://www.medhatest.com/courses"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              View All Courses
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
