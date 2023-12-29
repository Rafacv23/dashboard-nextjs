import { IconStarFilled } from "@tabler/icons-react"

export default function SingleTask({ note, delNote }) {
  return (
    <article className="p-6 gap-8 flex flex-col justify-center items-start border-2 border-solid rounded-xl border-woodsmoke-600">
      <h1 className=" font-bold text-xl">{note.name}</h1>
      <p className="font-light">{note.description}</p>
      <button
        className="flex justify-center items-start gap-2 hover:bg-green-400 p-3 rounded-xl hover:transition-colors border border-solid border-green-400"
        onClick={() => delNote(note.id)}
      >
        <IconStarFilled />
        Completed
      </button>
    </article>
  )
}
