import { FaCode, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaArrowDown } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between h-screen bg-cover bg-no-repeat bg-center bg-pattern p-5">
      <div className="info flex flex-col items-center justify-around p-3 max-w-3xl space-y-2 h-[520px]">
       
          <div className="relative moldura rounded-full p-1 border-4 border-customPurple flex items-center justify-center mb-5">
            <img src="/perfil.webp" alt="Profile" className="rounded-full w-24 h-24" />
            {/* <span className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2 bg-gray-900 p-2 rounded-full">
              <FaCode className="text-green-400 w-5 h-5" />
            </span> */}
          </div>

          <div className="content flex flex-col items-center justify-center max-w-3xl ">
            <p className="font-inconsolata text-2xl font-light">Hello World! Meu nome é <span className="text-customPurple font-bold">Renan Silva</span> e eu sou</p>
            <h2 className="text-6xl font-bold font-asap mb-6">Desenvolvedor Front-End</h2>
            <p className="text-base font-light font-maven justify-center text-center text-gray-500 mb-6">
            Minha paixão pela tecnologia impulsionou minha trajetória até aqui, sempre buscando novos desafios e aprendizados. Estou em constante busca por oportunidades que me permitam crescer e evoluir como profissional, contribuindo com soluções inovadoras e impactantes.
            </p>
          </div>
        
          <div className="flex mt-6 space-x-4 max-w-3xl justify-center h-[80px] flex-wrap gap-2">
            <div className="flex items-center space-x-2 px-4 bg-gray-700 rounded-full text-gray-300 shadow-lg">
              <FaGithub className="w-5 h-5 text-gray-300 animate-pulse" />
              <span className="font-maven font-extralight">GitHub</span>
            </div>
            <div className="flex items-center space-x-2 px-4 bg-gray-700 rounded-full text-gray-300 shadow-lg">
              <FaHtml5 className="w-5 h-5 text-customRed animate-pulse" />
              <span className="font-maven font-extralight">HTML</span>
            </div>
            <div className="flex items-center space-x-2 px-4 bg-gray-700 rounded-full text-gray-300 shadow-lg">
              <FaCss3Alt className="w-5 h-5 text-customBlue animate-pulse" />
              <span className="font-maven font-extralight">CSS</span>
            </div>
            <div className="flex items-center space-x-2 px-4 bg-gray-700 rounded-full text-gray-300 shadow-lg">
              <FaJsSquare className="w-5 h-5 text-customYellow animate-pulse" />
              <span className="font-maven font-extralight">JavaScript</span>
            </div>
            <div className="flex items-center space-x-2 px-4 bg-gray-700 rounded-full text-gray-300 shadow-lg">
              <FaReact className="w-5 h-5 text-customBlue animate-spin-slow" />
              <span className="font-maven font-extralight">ReactJs</span>
            </div>
            <div className="flex items-center space-x-2 px-4 bg-gray-700 rounded-full text-gray-300 shadow-lg">
              <FaNodeJs className="w-5 h-5 text-customGreen animate-pulse" />
              <span className="font-maven font-extralight">NodeJs</span>
            </div>
            <div className="flex items-center space-x-2 px-4 bg-gray-700 rounded-full text-gray-300 shadow-lg">
              <FaDatabase className="w-5 h-5 text-customPurple animate-pulse" />
              <span className="font-maven font-extralight">SQL</span>
            </div>

          </div>

      </div>
      <div className="arrow mt-5">
            <FaArrowDown className="w-8 h-8 animate-bounce text-gray-300" />
      </div>
      
    </header>
  )
}

export default Header
