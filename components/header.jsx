import React from "react"
import HeaderBtn from "./header-btn"
import {
  IconChecklist,
  IconCreditCard,
  IconCalendarWeek,
  IconSettings,
} from "@tabler/icons-react"

export default function Header() {
  return (
    <header className="flex justify-center items-center text-woodsmoke-50 py-4 border-b-woodsmoke-600 border border-transparent fixed left-0 right-0 gap-4 backdrop-filter backdrop-blur-sm">
      <h1 className="font-bold text-xl">Dashboard</h1>
      <HeaderBtn destino={"/tasks"} name={"Tasks"} icon={<IconChecklist />} />
      <HeaderBtn
        destino={"/payments"}
        name={"Payments"}
        icon={<IconCreditCard />}
      />
      <HeaderBtn
        destino={"/calendar"}
        name={"Calendar"}
        icon={<IconCalendarWeek />}
      />
      <HeaderBtn
        destino={"/settings"}
        name={"Settings"}
        icon={<IconSettings />}
      />
    </header>
  )
}
