import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  prize?: string;
  event?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FULL STACK AI SPOTIFY MODERATION TOOL",
    description: "An award-winning AI platform that moderates podcasts and songs in real time, turning uploads into instant risk reports.",
    image: "/images/ecommerce.jpg",
    technologies: ["Python", "Typescript", "Tailwind CSS", "Flask", "Open AI Whisper","Open AI Omni", "Make.com"],
    github: "https://github.com/username/ecommerce",
    prize: " 1st Prize",
    event: "AI Business Society University of Guelph"
  },
  {
    id: 2,
    title: "FULL STACK SIGN LANGUAGE TRANSLATOR",
    description: "Built a real-time bidirectional translator that converts speech to ASL animations and ASL gestures to speech.",
    image: "/images/taskapp.jpg",
    technologies: ["Python(Flask)", "React-Native","AWS EC2/S3", "MediaPipe Hands", "Google Gemini", "Open CV", "Flask - CORS"],
    github: "https://github.com/username/taskapp",
    prize: " 3rd Prize",
    event: "GDSC Hackathon at University of Guelph"
  },
  {
    id: 3,
    title: "FULL STACK AI DOCTOR CONSULTANT",
    description: "A virtual doctor web app that diagnoses symptoms through AI conversations and triggers emergency alerts when needed whether its for booking appointments or emergencies.",
    image: "/images/weather.jpg",
    technologies: ["Python", "Typescript", "Tailwind CSS","Firebase","Gemini API's", "Twilio"],
    github: "https://github.com/username/weather",
    event: "Wilfred Laurier's Hack Canada"
  },
  {
    id: 4,
    title: "8 BALL POOL GAME",
    description: "A multiplayer pool game with realistic physics, blending a custom C engine with a smooth Python-MySQL backend..",
    image: "/images/portfolio.jpg",
    technologies: ["C", "Python", "MySQL", "HTML", "CSS","JQuery","AJAX"],
    github: "https://github.com/username/portfolio"
  },
  {
    id: 5,
    title: "SIDE GIGS",
    description: "• Mobile app that connects people with local gig workers for everyday tasks, with real-time chat and reviews. Integrated Stripe for secure payments and location-based filters for finding personalized gigs.",
    image: "/images/chat.jpg",
    technologies: ["Flutter", "Firebase", "Stripe", "Google API", ],
    github: "https://github.com/username/chat"
  },
  {
    id: 6,
    title: "PORTFOLIO WEBSITE - SOURCE CODE",
    description: "",
    image: "/images/recipe.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", ],
    github: "https://github.com/username/recipe"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen mt-44 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">🚀</span>
            PROJECTS / ACHIEVEMENTS
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

                {/* Prize and Event Info */}
                {(project.prize || project.event) && (
                  <div className="pt-4 space-y-3">
                    {project.event && (
                      <div className="flex items-center gap-2 text-blue-300 text-sm">
                        <span>📍</span>
                        <span>{project.event}</span>
                      </div>
                    )}
                    {project.prize && (
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{project.prize.includes("1st") ? "🥇" : "🥉"}</span>
                        <span className="text-yellow-400 font-semibold text-lg">{project.prize}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Project Links */}
                <div className="flex gap-4 pt-4">
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
