import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, User, LogOut, Settings } from "lucide-react"

export default function Menu() {
  const [userName, setUserName] = useState("Juan") 

  return (
    <div className="min-h-screen w-full bg-green-100">
      <nav className="bg-green-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="https://img.pikbest.com/origin/09/33/56/59xpIkbEsT2RU.png!w700wp?height=40&width=40"
              alt="Logo de la granja Tarazona"
              className="h-10 w-10"
            />
            <h1 className="text-2xl font-bold">Granja Tarazona</h1>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-lg">Hola, {userName}</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white bg-green-600 hover:bg-green-700">
                  <User className="mr-2 h-4 w-4" />
                  Perfil
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configuración</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar Sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
      <main className="container mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Button className="h-32 text-xl text-white bg-green-600 hover:bg-green-700">
            Registrar Gallina
          </Button>
          <Button className="h-32 text-xl text-white bg-green-600 hover:bg-green-700">
            Registrar Producción
          </Button>
          <Button className="h-32 text-xl text-white bg-green-600 hover:bg-green-700">
            Generar Reportes
          </Button>
          <Button className="h-32 text-xl text-white bg-green-600 hover:bg-green-700">
            Generar Análisis
          </Button>
        </div>
      </main>
    </div>
  )
}
