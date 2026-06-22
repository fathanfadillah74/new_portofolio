import "../assets/style/project.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, projectsData } from "../assets/data/dataProject";


const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeFilter === "All"
        ? projectsData
        : projectsData.filter(project => project.category === activeFilter);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

    // SVG Icons
    const GithubIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
    );

    const ExternalIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
    );

    const CloseIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );

    return (
        <motion.section
            id="projects"
            className="projects-section"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
        >
            <div className="section-text-project">
                <h1>Recent Projects</h1>
            </div>

            {/* Filter tabs */}
            <div className="filter-container">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-btn ${activeFilter === category ? "active" : ""}`}
                        onClick={() => setActiveFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Card Grid with layout animation */}
            <motion.div className="projects-grid" layout>
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map(project => (
                        <motion.div
                            layout
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-img-wrapper">
                                <img src={project.image} alt={project.title} />
                            </div>

                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.slice(0, 3).map((tag, idx) => (
                                        <span key={idx} className="tag">{tag}</span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="tag">+{project.tags.length - 3} more</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Popup Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="project-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="project-modal-content"
                            initial={{ opacity: 0, scale: 0.9, y: "-40%", x: "-50%" }}
                            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
                            exit={{ opacity: 0, scale: 0.9, y: "-40%", x: "-50%" }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
                                <CloseIcon />
                            </button>

                            <div className="modal-inner">
                                <div className="modal-left">
                                    <div className="modal-img-container">
                                        <img src={selectedProject.image} alt={selectedProject.title} />
                                    </div>
                                </div>

                                <div className="modal-right">
                                    <h2>{selectedProject.title}</h2>
                                    <span className="modal-category">{selectedProject.category} Project</span>
                                    <p className="modal-description">{selectedProject.description}</p>

                                    <div className="modal-tags-container">
                                        <h4>Technologies Used:</h4>
                                        <div className="modal-tags">
                                            {selectedProject.tags.map((tag, idx) => (
                                                <span key={idx} className="modal-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="modal-actions">
                                        {selectedProject.github && (
                                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-btn github-btn">
                                                <GithubIcon />
                                                <span>GitHub Repository</span>
                                            </a>
                                        )}
                                        {selectedProject.demo && (
                                            <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="modal-btn demo-btn">
                                                <ExternalIcon />
                                                <span>{selectedProject.category === "UI/UX" ? "View Design Link" : "Live Demo"}</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default Projects;
