import { AosWrapper, HightlightButton, SectionHeading, UnderHightlight } from "../Common/Wrapper";
import { TbSquareRoundedArrowDown, TbSquareRoundedArrowUp } from "react-icons/tb";
import "./project.scss";
import FeaturedProject from "./FeaturedProject"
import OtherProject from "./OtherProject";
import { useRef, useState } from "react";
import feature0 from "../../assets/IMG/ekyc.png"
import feature1 from "../../assets/IMG/rmportal.png"
import feature2 from "../../assets/IMG/iam.png"



const add = [{
  link: { github: "adcbkjadca", website: "csdcuwbjc" },
  name: "EKYC - Open Free Demat Account",
  desc: "Bajaj Broking's efficient Demat Account opening process ensures a smooth, convenient experience, offering access to diverse investment opportunities across various asset classes(2022-2023,Frontend developer).",
  techStack: ["ReactJs", "JS", "HTML", "CSS", "JQuiry"]
},
{
  link: { github: "adcasv", website: "svsvf" },
  name: "COSMOS - RM Portal",
  desc: "A valuable tool for RMs to better serve clients through data-driven insights, designed to empower Relationship Managers (RMs) with crucial company-related information. Provided RMs with insights including:-1.Holding information,2.Engagement metrics,3.Onboarded client counts,4.Reports",
  techStack: ["ReactJs", "JS", "HTML", "CSS", "JQuiry"]
},
{
  link: { github: "adcasv", website: "svsvf" },
  name: "TELECALLER - Ekycadmin",
  desc: "Implemented a system where Telecallers assisted individuals in completing their EKYC process efficiently. This innovation saved time for users and significantly improved their overall experience with EKYC2.0.:1.User-friendly,2.Seamless experience in account opening and updates,3.Onboarded client counts,4.Time-efficient",
  techStack: ["ReactJs", "JS", "HTML", "CSS", "JQuiry"]
},
// {
//   link: { github: "adcasv", website: "svsvf" },
//   name: "OMS - Ekycadmin",
//   desc: "Implemented a system where Telecallers assisted individuals in completing their EKYC process efficiently. This innovation saved time for users and significantly improved their overall experience with EKYC2.0.:1.User-friendly,2.Seamless experience in account opening and updates,3.Onboarded client counts,4.Time-efficient",
//   techStack: ["ReactJs", "JS", "HTML", "CSS", "JQuiry"]
// },
// {
//   link: { github: "adcbkjadca", website: "csdcuwbjc" },
//   name: "EKYC3.0 - Open Free Demat Account",
//   desc: "Bajaj Broking's efficient Demat Account opening process ensures a smooth, convenient experience, offering access to diverse investment opportunities across various asset classes(2022-2023,Frontend developer).",
//   techStack: ["ReactJs", "JS", "HTML", "CSS", "JQuiry"]
// },
// {
//   link: { github: "adcbkjadca", website: "csdcuwbjc" },
//   name: "EKYCHNI - Open Free Demat Account",
//   desc: "Bajaj Broking's efficient Demat Account opening process ensures a smooth, convenient experience, offering access to diverse investment opportunities across various asset classes(2022-2023,Frontend developer).",
//   techStack: ["ReactJs", "JS", "HTML", "CSS", "JQuiry"]
// },
]
const more = [{
  link: { github: "adcasv", website: "svsvf" },
  name: "OMS - Ekycadmin",
  desc: "Implemented a system where Telecallers assisted individuals in completing their EKYC process efficiently. This innovation saved time for users and significantly improved their overall experience with EKYC2.0.:1.User-friendly,2.Seamless experience in account opening and updates,3.Onboarded client counts,4.Time-efficient",
  techStack: ["ReactJs", "JS", "HTML", "CSS", "JQuiry"]
},
{
  link: { github: "adcbkjadca", website: "csdcuwbjc" },
  name: "EKYC3.0 - Open Free Demat Account",
  desc: "Bajaj Broking's efficient Demat Account opening process ensures a smooth, convenient experience, offering access to diverse investment opportunities across various asset classes(2022-2023,Frontend developer).",
  techStack: ["ReactJs", "JS", "HTML", "CSS", "JQuiry"]
},
{
  link: { github: "adcbkjadca", website: "csdcuwbjc" },
  name: "EKYCHNI - Open Free Demat Account",
  desc: "Bajaj Broking's efficient Demat Account opening process ensures a smooth, convenient experience, offering access to diverse investment opportunities across various asset classes(2022-2023,Frontend developer).",
  techStack: ["ReactJs", "JS", "HTML", "CSS", "JQuiry"]
},
]


