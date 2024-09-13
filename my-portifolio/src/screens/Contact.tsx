import ContactForm from "../components/Form";

export default function Contact() {
  return (
    <section className="bg-patternMobile bg-cover bg-no-repeat bg-center md:bg-contacts text-white min-h-screen flex flex-col justify-center items-center p-4 md:p-16 mt-10">
      <div className="title flex flex-col items-center justify-center px-5 py-1 mb-8">
        <p className="font-inconsolata text-regular md:text-2xl text-customPurple font-light">Contato</p>
        <p className="font-inconsolata text-xl md:text-4xl font-bold">Fale comigo</p>
        <p className="font-inconsolata text-regular md:text-2xl text-customPurple font-light text-center">
          Entre em contato ou acompanhe minhas redes sociais!
        </p>
      </div>
      <div className="quadros bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-5xl transform scale-100 hover:scale-105 transition-transform duration-300 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-5 rounded-lg flex flex-col justify-between h-full">
        
    <ul className="space-y-4">
        <li className="flex items-center justify-between bg-customGray p-3 rounded-md">
            <span className="flex items-center space-x-2">
                <i className="fab fa-linkedin text-xl text-customPurple"></i>
                <span className="text-white">LinkedIn</span>
            </span>
            <a href="https://linkedin.com/in/seuperfil" target="_blank" className="text-customPurple">
                <i className="fas fa-arrow-right"></i>
            </a>
        </li>

        <li className="flex items-center justify-between bg-customGray p-3 rounded-md">
            <span className="flex items-center space-x-2">
                <i className="fab fa-github text-xl text-customPurple"></i>
                <span className="text-white">GitHub</span>
            </span>
            <a href="https://github.com/seuperfil" target="_blank" className="text-customPurple">
                <i className="fas fa-arrow-right"></i>
            </a>
        </li>

        <li className="flex items-center justify-between bg-customGray p-3 rounded-md">
            <span className="flex items-center space-x-2">
                <i className="fas fa-envelope text-xl text-customPurple"></i>
                <span className="text-white">Gmail</span>
            </span>
            <a href="mailto:seuemail@gmail.com" className="text-customPurple">
                <i className="fas fa-arrow-right"></i>
            </a>
        </li>

        <li className="flex items-center justify-between bg-customGray p-3 rounded-md">
            <span className="flex items-center space-x-2">
                <i className="fas fa-briefcase text-xl text-customPurple"></i>
                <span className="text-white">Workana</span>
            </span>
            <a href="https://www.workana.com/freelancer/seuperfil" target="_blank" className="text-customPurple">
                <i className="fas fa-arrow-right"></i>
            </a>
        </li>
    </ul>
</div>
        <div className="rounded-lg flex flex-col justify-center h-full w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
