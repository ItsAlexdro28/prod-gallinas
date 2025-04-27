import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function GenerateReport() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [fileType, setFileType] = useState("pdf")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Generando reporte:", {
      startDate,
      endDate,
      fileType
    })
    // Aquí iría la lógica para generar o descargar el reporte
  }

  return (
    <div className="min-h-screen bg-green-100">
      <nav className="bg-green-600 p-4 text-white">
        <div className="container mx-auto">
          <ul className="flex justify-between">
            <li className="font-bold">Generar Reporte</li>
            <li>Monitoreo</li>
            <li>Registro Huevos</li>
            <li>Reportes</li>
            <li>Análisis</li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto mt-8 p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex flex-row-reverse">
            {/* Formulario a la derecha */}
            <div className="md:w-1/2 p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Opciones de Reporte</h2>

                <div>
                  <Label htmlFor="startDate" className="text-green-800">Fecha de Inicio</Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500 text-black"
                  />
                </div>

                <div>
                  <Label htmlFor="endDate" className="text-green-800">Fecha de Fin</Label>
                  <Input
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full border-green-300 focus:border-green-500 focus:ring-green-500 text-black"
                  />
                </div>

                <div>
                  <Label htmlFor="fileType" className="text-green-800">Tipo de Archivo</Label>
                  <Select value={fileType} onValueChange={(value) => setFileType(value)}>
                    <SelectTrigger className="w-full border-green-300 focus:border-green-500 focus:ring-green-500 text-black">
                      <SelectValue placeholder="Selecciona el tipo de archivo" />
                    </SelectTrigger>
                   <SelectContent className="bg-white text-black">
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="excel">Excel</SelectItem>
                      <SelectItem value="csv">CSV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Generar Reporte
                </Button>
              </form>
            </div>

            {/* Imagen a la izquierda */}
            <div className="md:w-1/2 bg-green-500 p-6 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Genera tu Reporte</h2>
                <div className="bg-white rounded-full p-4 inline-block">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2203/2203124.png?height=200&width=200"
                    alt="Icono de reporte"
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