const featuredProject = [
  {
    projectName: "E-KYC",
    projectDesc: "Worked on the development of an Electronic Know Your Customer (EKYC) onboarding platform, designed to streamline the customer verification process for financial services. The platform aimed to offer a secure, user-friendly experience for customers to complete their KYC requirements online, improving efficiency and compliance with regulatory standards",
    projectSpecList: ["React", "SCSS", "Bootstrap", "Axios"],
    projectURL: "https://ekyc.bajajfinservsecurities.in/",
    align: "right",
    img: feature0
  },
  {
    projectName: "RM Portal",
    projectDesc: "Contributed to the development of a Risk Management Portal, providing tools for risk assessment, tracking, and reporting, The project aimed to address issues faced by clients during onboarding and enable telecallers to provide real-time assistance, thereby improving the overall customer experience and reducing onboarding friction",
    projectSpecList: ["React", "SCSS", "Ant-Design","REST API"],
    projectGitHub: false,
    projectURL: "https://cosmos.bajajfinservsecurities.in/",
    align: "left",
    img: feature1


  },
  {
    projectName: "IAM",
    projectDesc: "Developed and optimized an IAM system for managing user roles, permissions, and authentication with a focus on security and user management",
    projectSpecList: ["Vite", "SCSS", "Recoil"],
    // projectGitHub: "",
    projectURL: "https://iam.bajajfinservsecurities.in/",
    align: "right",
    img: feature2


  }


]


const Project = () => {
  const [show, setShow] = useState(false);
  const scrollRef = useRef(null);
  const showBtnClick = () => {
    setShow(!show);

    setTimeout(() => {
      if (show) {
        scrollRef.current.scrollIntoView();
      }
    }, 10);

  }
  return (
    <section id="project">
      <AosWrapper animation={"fade-up"} anchor={"top top"}>
        <SectionHeading>Some Things I’ve Built</SectionHeading>
        <div className="featured-wrapper">
          <FeaturedProject dataProp={featuredProject[0]} />
          <FeaturedProject dataProp={featuredProject[1]} />
          <FeaturedProject dataProp={featuredProject[2]} />
        </div>
        {false && <div className="other-project">
          <div className="other-head-wrapper">
            <h3 className="other-heading">Other Noteworthy Projects</h3>
            <div>
              <UnderHightlight classToAdd={"other-subheading"} onClick={() => console.log("helo")}>view the archive</UnderHightlight> </div>
          </div>

          <ul className="other-project-list" ref={scrollRef}>
            {
              add.map((item, key) => {
                return <li className="other-project-list-item" key={key}>
                  <AosWrapper animation="fade-up" anchor="bottom-bottom">
                    <OtherProject data={item} />
                  </AosWrapper>
                </li>
              })
            }
            {
              show && more.map((item, key) => {
                return <li className="other-project-list-item" key={key}>
                  <AosWrapper animation="fade-up" anchor="bottom-bottom">
                    <OtherProject data={item} />
                  </AosWrapper>
                </li>
              })
            }
          </ul>
          <div className="btn-wrapper">
            <HightlightButton onClick={showBtnClick}>
              {!show ? <>Show<TbSquareRoundedArrowDown /></> : <>Hide<TbSquareRoundedArrowUp /></>}
            </HightlightButton>
          </div>
        </div>}
      </AosWrapper>
    </section>
  )
}

export default Project