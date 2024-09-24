import Card from '../components/Card';

const Works = () => {
  return (
    <section className='flex flex-col h-fit xl:h-screen bg-gray-900 px-6 py-4 justify-around'>
      <div className="title flex flex-col items-center justify-center px-5 py-1">
        <p className='font-inconsolata text-regular md:text-2xl text-customRed font-light'>Meu trabalho</p>
        <p className='font-inconsolata text-xl md:text-4xl font-bold'>Projetos desenvolvidos por mim</p>
      </div>

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
