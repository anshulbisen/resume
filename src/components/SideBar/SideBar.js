import React from "react";
import styles from "./SideBar.module.css";
import profile_pic from "../../assets/pic.png";
import Header from "../Header/Header";
import IconItem from "./IconItem/IconItem";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import WebIcon from "@material-ui/icons/Web";
import StorageIcon from "@material-ui/icons/Storage";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import DatabaseIcon from "../../assets/database.svg";
import Skill from "./Skill/Skill";

function SideBar() {
  return (
    <div className={styles.container}>
      <img className={styles.profile_pic} src={profile_pic} alt="" />
      <div className={styles.contact_container}>
        <Header white value={"contact"} />
        <IconItem icon={<PhoneIcon />} text={"+91 9890343232"} />
        <IconItem icon={<EmailIcon />} text={"anshulbisen@gmail.com"} />
        <IconItem
          icon={<LinkedInIcon />}
          text={"www.linkedin.com/in/anshulbisen"}
        />
      </div>
      <div className={styles.skills_container}>
        <Header white value={"Skills"} />
        <Skill
          icon={<WebIcon fontSize={"large"} />}
          title={"Front-End"}
          skills={["ReactJS", "Redux", "JavaScript", "HTML/CSS"]}
        />
        <Skill
          icon={<StorageIcon fontSize={"large"} />}
          title={"Back-End"}
          skills={[
            "Java",
            "Spring-Core",
            "Spring Boot",
            "Spring-Reactor",
            "Hibernate",
            "REST",
          ]}
        />
        <Skill
          icon={<img className={styles.icon} src={DatabaseIcon} alt="" />}
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
          icon={<MenuBookIcon fontSize={"large"} />}
          title={"Basic Knowledge"}
          noWrap={true}
          skills={["Docker", "AWS", "Maven", "Ant"]}
        />
      </div>
    </div>
  );
}

export default SideBar;
