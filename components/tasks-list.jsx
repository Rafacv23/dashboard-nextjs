"use client"
import React, { useState, useEffect } from "react"
import SingleTask from "./single-task"

// eslint-disable-next-line @next/next/no-async-client-component
export default async function TasksList() {
  const [allNotes, setAllNotes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const storedNotes = localStorage.getItem("notes")
      if (storedNotes) {
        setAllNotes(JSON.parse(storedNotes))
      }
    }

    fetchData()
  }, [])

  const handleDeleteNote = (noteId) => {
    const updatedNotes = allNotes.filter((note) => note.id !== noteId)
    setAllNotes(updatedNotes)
    localStorage.setItem("notes", JSON.stringify(updatedNotes))
    console.log("Tarea borrada")
  }

  return (
    <main>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-4">
        {allNotes.map((note) => (
          <SingleTask key={note.id} note={note} delNote={handleDeleteNote} />
        ))}
      </ul>
    </main>
  )
}
