import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ChickenGroups() {
  const [chickenId, setChickenId] = useState("")
  const [chickens, setChickens] = useState<string[]>([])
  const [groupName, setGroupName] = useState("")
  const [groupDescription, setGroupDescription] = useState("")

  const handleAddChicken = () => {
    if (chickenId.trim() !== "" && !chickens.includes(chickenId)) {
      setChickens(prev => [...prev, chickenId.trim()])
      setChickenId("")
    }
  }

  const handleDeleteChicken = (id: string) => {
    setChickens(prev => prev.filter(chicken => chicken !== id))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Nuevo grupo:", {
      groupName,
      groupDescription,
      chickens
    })
    // Aquí iría la lógica para enviar los datos al servidor
  }

  return (
    <div className="min-h-screen bg-green-100">
      <nav className="bg-green-600 p-4 text-white">
        <div className="container mx-auto">
          <ul className="flex justify-between">
            <li className="font-bold">Nuevo Grupo</li>
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
            {/* Formulario a la izquierda */}
            <div className="md:w-1/2 p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="groupName" className="text-green-800">Id de la Gallina</Label>
				  <div className="flex gap-2">
                  	<Input
                  	  id="chickenId"
                  	  name="chickenId"
                  	  value={chickenId}
                  	  onChange={(e) => setChickenId(e.target.value)}
                  	  className="w-full border-green-300 focus:border-green-500 focus:ring-green-500 text-black"
                  	/>
                  	<Button
                  	  type="button"
                  	  onClick={handleAddChicken}
                  	  className="bg-green-600 hover:bg-green-700 text-white"
                  	>
                  	  Añadir
                  	</Button>
				  </div>
                </div>
                {/* Lista de gallinas añadidas */}
                <div className="space-y-2">
                  {chickens.map((id, index) => (
                    <div key={index} className="flex justify-between items-center bg-green-100 p-2 rounded-lg">
                      <span className="text-black">{id}</span>
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => handleDeleteChicken(id)}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        Eliminar
                      </Button>
                    </div>
                  ))}
                </div>
                <div>
                  <Label htmlFor="groupName" className="text-green-800">Nombre del Grupo</Label>
                  <Input
                    id="groupName"
                    name="groupName"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500 text-black"
                  />
                </div>
                <div>
                  <Label htmlFor="groupDescription" className="text-green-800">Descripción del Grupo</Label>
                  <Textarea
                    id="groupDescription"
                    name="groupDescription"
                    value={groupDescription}
                    onChange={(e) => setGroupDescription(e.target.value)}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500 text-black"
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Crear Grupo
                </Button>
              </form>
            </div>

            {/* Imagen a la derecha */}
            <div className="md:w-1/2 bg-green-500 p-6 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Nuevo Grupo</h2>
                <div className="bg-white rounded-full p-4 inline-block">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2002/2002611.png?height=200&width=200"
                    alt="Icono de gallinas"
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
