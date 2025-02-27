import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform built with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: 'https://placehold.co/600x400',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management solution for remote teams',
      tech: ['React', 'Firebase', 'Material-UI'],
      image: 'https://placehold.co/600x400',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing my work and skills',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://placehold.co/600x400',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">My Projects</h1>
          
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="w-full md:w-3/5 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-xl shadow-xl"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="w-full md:w-2/5 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-accent to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow duration-300"
                  >
                    View Project
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;