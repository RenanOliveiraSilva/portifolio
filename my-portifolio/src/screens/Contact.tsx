import ContactForm from "../components/Form";
import Tooltip from "../components/Tooltip";

export default function Contact() {
  return (
    <section className="bg-patternMobile bg-cover bg-no-repeat bg-center md:bg-contacts text-white min-h-screen w-4xl flex flex-col justify-center items-center p-4 md:p-16 mt-10">
      <div className="title flex flex-col items-center justify-center px-5 py-1 mb-4">
        <p className="font-inconsolata text-regular md:text-2xl text-customPurple font-light">Contato</p>
        <p className="font-inconsolata text-xl md:text-4xl font-bold">Fale comigo</p>
        <p className="font-inconsolata text-regular md:text-2xl text-customPurple font-light text-center">
          Entre em contato ou acompanhe minhas redes sociais!
        </p>
      </div>
      <div className="flex flex-row items-center justify-center mb-4 gap-4 ">
        <Tooltip title="Github" color="bg-customGray"/>
        <Tooltip title="LinkedIn" color="bg-customBlue"/>
        <Tooltip title="Gmail" color="bg-customRed"/>

      </div>
      <div className="form mt-3 w-full">
          <ContactForm />

      </div>
        
    
    </section>
  );
}
