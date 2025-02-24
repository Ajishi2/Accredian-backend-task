import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { name: "ALL PROGRAMS", active: true },
  { name: "PRODUCT MANAGEMENT" },
  { name: "STRATEGY & LEADERSHIP" },
  { name: "BUSINESS MANAGEMENT" },
  { name: "FINTECH" },
  { name: "SENIOR MANAGEMENT" },
  { name: "DATA SCIENCE" },
  { name: "DIGITAL TRANSFORMATION" },
  { name: "BUSINESS ANALYTICS" },
]

export function ProgramSidebar() {
  return (
    <div className="w-64 rounded-lg bg-white p-4 shadow-sm">
      {categories.map((category, index) => (
        <button
          key={index}
          className={cn(
            "flex w-full items-center justify-between rounded-md px-4 py-2 text-left text-sm",
            category.active ? "bg-blue-600 text-white" : "hover:bg-gray-100",
          )}
        >
          {category.name}
          <ChevronRight className="h-4 w-4" />
        </button>
      ))}
    </div>
  )
}

