import NewNote from "@/components/new-note"
import TasksList from "@/components/tasks-list"
import { Suspense } from "react"
import Loading from "./loading"

export default function Tasks() {
  return (
    <main className="pt-20 items-center flex flex-col sm:h-screen">
      <NewNote />
      <Suspense fallback={<Loading />}>
        <TasksList />
      </Suspense>
    </main>
  )
}
