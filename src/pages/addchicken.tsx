import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Addchicken() {
  const [formData, setFormData] = useState({
    identificacion: "",
    edad: "",
    raza: "",
    fechaIngreso: "",
    precio: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Datos de la nueva gallina:", formData)
    // Aquí iría la lógica para enviar los datos al servidor
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
                  <Label htmlFor="identificacion" className="text-green-800">Identificación</Label>
                  <Input
                    id="identificacion"
                    name="identificacion"
                    value={formData.identificacion}
                    onChange={handleInputChange}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <Label htmlFor="edad" className="text-green-800">Edad (días)</Label>
                  <Input
                    id="edad"
                    name="edad"
                    type="number"
                    value={formData.edad}
                    onChange={handleInputChange}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <Label htmlFor="raza" className="text-green-800">Raza</Label>
                  <Input
                    id="raza"
                    name="raza"
                    value={formData.raza}
                    onChange={handleInputChange}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <Label htmlFor="fechaIngreso" className="text-green-800">Fecha ingreso</Label>
                  <Input
                    id="fechaIngreso"
                    name="fechaIngreso"
                    type="date"
                    value={formData.fechaIngreso}
                    onChange={handleInputChange}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <Label htmlFor="precio" className="text-green-800">Precio</Label>
                  <Input
                    id="precio"
                    name="precio"
                    type="number"
                    step="0.01"
                    value={formData.precio}
                    onChange={handleInputChange}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500"
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
