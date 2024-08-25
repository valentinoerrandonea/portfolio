"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "",
    image: "/images/projects/blue.jpg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Software Projects",
    description: "",
    image: "/images/projects/red.jpg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Web3 Projects",
    description: "",
    image: "/images/projects/verdelima.jpg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "AI Developments",
    description: "",
    image: "/images/projects/celeste.jpg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "IoT Developments",
    description: "",
    image: "/images/projects/pink.jpg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Process Optimization",
    description: "",
    image: "/images/projects/orange.jpg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
