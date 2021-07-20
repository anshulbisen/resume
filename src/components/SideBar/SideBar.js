import React from "react";
import styles from "./SideBar.module.css";
import profile_pic from "../../assets/pic.png";
import Header from "../Header/Header";
import IconItem from "./IconItem/IconItem";
import { FaDatabase, FaPhoneAlt, FaServer } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { GoBrowser } from "react-icons/go";
import Skill from "./Skill/Skill";

function SideBar() {
  return (
    <div className={styles.container}>
      <img className={styles.profile_pic} src={profile_pic} alt="" />
      <div className={styles.contact_container}>
        <Header white value={"contact"} />
        <IconItem icon={<FaPhoneAlt />} text={"+91 9890343232"} />
        <IconItem icon={<MdEmail />} text={"anshulbisen@gmail.com"} />
        <IconItem
          icon={<AiFillLinkedin />}
          text={"/in/anshulbisen"}
          link={"https://www.linkedin.com/in/anshulbisen"}
        />
      </div>
      <div className={styles.skills_container}>
        <Header white value={"Skills"} />
        <Skill
          icon={<GoBrowser />}
          title={"Front-End"}
          skills={["ReactJS", "Redux", "JavaScript", "HTML", "CSS"]}
        />
        <Skill
          icon={<FaServer />}
          title={"Back-End"}
          skills={[
            "Java",
            "Spring",
            "AOP",
            "Spring Boot",
            "Project Reactor",
            "Hibernate",
            "REST",
            "JMS",
          ]}
        />
        <Skill
          icon={<FaDatabase />}
          title={"Database"}
          skills={[
            "MySQL",
            "Cassandra",
            "ElasticSearch",
            "Redis",
            "Intersystems-Cache",
          ]}
        />
        <Skill
          icon={<ImBooks />}
          title={"Others"}
          noWrap={true}
          skills={["Docker", "AWS", "Maven", "Ant", "React Native", "PWA"]}
        />
      </div>

      {/*<div className={styles.hobby_container}>
        <Header white value={"Hobbies"} />
        <div className={styles.hobby_icons}>
          <span className={styles.icon}>
            <CgGym />
          </span>
          <span className={styles.icon}>
            <GiPingPongBat />
          </span>
          <span className={styles.icon}>
            <RiFootballLine />
          </span>
          <span className={styles.icon}>
            <IoLogoGameControllerB />
          </span>
        </div>
      </div>*/}
    </div>
  );
}

export default SideBar;
