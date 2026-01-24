import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">
                  MR
                </span>
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                Technologies
              </span>
            </div>

            {/* Partner Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.medhatest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                Medha XL
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://www.rubiksbs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                RUBIKS
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <p className="text-primary-foreground/70 text-sm">
                © {new Date().getFullYear()} MR Technologies. All rights reserved.
              </p>
              <p className="text-secondary font-medium">
                Bridging Skills and Careers
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
