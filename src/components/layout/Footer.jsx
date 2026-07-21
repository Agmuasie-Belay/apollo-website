import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="py-10 px-6 bg-gray-50 dark:bg-slate-950 border-t border-gray-200 
dark:border-slate-800 transition-colors duration-500"
    >
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <p
          className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  © {new Date().getFullYear() }
          <span className="font-semibold text-gray-900 dark:text-white">
            Agmuasie Belay
          </span>
          . All rights reserved.
        </p>

        {/* Social Links */}

        <div
          className="
flex

gap-6

text-xl

"
        >
          <a
            href="https://github.com/Agmuasie-Belay"
            target="_blank"
            rel="noopener noreferrer"
            className="

text-gray-600

dark:text-gray-400


hover:text-blue-500


transition


hover:-translate-y-1


"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/agmuasie-belay"
            target="_blank"
            rel="noopener noreferrer"
            className="

text-gray-600

dark:text-gray-400


hover:text-blue-500


transition


hover:-translate-y-1


"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            className="

text-gray-600

dark:text-gray-400


hover:text-blue-500


transition


hover:-translate-y-1


"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
