import "./job.scss"
import { AosWrapper, SectionHeading, UnderHightlight } from "../Common/Wrapper"
import { useState } from "react";


const Job = () => {

  const CompanyInfoList = {
    "Bridgelabz": {
      role: "Front end devloper",
      duration: "Jan 2021 - Dec 2021",
      workedOn: [
        "Core Concepts: Demonstrate a solid understanding of React's fundamental concepts, including JSX, components, state, props, and hooks (useState, useEffect, useReducer, etc.).",
        "Component-Based Architecture: Highlight your ability to break down complex UIs into reusable components, optimizing performance and maintainability.",
        "State Management: Showcase experience in managing complex state using techniques like Redux or Context API.",
        "Real-World Applications: Discuss specific projects where you applied your React skills to build functional web applications.",
        "Problem-Solving: Highlight your ability to troubleshoot issues, debug code, and implement solutions efficiently.",
        "Collaboration: Emphasize teamwork and communication skills, especially if you worked in a team environment.",
        "Fetching and Consuming Data: Demonstrate experience in fetching data from APIs using techniques like fetch or axios.",
        "Data Manipulation: Highlight your ability to process and transform data to suit the needs of your application.",
        "Error Handling: Discuss strategies for handling potential errors during data fetching and processing."
      ]

    },
    "Bajaj Broking": {
      role: "Front end devloper",
      duration: "March 2022 - Present",
      workedOn: [
        "EKYC - Open Free Demat Account:Bajaj Broking's efficient Demat Account opening process ensures a smooth, convenient experience, offering access to diverse investment opportunities across various asset classes(2022-2023,Frontend developer).",
        "COSMOS - RM Portal:A valuable tool for RMs to better serve clients through data-driven insights, designed to empower Relationship Managers (RMs) with crucial company-related information. Provided RMs with insights including:-1.Holding information,2.Engagement metrics,3.Onboarded client counts,4.Reports",
        "TELECALLER - Ekycadmin:Implemented a system where Telecallers assisted individuals in completing their EKYC process efficiently. This innovation saved time for users and significantly improved their overall experience with EKYC2.0.:1.User-friendly,2.Seamless experience in account opening and updates,3.Onboarded client counts,4.Time-efficient",
        "OMS - Ekycadmin:Implemented a system where Telecallers assisted individuals in completing their EKYC process efficiently. This innovation saved time for users and significantly improved their overall experience with EKYC2.0.:1.User-friendly,2.Seamless experience in account opening and updates,3.Onboarded client counts,4.Time-efficient",
        "EKYCHNI - Open Free Demat Account:Bajaj Broking's efficient Demat Account opening process ensures a smooth, convenient experience, offering access to diverse investment opportunities across various asset classes(2022-2023,Frontend developer).",
        "EKYC3.0 - Open Free Demat Account:Bajaj Broking's efficient Demat Account opening process ensures a smooth, convenient experience, offering access to diverse investment opportunities across various asset classes(2022-2023,Frontend developer).",
        "IAM:Developed and optimized an IAM system for managing user roles, permissions, and authentication with a focus on security and user management",
      ]

    },
    // "random": {
    //   role: "Front end devloper",
    //   duration: "May 2022 - may 1998",
    //   workedOn: [
    //     "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",]
    // },
    // "sdcs": {
    //   role: "Front end devloper",
    //   duration: "May 2022 - present",
    //   workedOn: [
    //     "Developed and styled interactive web applications for Apple Music using Ember and SCSSv",
    //     "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",
    //     "Architected and implemented the user interface of Apple Music's embeddable web pla"
    //   ]

    // },
    // "dfsd": {
    //   role: "Front end devloper",
    //   duration: "May 2022 - feb 2093",
    //   workedOn: [
    //     "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and morev",
    //     "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
    //     "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
    //     "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship"
    //   ]

    // },
    // "wrger": {
    //   role: "Front end devloper",
    //   duration: "May 2022 - may 1998",
    //   workedOn: [
    //     "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",]
    // }, "sdsd": {
    //   role: "Front end devloper",
    //   duration: "May 2022 - present",
    //   workedOn: [
    //     "Developed and styled interactive web applications for Apple Music using Ember and SCSSv",
    //     "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",
    //     "Architected and implemented the user interface of Apple Music's embeddable web pla"
    //   ]

    // },
    // "wefwaefc": {
    //   role: "Front end devloper",
    //   duration: "",
    //   workedOn: [
    //     "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and morev",
    //     "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
    //     "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
    //     "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship"
    //   ]

    // },
    // "aeve": {
    //   role: "Front end devloper",
    //   duration: "May 2022 - may 1998",
    //   workedOn: [
    //     "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",]
    // }
  }
  const [CompanyInfo, setCompanyInfo] = useState(Object.keys(CompanyInfoList)[0]);
  const companyUpdate = (element) => {
    setCompanyInfo("")

    setTimeout(() => {
      setCompanyInfo(element)

    }, 200);
  }
  const CompanyNavigate = (url) => {
    window.open(url, '_blank');
  }
  return (
    <section id="job">
      <AosWrapper animation={"fade-up"} anchor={"top top"}>
        <SectionHeading>Where I’ve Worked</SectionHeading>

        <div className="company">
          <ul className="company-list">
            {Object.keys(CompanyInfoList)?.map((companyName, index) => {
              return <li key={index} className={`${CompanyInfo === companyName ? "active" : ""}`} onClick={() => companyUpdate(companyName)}> {companyName}</li>
            })}
          </ul>
          <div className="company-para">
            <h3 className="company-heading">
              <div className="role">{CompanyInfoList?.[CompanyInfo]?.role}</div>
              {CompanyInfo && <span className="company-name highlight-text">@<UnderHightlight onClick={() => console.log("helo")}>{CompanyInfo}</UnderHightlight></span>}

            </h3>
            <div className="duration">
              {CompanyInfoList?.[CompanyInfo]?.duration}
            </div>
            <ul className="company-info styled-list">
              {
                CompanyInfoList?.[CompanyInfo]?.workedOn.map((description, key) =>
                  <AosWrapper animation="fade-up" delay={(key + 1) * 100} type="list" key={key} >
                    {description}
                  </AosWrapper>
                )
              }
            </ul>
          </div>
        </div>
      </AosWrapper>
    </section>
  )
}

export default Job