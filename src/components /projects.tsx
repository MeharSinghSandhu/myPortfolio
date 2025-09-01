import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    image: "/images/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "https://ecommerce-demo.com",
    github: "https://github.com/username/ecommerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/taskapp.jpg",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    link: "https://taskapp-demo.com",
    github: "https://github.com/username/taskapp"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that displays current weather conditions, forecasts, and historical data with interactive charts and maps.",
    image: "/images/weather.jpg",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    link: "https://weather-demo.com",
    github: "https://github.com/username/weather"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects, skills, and experience with modern design and smooth animations.",
    image: "/images/portfolio.jpg",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    link: "https://portfolio-demo.com",
    github: "https://github.com/username/portfolio"
  },
  {
    id: 5,
    title: "Chat Application",
    description: "Real-time chat application with features like private messaging, group chats, file sharing, and message encryption.",
    image: "/images/chat.jpg",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    link: "https://chat-demo.com",
    github: "https://github.com/username/chat"
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "A recipe discovery application that helps users find recipes based on available ingredients, dietary restrictions, and cooking preferences.",
    image: "/images/recipe.jpg",
    technologies: ["React", "Spoonacular API", "Redux", "Material-UI"],
    link: "https://recipe-demo.com",
    github: "https://github.com/username/recipe"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">🚀</span>
            PROJECTS
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-gray-700"
            >
              {/* Project Image */}
              <div className="mb-6">
                <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">📱</div>
                    <p className="text-sm opacity-80">Project Preview</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                    >
                      <span>🌐</span>
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2"
                    >
                      <span>📁</span>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
