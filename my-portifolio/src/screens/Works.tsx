import Card from '../components/Card';

const Works = () => {
  return (
    <section className='flex flex-col h-fit xl:h-screen bg-gray-900 px-6 py-4 justify-around'>
      <div className="title flex flex-col items-center justify-center px-5 py-1">
        <p className='font-inconsolata text-regular md:text-2xl text-customRed font-light'>Meu trabalho</p>
        <p className='font-inconsolata text-xl md:text-4xl font-bold'>Projetos desenvolvidos por mim</p>
      </div>

      <div className="cards px-4 py-1 md:px-20 h-fit mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-14 justify-center items-center mb-6 md:mb-0">
        <Card
          title="Projeto de Lista To-Do"
          description="Desenvolvi uma lista de tarefas usando Express, MongoDB e EJS, com operações CRUD dinâmicas e uma interface intuitiva."
          image="/toDo.png"
          linkGithub="https://github.com/RenanOliveiraSilva/List-ToDo.git"
          linkLinkedIn="https://www.linkedin.com/posts/renan-de-oliveira-silva-416721289_explorando-express-e-mongodb-desenvolvendo-activity-7236534128349769728-N1az?utm_source=share&utm_medium=member_desktop"
          showLinks={true}
        />
        <Card
          title="Projeto appFilmes"
          description="Desenvolvi um app de filmes, onde o usuário pode ver os principais lançamentos ou buscar algum em específico."
          image="/a.png"
          linkGithub="https://github.com/RenanOliveiraSilva/List-ToDo.git"
          linkLinkedIn="https://www.linkedin.com/posts/renan-de-oliveira-silva-416721289_explorando-express-e-mongodb-desenvolvendo-activity-7236534128349769728-N1az?utm_source=share&utm_medium=member_desktop"
          showLinks={true}
        />
        <Card
          title="Projeto BI"
          description="Desenvolvi alguns dashboards de BI para empresa onde eu trabalho. O dashboard é somente para estudo e com dados irreais."
          image="/b.png"
          linkGithub="https://github.com/RenanOliveiraSilva/List-ToDo.git"
          linkLinkedIn="https://www.linkedin.com/posts/renan-de-oliveira-silva-416721289_explorando-express-e-mongodb-desenvolvendo-activity-7236534128349769728-N1az?utm_source=share&utm_medium=member_desktop"
          showLinks={false}
        />

      </div>

    </section>
  );
};

export default Works;
