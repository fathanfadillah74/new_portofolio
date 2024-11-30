import "../assets/style/skills.css";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { data } from "../assets/data/dataSkills";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [modalPosition, setModalPosition] = useState({});
  const containerRef = useRef(null);
  const itemRef = useRef(null);

  const handleSkillClick = (skill, e) => {
    const rect = e.target.getBoundingClientRect();
    setModalPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height,
    });
    setSelectedSkill(skill);
  };

  const handleCloseModal = () => {
    setSelectedSkill(null);
  };

  useEffect(() => {
    if (selectedSkill) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedSkill]);

  return (
    <>
      <motion.section
        id="skill"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <motion.div>
          <div className="section-text">
            <h1>My Skills</h1>
          </div>
        </motion.div>
        <div className="container-skills" ref={containerRef}>
          {data.map((skill) => (
            <motion.div
              className="list-skill"
              key={skill.id}
              whileHover={{ scale: 1.05 }}
              onClick={(e) => handleSkillClick(skill, e)}
              ref={itemRef}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <div className="name-skill">
                <img src={skill.image} alt={skill.name} />
                <div className="title">
                  {skill.name}
                  {skill.longName && <span> ({skill.longName})</span>}
                </div>
              </div>
              <div className="description">{skill.description}</div>
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedSkill && (
              <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={handleCloseModal}
              >
                <motion.div
                  className="modal-content"
                  initial={{
                    scale: 0.8,
                    top: modalPosition.top,
                    left: modalPosition.left,
                    width: modalPosition.width,
                    height: modalPosition.height,
                  }}
                  animate={{
                    scale: 1,
                    top: "50%",
                    left: "50%",
                    width: "80%",
                    height: "auto",
                    x: "-50%",
                    y: "-50%",
                  }}
                  exit={{
                    scale: 0.8,
                    top: modalPosition.top,
                    left: modalPosition.left,
                    width: modalPosition.width,
                    height: modalPosition.height,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-header">
                    <img src={selectedSkill.image} alt={selectedSkill.name} />
                  </div>
                  <div className="modal-body">
                    <h2>
                      {selectedSkill.name}
                      {selectedSkill.longName && (
                        <span> ({selectedSkill.longName})</span>
                      )}{" "}
                    </h2>
                    <p>{selectedSkill.explaination}</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </>
  );
}

export default Skills;
