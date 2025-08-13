import { Briefcase, Code, User, Github, Linkedin, Instagram, Mail, Phone} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/nk-1234678',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/neelam-kumari-88938b331/',
    },
    {
      icon: <Instagram size={20} />,
      href: 'https://instagram.com/_nilu_thakur008',
    },
     {
      icon: <Mail size={20} />,
      href: 'https://instagram.com/yourusername',
    },
     {
      icon: <Phone size={20} />,
      href: 'https://instagram.com/yourusername',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* === Text Section - Slides from Right === */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 1100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>

            <p className="text-muted-foreground text-left">
              I’m a 5th-semester B.Tech student specializing in web development and graphic design. 
              I build responsive, accessible, and visually engaging web applications using modern technologies 
              like React, Tailwind CSS, and JavaScript
            </p>

            <p className="text-muted-foreground text-left">
              I enjoy solving complex problems with elegant solutions and continuously
              learning new skills to stay ahead in the tech landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <a
                href="/projects/Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>

            <div className="flex flex-row gap-4 pt-4">
              {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                className="w-9 h-9 bg-white rounded-full flex justify-center items-center"
                whileHover={{ y: -6 }} // jump up
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-gray-700 transition"
                >
                  {link.icon}
                </a>
              </motion.div>
              ))}
            </div>
          </motion.div>

          {/* === Cards Section - Slides from Left === */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: -1100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">App Development</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
