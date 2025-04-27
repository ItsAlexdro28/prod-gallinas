import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Menu() {

	return (
      		<main className="container mt-8 max-w-full">
      		  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-4">
      		  	<Button asChild className="h-32 text-xl text-white bg-gray-600 hover:bg-gray-700">
				  <a href="/login" className="hover:text-white">
					Login
				  </a>
      		  	</Button>
      		  	<Button asChild className="h-32 text-xl text-white bg-gray-600 hover:bg-gray-700">
				  <a href="/register" className="hover:text-white">
					Register
				  </a>
      		  	</Button>
      		  	<Button asChild className="h-32 text-xl text-white bg-gray-600 hover:bg-gray-700">
				  <a href="/menu" className="hover:text-white">
					Menu Principal
				  </a>
      		  	</Button>
      		  	<Button asChild className="h-32 text-xl text-white bg-gray-600 hover:bg-gray-700">
				  <a href="/add-chicken" className="hover:text-white">
					Añadir Gallina
				  </a>
      		  	</Button>
      		  	<Button asChild className="h-32 text-xl text-white bg-gray-600 hover:bg-gray-700">
				  <a href="/chicken-groups" className="hover:text-white">
					Grupos de Gallina
				  </a>
      		  	</Button>
      		  	<Button asChild className="h-32 text-xl text-white bg-gray-600 hover:bg-gray-700">
				  <a href="/generate-report" className="hover:text-white">
					Generar Reportes
				  </a>
      		  	</Button>
      		  	<Button asChild className="h-32 text-xl text-white bg-gray-600 hover:bg-gray-700">
				  <a href="/generate-analysis" className="hover:text-white">
					Generar Analisis
				  </a>
      		  	</Button>
      		  	<Button asChild className="h-32 text-xl text-white bg-gray-600 hover:bg-gray-700">
				  <a href="/user-options" className="hover:text-white">
					Opciones de Usuario
				  </a>
      		  	</Button>
      		  </div>
      		</main>
	)
}
