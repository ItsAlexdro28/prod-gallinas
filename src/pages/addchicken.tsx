import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useChickens } from "../hooks/useChickens"  // adjust relative path as needed
import { Chicken } from "../services/chickenService"

export default function AddChicken() {
  const { handlerAddChicken } = useChickens()

  const [formData, setFormData] = useState({
    id: 0,
    nombre: "",
    fechaNacimiento: "",
    estado: "",
	grupoId: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
	if (name === "grupo") {
 	  setFormData(prev => ({ ...prev, grupo: { id: Number(value) } }));
 	} else {
 	  setFormData(prev => ({ ...prev, [name]: value }));
 	}
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

  const fechaNacimientoTimestamp = formData.fechaNacimiento
    ? new Date(formData.fechaNacimiento).getTime()
    : null;

    // Map form data to Chicken type
    const newChicken: Chicken = {
      id: formData.id,
      nombre: formData.nombre,
      fechaNacimiento: fechaNacimientoTimestamp,
      estado: formData.estado,
      grupo: { id: Number(formData.grupoId) },
    }

    await handlerAddChicken(newChicken)

    // Reset form after saving
    setFormData({
      id: 0,
      nombre: "",
      fechaNacimiento: "",
      estado: "",
	  grupoId: "",
    })
  }

  return (
    <div className="min-h-screen bg-green-100">
      <nav className="bg-green-600 p-4 text-white">
        <div className="container mx-auto">
          <ul className="flex justify-between">
            <li className="font-bold">Nueva Gallina</li>
            <li>Monitoreo</li>
            <li>Registro Huevos</li>
            <li>Reportes</li>
            <li>Análisis</li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto mt-8 p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-green-500 p-6 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Nueva Gallina</h2>
                <div className="bg-white rounded-full p-4 inline-block">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2002/2002611.png?height=200&width=200"
                    alt="Icono de gallina"
                    className="h-40 w-40"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="nombre" className="text-green-800">Nombre</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500 text-black"
                  />
                </div>
                <div>
                  <Label htmlFor="fechaNacimiento" className="text-green-800">Fecha de Nacimiento</Label>
                  <Input
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    type="date"
                    value={formData.fechaNacimiento}
                    onChange={handleInputChange}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500 text-black"
                  />
                </div>
                <div>
                  <Label htmlFor="estado" className="text-green-800">Estado</Label>
                  <Input
                    id="estado"
                    name="estado"
                    value={formData.estado}
                    onChange={handleInputChange}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500 text-black"
                  />
                </div>
                <div>
                  <Label htmlFor="grupo" className="text-green-800">Grupo</Label>
                  <Input
                    id="grupoId"
                    name="grupoId"
                    value={formData.grupoId}
					type="number"
                    onChange={handleInputChange}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500 text-black"
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Añadir
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
