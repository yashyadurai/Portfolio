import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover hover:scale-110 transition ease-in-out hover:cursor-grab"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Yash</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              <strong>Full-stack developer</strong> passionate about building elegant solutions to complex problems.
              Always exploring new technologies and pushing the boundaries of what's possible.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/yashyadurai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yashyadurai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="mailto:yashyadurai001@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
