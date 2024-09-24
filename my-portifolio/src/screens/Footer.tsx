import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-16">
        <p className="font-inconsolata text-sm md:text-base mb-4 md:mb-0 text-center md:text-left">
          © 2024 Renan de Oliveira Silva - Todos os direitos reservados.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/RenanOliveiraSilva"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-customGray transition duration-300"
          >
            <FaGithub className="text-white w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/renan-de-oliveira-silva-416721289/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-customGray transition duration-300"
          >
            <FaLinkedin className="text-white w-5 h-5" />
          </a>
          <a
            href="mailto:renandeoliveirasilva@gmail.com"
            className="bg-gray-700 p-3 rounded-full hover:bg-customGray transition duration-300"
          >
            <FaEnvelope className="text-white w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
