import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { SiGmail } from "react-icons/si";

import ContactForm from "../components/Form";
import Tooltip from "../components/Tooltip";

export default function Contact() {
  return (
    <section className="bg-patternMobile bg-cover bg-no-repeat bg-center md:bg-contacts text-white min-h-screen flex flex-col justify-center items-center p-4 md:p-16 mt-10">
      <div className="title flex flex-col items-center justify-center px-5 py-1 mb-6">
        <p className="font-inconsolata text-lg md:text-2xl text-customPurple font-light">
          Contato
        </p>
        <p className="font-inconsolata text-2xl md:text-4xl font-bold">
          Fale comigo
        </p>
        <p className="font-inconsolata text-md md:text-xl text-customPurple font-light text-center">
          Entre em contato ou acompanhe minhas redes sociais!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center mb-6 gap-6">
        <Tooltip title="Github" color="bg-customGray" url={"https://github.com/RenanOliveiraSilva?tab=repositories"} Icon={FaGithub}/>
        <Tooltip title="LinkedIn" color="bg-customBlue" url={"https://www.linkedin.com/in/renan-de-oliveira-silva-416721289"}  Icon={FaLinkedin}/>
        <Tooltip title="Workana" color="bg-customYellow" url={"https://www.workana.com/freelancer/d176ed9c8cf62c6dfb5623fb6ee22e4e"}  Icon={MdWork}/>
        <Tooltip title="Gmail" color="bg-customRed" url={"https://mail.google.com/mail/?view=cm&fs=1&to=renandeoliveirasilva123@gmail.com"}  Icon={SiGmail}/>
      </div>

      <div className="form mt-6 w-full max-w-2xl">
        <ContactForm />
      </div>
    </section>
  );
}
