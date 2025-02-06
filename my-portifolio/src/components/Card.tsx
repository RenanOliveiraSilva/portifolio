import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface CardProps {
  title: string;
  description: string;
  image: string;
  linkGithub: string;
  linkLinkedIn: string;
  showLinks: boolean;
}

export default function Card({ title, description, image, linkGithub, linkLinkedIn, showLinks }: CardProps) {
  return (
    <div className="group flex flex-col justify-start items-start gap-2 w-full md:w-80 lg:w-96 h-48 md:h-56 duration-500 relative rounded-lg p-4 bg-customGray hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
      <div
        className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-6 right-4 w-1/3 h-1/3 md:w-1/2 md:h-1/2 md:-bottom-10 md:-right-10 rounded-lg bg-gray-200 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div>
        <h2 className="mb-2 text-lg md:text-xl font-extrabold font-asap text-white">{title}</h2>
        <p className="text-gray-300 font-inconsolata text-[13px] line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex space-x-3 mt-auto">
        {showLinks && (
          <>
            <a
              href={linkLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-customBlue p-3 rounded-full hover:bg-customBlue"
              
            >
              <FaLinkedin className="text-white w-6 h-6" />
            </a>
            <a
              href={linkGithub} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 p-3 rounded-full hover:bg-gray-300"
            >
              <FaGithub className="text-gray-800 w-6 h-6" />
            </a>
          </>
        )}

          
      </div>
    </div>
  );
}
