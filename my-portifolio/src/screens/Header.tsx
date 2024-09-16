import { FaGithub, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaAngleDoubleDown  } from 'react-icons/fa';
import { SiMongodb, SiAndroidstudio  } from "react-icons/si";
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="flex z-10 flex-col items-center justify-around h-screen md:h-screen bg-cover bg-no-repeat bg-center bg-patternMobile md:bg-pattern px-2 md:px-5 py-8 select-none">
      <div className="info flex flex-col items-center justify-start p-3 max-w-3xl space-y-2 h-fit mt-2">
   
        {/* Perfil com imagem */}
        <a href="https://www.linkedin.com/in/renan-de-oliveira-silva-416721289">
        <div className="relative flex items-center justify-center">
          {/* Moldura Externa com spin mais lento */}
          <div className="absolute w-28 h-28 md:w-36 md:h-36 border-4 border-customPurple rounded-full animate-spin-slow"></div>

          {/* Moldura Interna com spin mais rápido */}
          <div className="absolute w-24 h-24 md:w-32 md:h-32 border-4 border-customBlue rounded-full animate-glow"></div>

          {/* Imagem de perfil */}
          <img src="/perfil.webp" alt="Profile" className="relative rounded-full w-24 h-24 md:w-32 md:h-32" />
        </div>
        </a>
        
        {/* Conteúdo textual */}
        <div className="teste py-5 h-[400px] flex flex-col justify-start mb-2">
          <div className="content flex flex-col items-center justify-center space-y-2 max-w-3xl text-center mb-5">
            <div className="title">
              <p className="font-inconsolata text-xs md:text-3xl font-light mb-1">
                Hello World! Meu nome é <span className="text-customPurple font-bold">Renan Silva</span> e eu sou
              </p>
              <h2 className="text-3xl md:text-6xl font-bold font-asap mb-6">
                Desenvolvedor <span className="block md:inline">Front-End</span>
              </h2>

            </div>
            <p className="text-sm md:text-base font-light font-maven text-gray-500">
              Minha paixão pela tecnologia impulsionou minha trajetória até aqui, sempre buscando novos desafios e aprendizados. Estou em constante busca por oportunidades que me permitam crescer e evoluir como profissional, contribuindo com soluções inovadoras e impactantes.
            </p>
          </div>

          {/* Ícones de tecnologia */}
          <div className="flex mt-6 space-x-3 max-w-3xl justify-center flex-wrap gap-2">
            {[
              { icon: FaGithub, label: "GitHub", color: "text-gray-300", animation: "animate-pulse" },
              { icon: FaHtml5, label: "HTML", color: "text-customRed", animation: "animate-pulse" },
              { icon: FaCss3Alt, label: "CSS", color: "text-customBlue", animation: "animate-pulse" },
              { icon: FaJsSquare, label: "JavaScript", color: "text-customYellow", animation: "animate-pulse" },
              { icon: FaReact, label: "ReactJs", color: "text-customBlue", animation: "animate-spin-slow" },
              { icon: FaNodeJs, label: "NodeJs", color: "text-customGreen", animation: "animate-pulse" },
              { icon: FaDatabase, label: "SQL", color: "text-customPurple", animation: "animate-pulse" },
              { icon: SiMongodb, label: "MongoDB", color: "text-customGreen", animation: "animate-pulse" },
              { icon: SiAndroidstudio, label: "Mobile", color: "text-customGray", animation: "animate-pulse" },
            ].map(({ icon: Icon, label, color, animation }, idx) => (
              <div key={idx} className="flex items-center space-x-2 px-3 py-1 md:py-2 md:px-4 bg-gray-700 rounded-full text-gray-300 shadow-lg select-none">
                
                <Icon className={`w-5 h-5 ${color} ${animation}`} />
                <span className="font-maven font-extralight text-xs md:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      {/* Ícone de seta */}
      <Link to="works" smooth={true} duration={500}>
        <div className="arrow hover:cursor-pointer">
          <FaAngleDoubleDown className="w-8 h-8 animate-bounce text-gray-300" />
        </div>
      </Link>
    </header>
  )
}

export default Header
