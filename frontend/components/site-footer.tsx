import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold">
              accredian
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Programs</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Data Science & AI</li>
              <li>Product Management</li>
              <li>Business Analytics</li>
              <li>Digital Transformation</li>
              <li>Business Management</li>
              <li>Project Management</li>
              <li>Strategy & Leadership</li>
              <li>Senior Management</li>
              <li>Fintech</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email us (For Data Science Queries): admissions@accredian.com</li>
              <li>Email us (For Product Management Queries): pm@accredian.com</li>
              <li>Data Science Admission Helpline:+91 9278455292 (9 AM - 7 PM)</li>
              <li>Product Management Admission Helpline:+91 9625811095</li>
              <li>Enrolled Student Helpline: +91 7903552267</li>
              <li>Office Address: 4th Floor, 2nd Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122008</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Accredian</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Career</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Admission Policy</Link>
              </li>
              <li>
                <Link href="#">Refund Policy</Link>
              </li>
              <li>
                <Link href="#">Terms Of Service</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
            <div className="space-y-4">
              <h3 className="font-semibold">Follow Us</h3>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-blue-600">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-blue-600">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-blue-600">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-blue-600">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

