import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function UserOptions() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("user")

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Guardando opciones del usuario:", {
      username,
      email,
      role
    })
    // Aquí iría la lógica para guardar cambios
  }

  return (
    <div className="min-h-screen bg-green-100">
      <nav className="bg-green-600 p-4 text-white">
        <div className="container mx-auto">
          <ul className="flex justify-between">
            <li className="font-bold">Opciones de Usuario</li>
            <li>Perfil</li>
            <li>Configuración</li>
            <li>Seguridad</li>
            <li>Cerrar Sesión</li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto mt-8 p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex flex-row-reverse">
            {/* Formulario a la derecha */}
            <div className="md:w-1/2 p-6">
              <form onSubmit={handleSave} className="space-y-6">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Editar Información</h2>

                <div>
                  <Label htmlFor="username" className="text-green-800">Nombre de Usuario</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500 text-black"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-green-800">Correo Electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500 text-black"
                  />
                </div>

                <div>
                  <Label htmlFor="role" className="text-green-800">Rol de Usuario</Label>
                  <Select value={role} onValueChange={(value) => setRole(value)}>
                    <SelectTrigger className="w-full border-green-300 focus:border-green-500 focus:ring-green-500 text-black">
                      <SelectValue placeholder="Selecciona el rol" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-black">
                      <SelectItem value="admin">Administrador</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="user">Usuario</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Guardar Cambios
                </Button>
              </form>
            </div>

            {/* Imagen a la izquierda */}
            <div className="md:w-1/2 bg-green-500 p-6 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Configura tu Perfil</h2>
                <div className="bg-white rounded-full p-4 inline-block">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png?height=200&width=200"
                    alt="Icono de usuario"
                    className="h-40 w-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
