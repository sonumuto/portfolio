'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaDocker, FaAws, FaJenkins, FaPython, FaLinux, FaGitlab } from "react-icons/fa";
import { SiAnsible, SiSelenium, SiFastapi, SiMongodb, SiAppium, SiRabbitmq } from "react-icons/si";
import { GiSecurityGate } from "react-icons/gi";
import TerminalSection from "@/components/terminal-section";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
} as const;

const tools = [
  { name: "Docker", icon: FaDocker, color: "text-blue-400" },
  { name: "AWS", icon: FaAws, color: "text-yellow-500" },
  { name: "Linux", icon: FaLinux, color: "text-black dark:text-white" },
  { name: "Python", icon: FaPython, color: "text-blue-500" },
  { name: "Jenkins", icon: FaJenkins, color: "text-red-400" },
  { name: "GitLab", icon: FaGitlab, color: "text-orange-500" },
  { name: "Ansible", icon: SiAnsible, color: "text-red-500" },
  { name: "DevSecOps", icon: GiSecurityGate, color: "text-green-600" },
  { name: "FastAPI", icon: SiFastapi, color: "text-teal-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "RabbitMQ", icon: SiRabbitmq, color: "text-orange-400" },
  { name: "Selenium", icon: SiSelenium, color: "text-green-500" },
  { name: "Appium", icon: SiAppium, color: "text-purple-500" }
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center p-5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-48 h-48 mb-8 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400"
        >
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={192}
            height={192}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Umut Yigitoglu
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mb-8"
        >
          Software Engineer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex space-x-4 mb-12"
        >
          <a
            href="http://github.com/sonumuto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/umut-yigitoglu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-2xl mx-auto mb-12"
        >
          <TerminalSection />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            About Me
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
          >
            I&apos;m Umut Yigitoglu, a Software Engineer with a background in test automation, DevSecOps and backend development. I thrive at the intersection of software, infrastructure, and process improvement. I build tools, solve real problems, and make things work reliably. I have hands-on experience with Python, Docker, CI/CD pipelines, DevSecOps, and cloud fundamentals, and I am AWS Certified.
            <br />
            <br />
            Curiosity drives my career. I started out in test automation, moved into DevOps, and I am always pushing my boundaries, whether it is learning a new tech stack, mentoring team members, or tackling unfamiliar problems head-on. I am not afraid to admit what I do not know, but I am relentless in figuring things out.
            <br />
            <br />
            Outside of work, you will find me exploring new cities, experimenting with music production, or reading up on science and tech. I believe in continuous growth, sharing what I learn, and building solutions that matter.
          </motion.p>
          
          <motion.div
            {...fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center mt-12"
          >
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transform hover:scale-105 transition-transform"
              >
                <tool.icon className={`text-4xl mx-auto mb-4 ${tool.color}`} />
                <p className="font-semibold text-gray-900 dark:text-white">{tool.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "DevSecOps Pipeline Implementation",
                description: "Developed and maintained DevSecOps pipelines using GitLab, BlackDuck, Jenkins, Ansible, and AWS.",
                tech: ["GitLab", "SAST", "DAST", "SCA", "Jenkins", "Ansible", "AWS"],
              },
              {
                title: "Tool Development",
                description: "Developed internal tools to automate tasks and improve efficiency.",
                tech: ["Python", "SQL", "FastAPI", "Docker", "Linux", "RabbitMQ"],
              },
              {
                title: "Full-Stack Test Automation Framework",
                description: "Built a comprehensive testing framework covering web UI (Selenium), mobile (Appium), and API testing, achieving 80% test coverage",
                tech: ["Python", "Selenium", "Appium", "Pytest"],
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
          >
            I&apos;m always happy to connect with others.
            Please feel free to connect with me on LinkedIn!
          </motion.p>
          <motion.a
            {...fadeInUp}
            href="https://www.linkedin.com/in/umut-yigitoglu/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Connect
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
        <p>Umut Yigitoglu {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
