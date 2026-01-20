import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Interview Mocker',
    description: 'An AI-powered mock interview platform with job-role specific questions and personalized feedback. Features structured grading logic with AI-driven evaluation dashboards.',
    techStack: ['Next.js', 'React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Gemini API'],
    highlights: [
      'Backend APIs with optimized database schemas',
      'Scalable serverless infrastructure using Neon & Vercel',
      'AI-driven evaluation and performance analytics',
    ],
    gradient: 'from-blue-600/10 to-slate-600/10',
    liveDemo: 'https://ai-interview-mocker-ten-hazel.vercel.app/',
    github: 'https://github.com/Himanshusharma339/ai-interview-mocker',
  },
  {
    title: 'AuthentiGrade',
    description: 'A smart document validation system using OCR and rule-based verification workflows. Automates authenticity verification with AI-driven logic and reduces manual verification time.',
    techStack: ['Python', 'OCR', 'AI/ML', 'Document Processing'],
    highlights: [
      'Metadata extraction and validation',
      'AI-driven authenticity logic',
      'Automated reporting pipelines',
    ],
    gradient: 'from-slate-600/10 to-gray-500/10',
    liveDemo: null,
    github: 'https://github.com/Himanshusharma339/authentigrade',
  },
  {
    title: 'FrameForge',
    description: 'Wireframe to Code Automation System that transforms UI wireframes into production-ready code using AI and computer vision techniques.',
    techStack: ['React.js', 'Node.js', 'AI/ML', 'Computer Vision'],
    highlights: [
      'Automated code generation from wireframes',
      'AI-powered component detection',
      'Clean, maintainable output code',
    ],
    gradient: 'from-gray-600/10 to-blue-600/10',
    liveDemo: null,
    github: 'https://github.com/Himanshusharma339/frameforge',
  },
  {
    title: 'AksharPath',
    description: 'Indian Script Transliteration System enabling seamless conversion between Indian scripts using advanced NLP techniques and language processing.',
    techStack: ['Python', 'NLP', 'Machine Learning', 'Indian Languages'],
    highlights: [
      'Multi-script transliteration support',
      'High accuracy language processing',
      'User-friendly interface',
    ],
    gradient: 'from-blue-700/10 to-slate-500/10',
    liveDemo: null,
    github: 'https://github.com/Himanshusharma339/aksharpath',
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding bg-gray-50" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Featured Projects
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Things I've Built
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my experience in full-stack development, AI integration, and problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Project Links */}
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                    {project.liveDemo && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons row */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </motion.a>
                  )}
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  {!project.liveDemo && (
                    <span className="text-xs text-muted-foreground italic">Demo coming soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Himanshusharma339"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-medium rounded-xl hover:border-primary/50 transition-all"
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
