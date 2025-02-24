import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-600">accredian</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="#" className="text-sm font-medium hover:text-blue-600">
            Courses
          </Link>
          <Link href="#" className="text-sm font-medium text-blue-600">
            Refer & Earn
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-blue-600">
            Resources
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-blue-600">
            About Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:text-blue-600">
            Login
          </Link>
          <Button variant="default" size="sm">
            Try for free
          </Button>
        </div>
      </div>
    </header>
  )
}

