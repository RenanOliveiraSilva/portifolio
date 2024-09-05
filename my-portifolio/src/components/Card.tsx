interface CardProps {
    title: string;
    description: string;
    image: string;
}


export default function Card( {title, description, image}: CardProps ) {
    return (
        <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg max-w-sm hover:animate-pulse">
          {/* Card image */}
          <div className="bg-pink-200 px-4 pt-4 rounded-lg">
            <img
              src={image} // Substitua pelo caminho da sua imagem
              alt="Travelgram mockup"

            />
          </div>

          {/* Card content */}
            <div className="mt-5">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-gray-400 mt-2">
                    {description}	
                </p>
            </div>
      
        </div>
    );
}
