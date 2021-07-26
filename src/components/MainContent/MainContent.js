import React from "react";
import styles from "./MainContent.module.css";
import Header from "../Header/Header";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import {
  checklist_description,
  data_connector_description,
  engineering_description,
  integration_framework_description,
  production_support_description,
  system_monitoring_description,
  workflow_engine_description,
} from "./ProjectDescription/ProjectDescriptionStrings";
import ICE from "../../assets/ice.png";
import TechMahindra from "../../assets/techm.png";

function MainContent() {
  const Company = ({ image, link, height = "2rem", duration }) => {
    return (
      <div className={styles.company_container}>
        <a style={{ flex: 1 }} href={link} target="_blank" rel="noreferrer">
          <img style={{ height }} src={image} alt="Company" />
        </a>
        <span className={styles.duration}>{duration}</span>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.name}>Anshul Bisen</div>
        <div className={styles.title_container}>
          <div className={styles.title}>
            Sr. Software Engineer, 10 years exp.
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <Header value={"Work Experience"} />
        <Company
          image={ICE}
          link="https://www.theice.com/about/mortgage-technology"
          height={"5rem"}
          duration={"6.5 years"}
        />
        <ProjectDescription
          title={"Checklist App"}
          role={"Sr. Software Engineer"}
          description={checklist_description}
          duration={"2 years"}
          technologies={[
            "ReactJS",
            "Redux",
            "CSS",
            "Java",
            "Spring Boot",
            "Redis",
            "Reactor",
            "REST",
            "MySQL",
            "Docker",
            "AWS",
          ]}
        />
        <ProjectDescription
          title={"Data Connector"}
          role={"Sr. Software Engineer"}
          description={data_connector_description}
          duration={"1 year"}
          technologies={[
            "Java",
            "Spring Boot",
            "Project Reactor",
            "Redis",
            "REST",
            "Webhooks",
          ]}
        />
        <ProjectDescription
          title={"System Monitoring App"}
          role={"Sr. Software Engineer"}
          description={system_monitoring_description}
          duration={"1.5 years"}
          technologies={[
            "Java",
            "Spring",
            "AOP",
            "Multithreading",
            "JMS",
            "Apache POI",
            "Cassandra",
            "ElasticSearch",
            "Logstash",
            "Kibana",
          ]}
        />
        <ProjectDescription
          title={"Integration Framework"}
          role={"Software Engineer"}
          description={integration_framework_description}
          duration={"1 year"}
          technologies={[
            "Java",
            "Spring",
            "Hibernate",
            "Apache-Velocity",
            "JAXB",
            "Apache-CXF",
            "REST",
            "MySQL",
            "Intersystems-Cache",
          ]}
        />
        <ProjectDescription
          title={"Workflow Engine"}
          role={"Software Engineer"}
          description={workflow_engine_description}
          duration={"1 year"}
          technologies={[
            "Java",
            "Spring",
            "Hibernate",
            "JAXB",
            "Apache-CXF",
            "REST",
            "SOAP",
            "MySQL",
            "Intersystems-Cache",
          ]}
        />
        <Company
          image={TechMahindra}
          link="https://www.techmahindra.com/en-in/"
          duration={"3.5 years"}
        />
        <ProjectDescription
          title={"AT&T Production Support"}
          role={"Software Engineer"}
          description={production_support_description}
          technologies={[
            "Shell Scripts",
            "Oracle SQL",
            "AT&T Ticketing Tool",
            "SLA",
          ]}
        />
        <Header value={"Education"} />
        <ProjectDescription
          title={"G. H. Raisoni College of Engineering"}
          description={engineering_description}
          duration={"4 years"}
        />
      </div>
    </div>
  );
}

export default MainContent;
