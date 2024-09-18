import { FaExternalLinkAlt } from "react-icons/fa";

interface TooltipProps {
  title: string;
  color: string;
  url: string;
  Icon: React.ElementType;
}

const Tooltip = ({ title, color, url, Icon }: TooltipProps) => {
  return (
    <button
      className={`flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${color} text-white shadow hover:bg-opacity-90 h-9 px-2 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-1 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2`}
      onClick={() => window.open(`${url}`, "_blank")}
    >
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
      <div className="flex items-center">
        <Icon className="w-4 h-4" /> {/* Aqui usamos a prop Icon */}
        <span className="ml-1 text-white">{title}</span>
      </div>
      <div className="ml-2 flex items-center gap-1 text-sm md:flex">
        <FaExternalLinkAlt className="hover:scale-125 transition-transform duration-300" />
      </div>
    </button>
  );
};

export default Tooltip;
