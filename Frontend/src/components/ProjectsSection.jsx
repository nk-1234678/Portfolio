import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "ArtisanConnect",
    description:
      "ArtisanConnect is a platform that empowers local artisans by connecting them with tourists, offering authentic cultural experiences and promoting handmade products. It serves as a digital bridge for tourists seeking immersive journeys and for artisans looking to showcase their skills and earn livelihoods.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "https://github.com/nk-1234678/Startup_Website",
  },
  {
    id: 2,
    title: "Deep pexel",
    description:
      "DeepTruth is an advanced AI-based platform designed to detect and combat deepfake media, GAN-generated content, and misinformation. Built using FastAPI or Flask, it empowers users, educators, journalists, and organizations to verify digital content and ensure authenticity across various formats.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Notes Website",
    description:
      "SmartNotes is a modern, full-stack MERN-based notes dashboard built for seamless personal knowledge management. Designed for productivity and ease of use, it offers a rich note-taking experience with powerful organizational and analytical features.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "https://github.com/nk-1234678/PersonalNotes_Website",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-primary"> Projects </span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </motion.p>

        <div className="flex flex-col gap-28">
          {projects.map((project, key) => (
            <motion.div
              key={key}
              className={`rounded-lg justify-between flex md:flex-row flex-col  ${
                key % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: key * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Text Section */}
              <motion.div
                className="md:pl-3  md:pt-2 rounded-lg md:w-full md:h-68  flex flex-col gap-3"
                initial={{ x: key % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: key * 0.2 + 0.2 }}
                viewport={{ once: true }}
              >
                <h1
                  className={`font-bold text-2xl ${
                    key % 2 === 0 ? "text-left" : "text-right"
                  }`}
                >
                  {project.title}
                </h1>

                <div
                  className={`flex gap-2 mb-4 ${
                    key % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  className={`
                    bg-description-box-bg backdrop-blur-md rounded-lg p-4 text-white 
                    md:w-150 z-20 shadow-lg
                    ${key % 2 === 0 ? "-mr-10 self-end" : "-ml-10"}
                  `}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <p className="text-left">{project.description}</p>
                </motion.div>

                <div
                  className={`pt-2 rounded-lg h-10 w-full flex gap-3 ${
                    key % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                className="h-68 md:w-[70%] w-[90%] bg-purple-950 relative z-0"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: key * 0.2 + 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`h-[95%] w-[97%] mt-3 ${
                    key % 2 === 0 ? "ml-3" : "mr-3"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/nk-1234678"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Check My Github <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
