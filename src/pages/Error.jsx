import { Link } from "react-router-dom"


const Error = () => {
  return (
    <main className="px-[5%] my-20 grow text-center">
      <h2 className="text-[#95ff00] text-6xl font-bold">404</h2>
      <p className="text-2xl font-semibold mb-2 text-white">Página não encontrada</p>
      <p className="text-gray-400 mb-8 max-wd-md">Parece que você se perdeu no mapa do jogo. A Página que você está procurando não existe ou foi removida</p>
      <link to='/' className="text-white py-3 px-20 bg-amber-200">Voltar para a Home</link>
    </main>
  )
}

export default Error
