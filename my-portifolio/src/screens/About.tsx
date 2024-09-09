const About = () => {
  return (
    <div className='main flex flex-col h-fit w-screen p-4 bg-patternMobile md:flex-row md:p-10'>
        <div className="aside flexbg-customGray h-fit p-4 rounded-t-3xl justify-around align-middle mb-3">
            <div className="image h-full justify-center">
                <img src="/perfil.webp" alt="Profile" className="rounded-full w-20 h-20" />
            </div>
            <h2 className="text-2xl md:text-6xl font-bold font-asap text-center flex flex-col items-center justify-center">
                Renan de Oliveira <span className="block md:inline">Silva</span>
            </h2>

        </div>
        <div className="content bg-customGray h-fit p-5 rounded-b-3xl">
            <h2 className="text-2xl md:text-6xl font-bold font-asap text-center flex flex-col items-start justify-start mb-2">
                    Sobre mim
            </h2>
            <p className='content '>
                Com uma sólida base acadêmica e experiência prática, sou um Técnico em Desenvolvimento de Sistemas. Em busca contínua de aprimoramento e crescimento profissional. Atualmente, estou completando minha graduação em Análise e Desenvolvimento de Sistemas, onde tenho explorado conceitos avançados e adquirido habilidades técnicas aprimoradas. Meu primeiro trabalho foi como estagiário na minha cidade, fui responsável por ensinar o básico da informática para pessoas que não tem uma base. Nesse curto período desenvolvi muito minhas habilidade de comunicação e trabalho em equipe.
            </p>

        </div>
    </div>
  )
}

export default About
