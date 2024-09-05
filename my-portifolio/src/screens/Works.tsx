import Card from '../components/Card'

const Works = () => {
  return (
    <section className='flex flex-col h-fit bg-backgroundColor px-6 py-0 justify-center'>
        <div className="title flex flex-col items-center justify-center px-5 py-1">
            <p className='font-inconsolata text-regular md:text-2xl text-customRed font-light'>Meu trabalho</p>
            <p className='font-inconsolata text-xl md:text-4xl font-bold '>Projetos desenvolvidos por mim</p>
        </div>
        <div className="cards px-2 py-1 md:px-20  mt-5 flex flex-row gap-5 flex-wrap justify-between">
          <Card title='List-ToDo React' description='Projeto web utilizando ReactTSX e MongoDB' image='/Background_Intro.png'/>
          <Card title='List-ToDo React' description='Projeto web utilizando ReactTSX e MongoDB' image='/Background_Intro.png'/>
          <Card title='List-ToDo React' description='Projeto web utilizando ReactTSX e MongoDB' image='/Background_Intro.png'/>
          <Card title='List-ToDo React' description='Projeto web utilizando ReactTSX e MongoDB' image='/Background_Intro.png'/>

        </div>
        

    </section>
  )
}

export default Works