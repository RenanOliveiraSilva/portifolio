import Button from '../components/Button';

const About = () => {
  return (
    <div className="bg-patternMobile md:bg-pattern bg-cover bg-no-repeat bg-center text-white min-h-screen flex flex-col justify-center items-center p-16 mt-10">
      <div className="relative bg-gray-900 p-8 rounded-xl shadow-2xl max-w-5xl transform hover:scale-105 transition-transform duration-300">
        
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
          <img 
            src="/perfil.webp" 
            alt="Profile" 
            className="w-28 h-28 rounded-full border-4 border-customPurple shadow-lg" 
          />
        </div>
        
        <div className="text-center mt-12">
          <h1 className="text-3xl md:text-4xl font-extrabold font-asap tracking-wide mb-4">Renan de Oliveira Silva</h1>
          <p className="text-gray-300 font-inconsolata text-base mb-8">
          Desenvolvedor entusiasta de experiências digitais, focado em criar soluções inovadoras que simplificam a tecnologia e a tornam mais acessível para todos.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8 mb-3">
          <div className="bg-customGray p-5 rounded-lg w-full h-full md:w-1/2">
            <h3 className="text-xl font-bold mb-2 text-customPurple">Experiências</h3>
            <p className="text-gray-300 font-inconsolata">
              Experiência em diversas tecnologias, como React, JavaScript e Python. Focado no desenvolvimento web, buscando unir funcionalidade e design.
            </p>
          </div>
          
          <div className="bg-customGray p-5 rounded-lg w-full h-full md:w-1/2">
            <h3 className="text-xl font-bold mb-2 text-customPurple">Metas</h3>
            <p className="text-gray-300 font-inconsolata">
              Crescer como profissional e buscar soluções criativas e eficientes. Aprender continuamente e aprimorar minhas habilidades técnicas e colaborativas.
            </p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8 mb-3">
            <div className="bg-customGray p-5 rounded-lg w-full h-full md:w-1/2 mt-4">
            <h3 className="text-xl font-bold text-customPurple mb-2">Meu Currículo</h3>
                <div className="content flex h-full justify-around">
                    <div className="flex flex-col justify-between download font-inconsolata text-base text-gray-300">
                        Faça o download do meu currículo aqui.
                        <Button title='Download do CV'/>
                    </div>

                    {/* SVG animado */}
                    <div className="flex justify-center">
                        <img 
                            src="/rocket-animate.svg" 
                            alt="Animated Rocket" 
                            className="w-36 h-36" 
                        />
                    </div>

                </div>
                </div>
          
            <div className="bg-customGray p-5 rounded-lg w-full h-full md:w-1/2">
                <h3 className="text-xl font-bold text-customPurple mb-2">Skills</h3>
                <p className="text-gray-300 font-base font-inconsolata">
                    Sou desenvolvedor com experiência em JavaScript, TypeScript, PHP, HTML, CSS, React, Bootstrap e SQL. Atualmente, estou expandindo meus conhecimentos em Python, Java, React Native e WordPress, buscando sempre evoluir e criar soluções criativas e eficientes.
                </p>
            </div>

        </div>

      </div>
    </div>
  );
};

export default About;
