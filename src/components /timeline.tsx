interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "JK Exim",
    location: "Remote",
    period: "Sep 2024 - Dec 2024",
    description: "Developed full-stack web applications using React and Node.js, implemented CI/CD pipelines, and collaborated with cross-functional teams to deliver high-quality software solutions."
  },
  {
    role: "Project Curriculum Designer",
    company: "University of Guelph",
    location: "Guelph, ON",
    period: "May 2024 - Aug 2024",
    description: "Designed and developed educational curriculum for software engineering projects, created interactive learning materials, and mentored students in programming fundamentals."
  },
  {
    role: "Student Accessibility Services - Course Interpreter",
    company: "University of Guelph",
    location: "Guelph, ON",
    period: "Jan 2025 - Current",
    description: "Built responsive user interfaces using React and TypeScript, optimized application performance, and implemented modern UI/UX design principles."
  }
];

export default function TimelineSection() {
  return (
    <section id="experience" className="min-h-screen py-15 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">💼</span>
            PROFESSIONAL EXPERIENCE
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My journey in software engineering, from internships to impactful projects that shaped my technical expertise.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] to-[#22D3EE] border-dashed border-l-2 border-[#3B82F6]"></div>
          
          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Content card */}
              <div className="ml-16 bg-[#1E293B] rounded-xl p-6 border border-gray-800 hover:border-[#3B82F6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/10 relative">
                {/* Big dot at start of card */}
                <div className="absolute -left-8 top-6 w-6 h-6 bg-[#3B82F6] rounded-full border-4 border-[#121212] shadow-lg"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-bold text-white mb-1 sm:mb-0">
                    {experience.role}
                  </h3>
                  <span className="text-sm text-[#3B82F6] font-medium bg-[#3B82F6]/10 px-3 py-1 rounded-full">
                    {experience.period}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 text-[#9CA3AF]">
                  <span className="font-medium text-[#E0F2FE]">{experience.company}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{experience.location}</span>
                </div>
                
                <p className="text-[#D1D5DB] leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
