import { useState } from "react"
import { Eye, EyeOff, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    cedula: "",
    fechaNacimiento: "",
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({
    nombre: false,
    apellidos: false,
    cedula: false,
    fechaNacimiento: false,
    email: false,
    password: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const validateField = (name: string, value: string) => {
    let isValid = true
    switch (name) {
      case "nombre":
      case "apellidos":
        isValid = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)
        break
      case "cedula":
        isValid = /^\d+$/.test(value)
        break
      case "email":
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        break
      case "password":
        isValid = value.length >= 8
        break
      default:
        isValid = value.trim() !== ""
    }
    setErrors(prev => ({ ...prev, [name]: !isValid }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate all fields before submission
    Object.entries(formData).forEach(([key, value]) => validateField(key, value))
    // Check if there are any errors
    if (Object.values(errors).some(error => error)) {
      console.log("Form has errors. Please correct them.")
    } else {
      console.log("Form submitted:", formData)
      // Here you would typically send the data to your backend
    }
  }

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-green-600 p-4 text-white text-center">
          <h1 className="text-2xl font-bold">Produccion de la granja Tarazona</h1>
          <p className="text-green-100">Registro de nuevo usuario</p>
        </div>
        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="nombre" className="text-green-800 flex items-center">
              Nombre
              {errors.nombre && <AlertCircle className="h-4 w-4 text-red-500 ml-2" />}
            </Label>
            <Input
              id="nombre"
              name="nombre"
              placeholder="Ingresa tu nombre"
              required
              className={`w-full border-green-300 focus:border-green-500 focus:ring-green-500 ${errors.nombre ? 'border-red-500' : ''}`}
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apellidos" className="text-green-800 flex items-center">
              Apellidos
              {errors.apellidos && <AlertCircle className="h-4 w-4 text-red-500 ml-2" />}
            </Label>
            <Input
              id="apellidos"
              name="apellidos"
              placeholder="Ingresa tus apellidos"
              required
              className={`w-full border-green-300 focus:border-green-500 focus:ring-green-500 ${errors.apellidos ? 'border-red-500' : ''}`}
              value={formData.apellidos}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cedula" className="text-green-800 flex items-center">
              Cedula
              {errors.cedula && <AlertCircle className="h-4 w-4 text-red-500 ml-2" />}
            </Label>
            <Input
              id="cedula"
              name="cedula"
              placeholder="Ingresa tu cedula"
              required
              className={`w-full border-green-300 focus:border-green-500 focus:ring-green-500 ${errors.cedula ? 'border-red-500' : ''}`}
              value={formData.cedula}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fechaNacimiento" className="text-green-800 flex items-center">
              Fecha de nacimiento
              {errors.fechaNacimiento && <AlertCircle className="h-4 w-4 text-red-500 ml-2" />}
            </Label>
            <Input
              id="fechaNacimiento"
              name="fechaNacimiento"
              type="date"
              required
              className={`w-full border-green-300 focus:border-green-500 focus:ring-green-500 ${errors.fechaNacimiento ? 'border-red-500' : ''}`}
              value={formData.fechaNacimiento}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-green-800 flex items-center">
              Correo electrónico
              {errors.email && <AlertCircle className="h-4 w-4 text-red-500 ml-2" />}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Ingresa tu correo electrónico"
              required
              className={`w-full border-green-300 focus:border-green-500 focus:ring-green-500 ${errors.email ? 'border-red-500' : ''}`}
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-green-800 flex items-center">
              Contraseña
              {errors.password && <AlertCircle className="h-4 w-4 text-red-500 ml-2" />}
            </Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                type={showPassword ? "text" : "password"}
                required
                className={`w-full border-green-300 focus:border-green-500 focus:ring-green-500 ${errors.password ? 'border-red-500' : ''}`}
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-green-700"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
            Registrarse
          </Button>
        </form>
        <div className="px-6 pb-6 text-center">
          <p className="text-sm text-green-800">
            ¿Ya tienes una cuenta?{" "}
            <a href="/login" className="text-green-600 hover:underline font-medium">
              Iniciar sesión
            </a>
          </p>
        </div>
        <div className="bg-green-200 p-4 flex items-center justify-center space-x-4">
          <img src="https://cdn-icons-png.flaticon.com/512/2002/2002611.png?height=40&width=40" alt="Icono de pollo" className="h-10 w-10" />
          <img src="https://cdn-icons-png.flaticon.com/512/2713/2713474.png?height=40&width=40" alt="Icono de huevo" className="h-10 w-10" />
        </div>
      </div>
    </div>
  )
}
