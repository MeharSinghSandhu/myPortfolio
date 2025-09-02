
type PillProps = { label: string; tone: 'blue' | 'purple' | 'orange' };

const toneToClasses: Record<NonNullable<PillProps['tone']>, string> = {
  blue: 'bg-sky-400/20 text-sky-200 border-sky-400/30',
  purple: 'bg-purple-400/20 text-purple-200 border-purple-400/30',
  orange: 'bg-orange-400/20 text-orange-200 border-orange-400/30',
};

function Pill({ label, tone }: PillProps) {
  return (
    <span className={`px-4 py-2 rounded-lg text-sm border ${toneToClasses[tone]} hover:scale-105 transition-transform duration-200`}>{label}</span>
  );
}

export default function SkillsSection() {
  // All skills organized by color tone in the specified order
  const allSkills = [
    // Blue skills
    { label: 'C', tone: 'blue' as const },
    { label: 'Python', tone: 'blue' as const },
    { label: 'Java', tone: 'blue' as const },
    { label: 'Flutter', tone: 'blue' as const },
    { label: 'R', tone: 'blue' as const },
    { label: 'Easy 68K', tone: 'blue' as const },
    { label: 'JavaScript', tone: 'blue' as const },
    { label: 'TypeScript', tone: 'blue' as const },
    { label: 'jQuery', tone: 'blue' as const },
    { label: 'Tailwind CSS', tone: 'blue' as const },
    { label: 'React.js', tone: 'blue' as const },
    { label: 'Next.js', tone: 'blue' as const },
    { label: 'Node.js', tone: 'blue' as const },
    { label: 'MySQL', tone: 'blue' as const },
    { label: 'NoSQL', tone: 'blue' as const },
    { label: 'Firebase', tone: 'blue' as const },
    { label: 'AWS', tone: 'blue' as const },
    { label: 'GitHub', tone: 'blue' as const },
    { label: 'GitLab', tone: 'blue' as const },
    { label: 'Docker', tone: 'blue' as const },
    { label: 'Figma', tone: 'blue' as const },
    { label: 'PowerBI', tone: 'blue' as const },
    { label: 'OpenCV', tone: 'blue' as const },
    { label: 'Java Swing', tone: 'blue' as const },
    { label: 'Pandas', tone: 'blue' as const },
    { label: 'Dask', tone: 'blue' as const },
    { label: 'Matplotlib', tone: 'blue' as const },
    { label: 'Scikit-learn', tone: 'blue' as const },
    { label: 'TensorFlow', tone: 'blue' as const },
    { label: 'Pytorch', tone: 'blue' as const },
    { label: 'Hugging Face', tone: 'blue' as const },
    { label: 'Open AI', tone: 'blue' as const },
    { label: 'Gemini API', tone: 'blue' as const },
    { label: 'Make Automation', tone: 'blue' as const },
    { label: 'Agile', tone: 'blue' as const },
    { label: 'Scrum', tone: 'blue' as const },
    { label: 'Slack', tone: 'blue' as const },   

  ];

  return (
    <section id="skills" className="min-h-screen mt-44 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">⚡</span>
            SKILLS & TECHNOLOGIES
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and technologies I use to bring ideas to life.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {allSkills.map((skill) => (
            <Pill key={skill.label} label={skill.label} tone={skill.tone} />
          ))}
        </div>
      </div>
    </section>
  );
}



