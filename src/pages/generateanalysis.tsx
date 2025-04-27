import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

export default function AnalysisGenerator() {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([])
  const [availableGroups, setAvailableGroups] = useState([
    "Grupo 1", "Grupo 2", "Grupo 3", "Grupo 4"
  ])
  const [parameter, setParameter] = useState("")
  const [startDate, setStartDate] = useState<Date | undefined>()
  const [endDate, setEndDate] = useState<Date | undefined>()

  const handleGroupToggle = (group: string) => {
    if (selectedGroups.includes(group)) {
      setSelectedGroups(prev => prev.filter(g => g !== group))
    } else {
      setSelectedGroups(prev => [...prev, group])
    }
  }

  const handleGenerateAnalysis = () => {
    console.log("Generando análisis con:")
    console.log("Grupos:", selectedGroups)
    console.log("Parámetro:", parameter)
    console.log("Fecha Inicio:", startDate)
    console.log("Fecha Fin:", endDate)
    // Aquí iría la lógica para generar el análisis real
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
	  <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex mt-8 p-4">
        {/* Imagen o presentación */}
        <div className="md:w-1/2 bg-green-500 p-6 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Generador de Análisis</h2>
          </div>
        </div>

        {/* Formulario */}
        <div className="md:w-1/2 p-8 space-y-6">
          <div>
            <Label className="text-green-800">Seleccionar Grupos</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {availableGroups.map((group, idx) => (
                <Button
                  key={idx}
                  variant={selectedGroups.includes(group) ? "default" : "outline"}
                  className={selectedGroups.includes(group) ? "bg-green-600 text-white hover:bg-green-700" : "text-green-800 border-green-400 hover:text-green-700 hover:bg-green-100"}
                  onClick={() => handleGroupToggle(group)}
                >
                  {group}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-green-800">Parámetro de Análisis</Label>
            <Select onValueChange={setParameter}>
              <SelectTrigger className="w-full border-green-300 focus:border-green-500 focus:ring-green-500 text-black">
                <SelectValue className="text-black" placeholder="Seleccionar parámetro" />
              </SelectTrigger>
              <SelectContent className="bg-white text-green-800 border-green-300">
                <SelectItem value="produccion">Producción de Huevos</SelectItem>
                <SelectItem value="mortalidad">Mortalidad</SelectItem>
                <SelectItem value="consumo">Consumo de Alimento</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-green-800">Fecha Inicio</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left border-green-300 text-black">
                    {startDate ? format(startDate, "dd/MM/yyyy") : "Seleccionar"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-green-100 text-green-800">
                  <Calendar mode="single" selected={startDate} onSelect={setStartDate} />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label className="text-green-800">Fecha Fin</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left border-green-300 text-black">
                    {endDate ? format(endDate, "dd/MM/yyyy") : "Seleccionar"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-green-100 text-green-800">
                  <Calendar mode="single" selected={endDate} onSelect={setEndDate} />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Button
            onClick={handleGenerateAnalysis}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Generar Análisis
          </Button>
        </div>
      </div>
    </div>
  )
}
