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
        <Header value={"Professional Experience"} />
        <img className={styles.ice_logo} src={ICE} alt="" />
        <ProjectDescription
          title={"Checklist App"}
          description={checklist_description}
          duration={"2 years"}
          technologies={[
            "Java",
            "Spring Boot",
            "ReactJS",
            "HTML",
            "CSS",
            "Redis",
            "Reactor",
            "Kafka",
            "REST",
            "Webhooks",
          ]}
        />
        <ProjectDescription
          title={"Data Connector"}
          description={data_connector_description}
          duration={"8 months"}
          technologies={[
            "Java",
            "Spring Boot",
            "ReactJS",
            "JavaScript",
            "HTML",
            "CSS",
            "Redis",
            "Reactor",
            "Kafka",
            "REST",
            "Webhooks",
          ]}
        />
        <ProjectDescription
          title={"System Monitoring App"}
          description={system_monitoring_description}
          duration={"1.5 years"}
          technologies={[
            "Java",
            "Spring",
            "AOP",
            "ElasticSearch",
            "Logstash",
            "Filebeat",
            "Kibana",
          ]}
        />
        <ProjectDescription
          title={"Integration Framework"}
          description={integration_framework_description}
          duration={"1 year"}
          technologies={[
            "Java",
            "Spring",
            "AOP",
            "ElasticSearch",
            "Logstash",
            "Filebeat",
            "Kibana",
          ]}
        />
        <ProjectDescription
          title={"Workflow Engine"}
          description={workflow_engine_description}
          duration={"1 year"}
          technologies={[
            "Java",
            "Spring",
            "AOP",
            "ElasticSearch",
            "Logstash",
            "Filebeat",
            "Kibana",
          ]}
        />
        <img className={styles.techm_logo} src={TechMahindra} alt="" />
        <ProjectDescription
          title={"Production Support and Maintenance"}
          description={production_support_description}
          duration={"3.5 years"}
          technologies={[
            "Java",
            "Spring",
            "AOP",
            "ElasticSearch",
            "Logstash",
            "Filebeat",
            "Kibana",
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
