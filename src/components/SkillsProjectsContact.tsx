import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cloud, Github, Layout, Database, BarChart } from 'lucide-react';
import db from '../assets/dashboard2.png';
import eopss from '../assets/eopss.png';
import blog from '../assets/blog.png';

const SkillsProjectsContact = () => {
  // Skills Data
  const skills = {
    "Programming Languages": {
      icon: <Code className="w-6 h-6" />,
      items: ["", "", "", "", "" , "", "", ""],
      color: "blue"
    },
    "Frontend": {
      icon: <Layout className="w-6 h-6" />,
      items: ["", "", "", "", "", "", "", ""],
      color: "purple"
    },
    "Backend": {
      icon: <Server className="w-6 h-6" />,
      items: ["", "", "", "", "", "", "","" ],
      color: "emerald"
    },
    "Databases": {
      icon: <Database className="w-6 h-6" />,
      items: ["", "", "", "", ""],
      color: "cyan"
    },
    "Analytics Tools": {
      icon: <BarChart className="w-6 h-6" />,
      items: ["", "","","", "","", ""],
      color: "amber"
    },
    "Cloud & DevOps": {
      icon: <Cloud className="w-6 h-6" />,
      items: ["", "", "", "", "", "", "", ""],
      color: "orange"
    }
};

  // Projects Data
  const projects = [
    {
      title: "",
      description: "",
      technologies: [
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      github: "",
      image: db
    },
    {
      title: "",
      description: "",
      technologies: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      github: "",
      image: blog 
    },
    {
      title: "",
      description: "",
      technologies: [
        "",
        "",
        "",
        "",
        "",    
        "",
        ""
      ],
      github: "",
      image: eopss
    }
  ];

  const SkillCard = ({ category, details }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 
        border-l-4 ${
          details.color === 'blue' ? 'border-blue-500' : 
          details.color === 'purple' ? 'border-purple-500' :
          details.color === 'emerald' ? 'border-emerald-500' : 
          details.color === 'orange' ? 'border-orange-500' :
          details.color === 'cyan' ? 'border-cyan-500' :
          details.color === 'amber' ? 'border-amber-500' :
          'border-gray-500'
        }`}
    >
      <div className="flex items-center mb-4">
        {details.icon}
        <h3 className="text-xl font-bold ml-2">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {details.items.map((skill, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.1 }}
            className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
              details.color === 'blue' ? 'bg-blue-100 text-blue-600' :
              details.color === 'purple' ? 'bg-purple-100 text-purple-600' :
              details.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
              details.color === 'orange' ? 'bg-orange-100 text-orange-600' :
              details.color === 'cyan' ? 'bg-cyan-100 text-cyan-600' :
              details.color === 'amber' ? 'bg-amber-100 text-amber-600' :
              'bg-gray-100 text-gray-600'
            }`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );

  const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 relative"
      >
        <div className="relative overflow-hidden">
          
          <img 
            src={project.image} 
            alt={project.title}
            className={`w-full h-80 object-cover transition-transform duration-300 
              ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Github className="w-6 h-6 text-gray-800" />
              </a>
            </div>
          )}
        </div>
        <div className="p-6">
        <h3 className="text-gray-600 mb-4">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <motion.span 
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      {/* Skills Section */}
      <section 
        id="skills" 
        className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, details], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 
                }}
              >
                <SkillCard category={category} details={details} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  
      {/* Projects Section */}
      <section 
        id="projects" 
        className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default SkillsProjectsContact;