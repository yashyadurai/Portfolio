import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Palindromne Checker",
    description: "A Calculator application built with React and Taildwind CSS. Features include User Interaction and responsive design.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/yashyadurai/Palindrome-Checker",
    demo: "https://yashyadurai.github.io/Palindrome-Checker/",
  },
  {
    title: "Links Page",
    description: "A Simple Links Page which includes",
    tech: ["HTML", "CSS", "Vercel"],
    github: "https://github.com/yashyadurai/My-Links",
    demo: "https://sigma-links.vercel.app",
  },
  {
    title: "A Landing Page",
    description: "A Simple Landing Page Built Using HTML CSS",
    tech: ["HTML","CSS"],
    github: "https://github.com/yashyadurai/huddleLandingPage",
    demo: "https://yashyadurai.github.io/huddleLandingPage/",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4">My Projects</Badge>
          <h2 className="text-4xl font-bold mb-4">Check out my latest work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I've worked on a variety of projects, from simple websites to complex web applications. 
            Here are a few of my favorites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
