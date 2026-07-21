import { motion } from "framer-motion";

import ProjectCard from "../ui/ProjectCard";

import { projects } from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="
min-h-screen

px-6
lg:px-24

py-24

bg-gray-50

dark:bg-slate-900

transition-colors
duration-500

"
    >
      <div
        className="
max-w-7xl

mx-auto

"
      >
        {/* Section Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
text-center

mb-16

"
        >
          <h2
            className="
text-4xl

lg:text-5xl

font-bold

text-gray-900

dark:text-white

"
          >
            Featured
            <span
              className="
text-blue-500

"
            >
              Projects
            </span>
          </h2>

          <p
            className="
mt-5

max-w-2xl

mx-auto

text-gray-600

dark:text-gray-400

"
          >
            A collection of software engineering, AI, and educational technology
            projects I have designed and developed.
          </p>
        </motion.div>

        {/* Project Grid */}

        <div
          className="

grid

md:grid-cols-2

lg:grid-cols-3

gap-8

"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,

                y: 50,
              }}
              whileInView={{
                opacity: 1,

                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,

                delay: index * 0.15,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
