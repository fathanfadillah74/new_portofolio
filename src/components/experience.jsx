import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "../assets/data/dataExperience";
import { motion } from "framer-motion";
import "../assets/style/experience.css";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <>
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <motion.div>
          <div className="section-text-experience">
            <h1>Experience & Education</h1>
          </div>
        </motion.div>
        <div className="container-experience">
          <VerticalTimeline>
            {data.map((experience, index) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={experience.year}
                dateClassName="date-experience"
                iconStyle={{ background: "rgb(110 192 253)", color: "#black" }}
                key={index}
              >
                <div className="head-description">
                  <img src={experience.image} alt="" />
                  <span className="vertical-timeline-element-title">
                    {experience.name}
                  </span>
                </div>
                <p>{experience.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </motion.section>
    </>
  );
};

export default Experience;
