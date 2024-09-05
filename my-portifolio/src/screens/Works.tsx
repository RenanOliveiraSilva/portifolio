import Card from '../components/Card'

const Works = () => {
  return (
    <section className='flex flex-col h-fit bg-backgroundColor px-8 py-0 justify-center'>
        <div className="title flex flex-col items-center justify-center px-5 py-1">
            <p className='font-inconsolata text-2xl text-customRed font-light'>Meu trabalho</p>
            <p className='font-inconsolata text-4xl font-bold '>Projetos desenvolvidos por mim</p>
        </div>
        <div className="cards px-24 py-1 mt-5 flex flex-row gap-5 flex-wrap justify-between">
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
        

    </section>
  )
}

export default Works