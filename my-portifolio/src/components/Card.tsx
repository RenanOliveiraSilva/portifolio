
export default function Card() {
    return (
        <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg max-w-sm">
          {/* Card image */}
          <div className="bg-pink-200 px-4 pt-4 rounded-lg">
            <img
              src="/Background_Intro.png" // Substitua pelo caminho da sua imagem
              alt="Travelgram mockup"

            />
          </div>

          {/* Card content */}
            <div className="mt-5">
                <h2 className="text-2xl font-bold">Travelgram</h2>
                <p className="text-gray-400 mt-2">
                    Rede social onde as pessoas mostram os registros de suas viagens pelo mundo
                </p>
            </div>
      
        </div>
    );
}
