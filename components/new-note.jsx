"use client"
import { useState } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { generateRandomString } from "@/lib/utils"

// Definición del componente NewNote
export default function NewNote() {
  const [formData, setFormData] = useState({
    id: generateRandomString(10),
    name: "",
    description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Comprobar si hay notas en el localStorage
    const existingNotes = JSON.parse(localStorage.getItem("notes")) || []

    // Agregar la nueva nota a las existentes
    const updatedNotes = [...existingNotes, formData]

    // Guardar las notas actualizadas en el localStorage
    localStorage.setItem("notes", JSON.stringify(updatedNotes))

    location.reload("/tasks")

    // Revalidar la ruta '/tasks'
    console.log("Nota creada")
  }

  return (
    <Popover>
      <PopoverTrigger className="bg-woodsmoke-50 text-woodsmoke-950 p-3 font-semibold cursor-pointer rounded hover:bg-woodsmoke-200 hover:transition-colors mt-7">
        New Task
      </PopoverTrigger>
      <PopoverContent>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <label htmlFor="name">Task</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Go shopping"
            autoComplete="off"
            className="text-woodsmoke-950 rounded p-2 border-woodsmoke-950 border-solid border-2"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="description">What to do?</label>
          <textarea
            placeholder="Bread, eggs, milk..."
            className="rounded text-woodsmoke-950 p-2 border-solid border-2 border-woodsmoke-950"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="submit"
            name="submit"
            value="Guardar"
            className="text-woodsmoke-50 bg-woodsmoke-950 rounded p-3 cursor-pointer"
          />
        </form>
      </PopoverContent>
    </Popover>
  )
}
