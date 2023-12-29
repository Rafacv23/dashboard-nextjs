import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeaderBtn({ destino, name, icon }) {
  return (
    <Button asChild variant="link" className="text-woodsmoke-300">
      <Link href={destino} className="flex items-center">
        {" "}
        {/* Nueva línea agregada */}
        {icon && <span className="mr-2">{icon}</span>}
        {name}
      </Link>
    </Button>
  )
}
