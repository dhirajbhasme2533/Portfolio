import {
  X,
  Dribbble,
  GithubIcon,
  Linkedin,
  MailIcon,
  PhoneCall,
  PhoneIcon,
} from "lucide-react";
import CircleAnimation from "./components/animation/CircleAnimation";
import Header from "./components/Header";
import ProjectContainer from "./components/ProjectContainer";
import SkillContainer from "./components/SkillContainer";
import Footer from "./components/Footer";
import AHRSImg from "./assets/projects/ahrs.png";
import construction from "./assets/projects/construction.png";
import plantifyImg from "./assets/projects/plantify.png";
import ContactForm from "./components/ContactForm";
import logo from "./assets/logo.svg";
import { useState } from "react";
import Modal from "./components/Modal";
import BlurIn from "./components/animation/BlurIn";
import { TextFade } from "./components/animation/TextFade";
import { Analytics } from "@vercel/analytics/react";
import cardbg from "./assets/experience-card.png";
import TagContainer from "./components/TagContainer";
import behance from './assets/behance.svg'

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="relative font-youngserif w-full h-full">
      {/* modal */}
      <Modal showModal={showModal}>
        <div className="relative  lg:w-[70%]  lg:h-[70%] bg-white rounded-xl flex flex-col items-center px-10 py-20 md:p-16 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div>
            <X
              size={30}
              onClick={handleShowModal}
              className="absolute text-black right-20 top-20 rounded-full bg-gray-300"
            />
          </div>
          <div className="text-dp text-xl m-10">Past Experince</div>
          <div
            className="flex flex-col items-start justify-center w-fit h-fit bg-cover bg-center rounded-2xl shadow-lg p-12 gap-10"
            style={{ backgroundImage: `url(${cardbg})` }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-5 md:gap-28">
              <img src={logo} alt="" />
              <div className="text-sm">Dec 24 - Present</div>
            </div>
            <div className="text-2xl md:text-3xl text-start">
              UI/UX Designer
            </div>
            <div className="text-xs px-5 py-2 bg-white text-dp rounded-full">
              Intern
            </div>
          </div>
        </div>
      </Modal>

      <Header />
      <CircleAnimation />

      {/* hero section */}
      <div className="text-4xl md:text-5xl relative w-full h-screen z-10 flex flex-col justify-center items-center text-white lg:text-6xl">
        <div className="w-[60%] md:w-[40%] lg:w-[30%] text-center leading-snug">
          <BlurIn>Crafting Digital Experiences</BlurIn>
        </div>
        <div className="absolute text-base bottom-20">Swipe down</div>
      </div>

      {/* section container */}
      <div className="px-10 lg:px-20 text-white">
        {/* intro section */}
        <TextFade className="w-full h-full flex flex-col justify-center items-center gap-8 lg:gap-14 lg:mt-40 lg:mb-44 text-cente mt-10 mb-32 lg:px-32">
          <div className="text-2xl md:text-3xl lg:text-4xl text-dp">
            Hello 👋🏻
          </div>
          <div className="text-4xl md:text-5xl lg:text-6xl text-center w-full leading-snug">
            I'm User Interface Designer,
            <br />
            who Crafting Digital Experiences
          </div>
          <div className="text-lg lg:text-2xl text-center text-pgray leading-snug w-full">
            <span className="text-dp">Dhiraj Bhasme, UI/UX Designer</span>|
            Crafting User-Centric Solutions Let me know if you have any other
            questions or require further assistance.
          </div>
        </TextFade>

        {/* teachnologies */}
        <div className="my-32 lg:my-44 text-center space-y-10 lg:space-y-20">
          <div className="text-xl md:text-3xl lg:text-4xl">
            <div>My Design Arsenal</div>
          </div>

          <div className="space-y-5 lg:space-y-10">
            <TextFade className="w-full flex justify-center items-center gap-2 md:gap-5 lg:gap-10">
              <SkillContainer text="UI Design" />
              <SkillContainer text="Wireframing / Protyping" />
              <SkillContainer text="Design System" />
            </TextFade>
            <TextFade className="w-full flex justify-center items-center gap-2 md:gap-5 lg:gap-10">
              <SkillContainer text="Web Design" />
              <SkillContainer text="Content Design" />
              <div className="block md:hidden">
                <SkillContainer text="Accessibilty Design" />
              </div>
            </TextFade>
            <TextFade className="w-full flex justify-center items-center gap-2 md:gap-5 lg:gap-10">
              <SkillContainer text="Brand and styleguides" />
              <SkillContainer text="Interaction design" />
              <div className="hidden md:block">
                <SkillContainer text="Accessibilty Design" />
              </div>
            </TextFade>
          </div>
        </div>

        {/* Projects */}
        <div className="my-32 lg:my-44 text-center space-y-12 md:space-y-24 lg:space-y-40">
          <TextFade className="flex flex-col items-center gap-3 lg:gap-5 z-10">
            <div className="text-base md:text-xl lg:text-2xl font-serif text-dp">
              Projects
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl">
              A Glimpse into My Portfolio
            </div>
          </TextFade>

          <ProjectContainer
            ascent={"#e6f7e8"}
            src={AHRSImg}
            title={"Automated HR Recruitment System"}
            description={
              "A Revolutionize your hiring process, in the Era of Ai."
            }
            tags={["User Research", "Wireframing", "Prototype"]}
            site={"https://www.behance.net/gallery/213455333/AHRS-Revolutionizing-Recruitment-with-AI-Driven-Design"}
          />
          <ProjectContainer
            ascent={"#f0e6d5"}
            src={construction}
            title={"Construction Monitoring System"}
            description={"A platform enabling real-time construction progress"}
            tags={["User Interface", "Wireframing"]}
            alternate={true}
            site={"https://www.behance.net/gallery/212746439/Construction-Monitoring-System"}
          />
          <ProjectContainer
            ascent={"#e6f7e8"}
            src={plantifyImg}
            title={"Plantify"}
            description={"Online Marketplace for plants and Gradening accessories."}
            tags={["User Research", "Wireframing", "Prototype"]}
            site={"https://www.behance.net/gallery/207497449/Plantify-Online-Platform-for-the-plant-lovers"}
          />
        </div>

        {/* Experince */}
        <div className="my-32 lg:my-44 w-full text-center space-y-12 lg:space-y-20 flex-col flex items-center">
          <TextFade className="flex flex-col items-center gap-3 lg:gap-5 z-10">
            <div className="text-base md:text-xl lg:text-2xl font-serif text-dp">
              Experience
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl">
              Organizations I&#39;m currently working with
            </div>
          </TextFade>

          <div className="space-y-8">
            <div
              className="flex flex-col items-start justify-center w-fit h-fit bg-cover bg-center rounded-2xl shadow-lg p-12 gap-10"
              style={{ backgroundImage: `url(${cardbg})` }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-5 md:gap-28">
                <img src={logo} alt="" />
                <div className="text-sm">Dec 24 - Present</div>
              </div>
              <div className="text-2xl md:text-3xl text-start">
                UI/UX Designer
              </div>
              <div className="text-xs px-5 py-2 bg-white text-dp rounded-full">
                Intern
              </div>
            </div>

            <button
              onClick={handleShowModal}
              className="text-dp underline underline-offset-2"
            >
              view past experience
            </button>
          </div>
        </div>

        {/* Contact form */}
        <div className="flex gap-20 lg:gap-0 flex-col lg:flex-row w-full justify-center md:justify-between items-center my-20 lg:my-24">
          <TextFade className="text-center lg:text-start lg:w-[50%] flex flex-col justify-center gap-14 h-full">
            <div className="text-dp font-serif text-2xl">
              Ready to Elevate Your Brand?
            </div>
            <div className="text-white text-5xl">
              Let's Build Your <br /> Next Big Project Together.
            </div>
            <div className="flex gap-5 w-full justify-center lg:justify-start text-dp">
              <a href="tel:+919404308959" target="_blank">
                <PhoneIcon size={25} />
              </a>
              <a href="mailto:dhirajbhasmeuiux@gmail.com" target="_blank">
                <MailIcon size={25} />
              </a>
              <a href="https://dribbble.com/Dhiraj_UIX" target="_blank">
                <Dribbble size={25} />
              </a>
              <a href="https://www.behance.net/dhirajbhasme4" target="_blank">
                <img src={behance} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhiraj-bhasme-68963821a/"
                target="_blank"
              >
                <Linkedin size={25} />
              </a>
            </div>
          </TextFade>

          <div className="relative w-full md:w-[80%] lg:w-[50%] h-full">
            <div className="absolute w-full h-full opacity-30 bg-gradient-to-r from-[#43ff9a] via-[#43b0ff] to-[#eaff6f] blur-[100.10px]"></div>
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
