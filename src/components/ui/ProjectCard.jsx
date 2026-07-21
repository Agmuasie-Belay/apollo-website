import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
       
      className="
relative
h-[360px]
//  lg:h-[360px]

rounded-3xl

overflow-hidden

group

shadow-xl

"
    >
      {/* Background Image */}

      <img
        src={project.image}
        alt={project.title}
        className="
absolute
inset-0

w-full
h-full

object-cover

transition-transform
duration-700

group-hover:scale-105

"
      />

      {/* Dark gradient */}

      <div
        className="
absolute
inset-0

bg-linear-to-t

from-black/80

via-black/30

to-transparent
"
      />

      {/* Glass Information Panel */}

      <motion.div
        className="
absolute
bottom-0
left-0
w-full

h-[35%]
group-hover:h-full

transition-all
duration-500

p-6

bg-white/10
dark:bg-black/30

backdrop-blur-lg

border-t
border-white/20

flex
flex-col
"
      >
        {/* Always visible content */}
        <div className=" shrink-0">
          <h3 className=" text-2xl font-bold text-white ">
            {project.title}
          </h3>

          <p
            className="
text-blue-300

font-medium

mt-1

"
          >
            {project.category}
          </p>

          {/* <p className="text-gray-200 mt-3 text-sm line-clamp-2 ">
{project.description}
</p> */}
        </div>
        {/* Hidden details */}

        <div
          className="

opacity-0


group-hover:opacity-100
group-hover:translate-y-0



transition-all

duration-500

mt-3

"
        >
          <ul
            className="
space-y-2

text-sm

text-gray-200

"
          >
            {project.details.map((item, index) => (
              <li
                key={index}
                className="
flex
items-center
gap-2

"
              >
                <span
                  className="
text-blue-400
"
                >
                  ▹
                </span>

                {item}
              </li>
            ))}
          </ul>

          {/* Technologies */}

          <div
            className="
flex

flex-wrap

gap-2

mt-5

"
          >
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="

px-3

py-1

rounded-full

text-xs

bg-white/20

text-white

"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}

          <div
            className="
flex

gap-5

mt-6

"
          >
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
text-white

hover:text-blue-400

transition

"
            >
              <FaExternalLinkAlt size={18} />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
text-white

hover:text-blue-400

transition

"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
