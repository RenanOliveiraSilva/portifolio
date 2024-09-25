import Button from '../components/Button';

const About = () => {
  return (
    <div className="bg-patternMobile bg-cover bg-no-repeat bg-center md:bg-pattern text-white h-fit md:h-screen flex flex-col justify-center items-center p-4 md:p-16 mt-10">
      <div className="quadros relative bg-gray-900 p-8 rounded-xl shadow-2xl max-w-5xl transform scale-90 hover:scale-95 transition-transform duration-300 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
          <img 
            src="/perfil2.jpg" 
            alt="Profile" 
            className="w-28 h-28 rounded-full border-4 border-customPurple shadow-lg" 
          />
        </div>
        
        <div className="text-center mt-12 col-span-full">
          <h1 className="text-3xl md:text-4xl font-extrabold font-asap tracking-wide mb-4">Renan de Oliveira Silva</h1>
          <p className="text-gray-300 font-inconsolata text-base mb-8">
          Desenvolvedor entusiasta de experiências digitais, focado em criar soluções inovadoras que simplificam a tecnologia e a tornam mais acessível para todos.
          </p>
        </div>

        <div className="bg-customGray p-5 rounded-lg flex flex-col justify-between h-full">
          <h3 className="text-xl font-bold mb-2 text-customPurple">Experiências</h3>
          <p className="text-gray-300 font-inconsolata">
            Experiência em diversas tecnologias, como React, JavaScript e Python. Focado no desenvolvimento web, buscando unir funcionalidade e design.
          </p>
        </div>

        <div className="bg-customGray p-5 rounded-lg flex flex-col justify-between h-full">
          <h3 className="text-xl font-bold mb-2 text-customPurple">Metas</h3>
          <p className="text-gray-300 font-inconsolata">
            Crescer como profissional e buscar soluções criativas e eficientes. Aprender continuamente e aprimorar minhas habilidades técnicas e colaborativas.
          </p>
        </div>

        <div className="bg-customGray p-5 rounded-lg flex flex-col justify-start h-full">
          <h3 className="text-xl font-bold text-customPurple mb-2">Meu Currículo</h3>
          <div className="content flex justify-between h-full ">
            <div className="download flex flex-col font-inconsolata text-base h-full justify-between text-gray-300">
              Em breve colocarei meu currículo ⚠️
              <Button title='Download do CV'/>
            </div>
            <div className="flex justify-center">
              <img 
                src="/rocket-animate.svg" 
                alt="Animated Rocket" 
                className="w-36 h-36" 
              />
            </div>
          </div>
        </div>

        <div className="bg-customGray p-5 rounded-lg flex flex-col justify-between h-full">
          <h3 className="text-xl font-bold text-customPurple mb-2">Skills</h3>
          <p className="text-gray-300 font-inconsolata">
            Sou desenvolvedor com experiência em JavaScript, TypeScript, PHP, HTML, CSS, React, Bootstrap e SQL. Atualmente, estou expandindo meus conhecimentos em Python, PowerBI, Java, React Native e WordPress, buscando sempre evoluir e criar soluções criativas e eficientes.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
