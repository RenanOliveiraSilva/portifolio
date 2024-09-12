import Card from '../components/Card';

const Works = () => {
  return (
    <section className='flex flex-col h-fit bg-backgroundColor px-6 py-2 justify-center'>
      <div className="title flex flex-col items-center justify-center px-5 py-1">
        <p className='font-inconsolata text-regular md:text-2xl text-customRed font-light'>Meu trabalho</p>
        <p className='font-inconsolata text-xl md:text-4xl font-bold'>Projetos desenvolvidos por mim</p>
      </div>

      <div className="cards flex-wrap px-4 py-1 md:px-20 h-fit mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-14 justify-between">
  <Card
    title="Projeto de Portfolio"
    description="Este é um projeto desenvolvido usando React, TypeScript e Tailwind CSS para criar um portfólio interativo e moderno."
    image="/Background_Intro.png"
  />
  <Card title='Teste' description='ascacw  ecece eecec eccece e ececc' image='d'/>
  <Card title='Teste' description='ascacw  ecece eecec eccece e ececc' image='d'/>
  <Card title='Teste' description='ascacw  ecece eecec eccece e ececc' image='d'/>
  <Card title='Teste' description='ascacw  ecece eecec eccece e ececc' image='d'/>

</div>

    </section>
  );
};

export default Works;
