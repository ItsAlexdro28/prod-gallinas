import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-green-600 p-4 text-white text-center">
          <h1 className="text-2xl font-bold">Produccion de la granja Tarazona</h1>
          <p className="text-green-100">Monitorea eficientemente</p>
        </div>
        <form className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-green-800">Correo</Label>
            <Input
              id="email"
              placeholder="Ingresa tu correo"
              type="email"
              required
              className="w-full border-green-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-green-800">Contraseña</Label>
            <div className="relative">
              <Input
                id="password"
                placeholder="Ingresa tu contraseña"
                type={showPassword ? "text" : "password"}
                required
                className="w-full border-green-300 focus:border-green-500 focus:ring-green-500"
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
            Ingresa
          </Button>
        </form>
        <div className="px-6 pb-6 text-center">
          <a href="#" className="text-green-600 hover:underline">Olvido su contraseña?</a>
          <p className="mt-4 text-sm text-green-800">
            No esta en el sistema?{" "}
            <a href="/register" className="text-green-600 hover:underline font-medium">
              Registrarse
            </a>
          </p>
        </div>
        <div className="bg-green-200 p-4 flex items-center justify-center space-x-4">
          <img src="https://cdn-icons-png.flaticon.com/512/2002/2002611.png?height=40&width=40" alt="Chicken icon" className="h-10 w-10" />
          <img src="https://cdn-icons-png.flaticon.com/512/2713/2713474.png?height=40&width=40" alt="Egg icon" className="h-10 w-10" />
        </div>
      </div>
    </div>
  )
}
