"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { ReferralForm } from "@/components/referral-form"
import { FAQSection } from "@/components/faq-section"
import { SiteFooter } from "@/components/site-footer"
import { ProgramSidebar } from "@/components/program-sidebar"
import { Switch } from "@/components/ui/switch"

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrerBonus: 7000,
    refereeBonus: 9000,
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrerBonus: 9000,
    refereeBonus: 11000,
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Executive Program in Product Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Advanced Certification in Product Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
]

export default function ReferAndEarn() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <SiteHeader />

    
      <section className="relative bg-[#EEF2FF] py-16">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Let's Learn <br />& Earn
            </h1>
            <p className="text-xl">
              Get a chance to win <br />
              up to <span className="text-blue-600 font-semibold">Rs. 15,000</span>
            </p>
            <Button onClick={() => setIsModalOpen(true)} size="lg" className="w-fit">
              Refer Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-lg overflow-hidden">
              <Image
                src="/hero.jpeg"
                alt="Students showing thumbs up with mobile app"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )


      
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            How Do I <span className="text-blue-600">Refer</span>?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Submit Referral",
                description: "Submit referrals easily via our website's referral section.",
              },
              {
                title: "Earn Rewards",
                description: "Earn rewards once your referral joins an Accredian program.",
              },
              {
                title: "Bonus Payout",
                description: "Referee receives a bonus 30 days after program enrollment.",
              },
            ].map((step, index) => (
              <div key={index} className="relative flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-xl font-bold text-blue-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">
            What Are The <span className="text-blue-600">Referral Benefits</span>?
          </h2>
          <div className="flex gap-8">
            <ProgramSidebar />
            <div className="flex-1">
              <div className="rounded-lg bg-white p-4">
                <div className="mb-4 flex items-center justify-end gap-2">
                  <span className="text-sm">Enrolled</span>
                  <Switch />
                </div>
                <div className="rounded-lg border">
                  <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 bg-blue-50 p-4 font-medium">
                    <div>Programs</div>
                    <div>Referrer Bonus</div>
                    <div>Referee Bonus</div>
                  </div>
                  <div className="divide-y">
                    {programs.map((program, index) => (
                      <div key={index} className="grid grid-cols-[2fr,1fr,1fr] gap-4 p-4">
                        <div className="flex items-center gap-2">
                          <Image src="/placeholder.svg" alt="" width={24} height={24} className="h-6 w-6" />
                          {program.name}
                        </div>
                        <div>₹{program.referrerBonus}</div>
                        <div>₹{program.refereeBonus}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      Show More
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                    <Button onClick={() => setIsModalOpen(true)}>Refer Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      
      <section className="bg-blue-600 py-12">
        <div className="container">
          <div className="flex items-center justify-between rounded-lg bg-blue-500 p-8">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-white p-2">
                <Image src="/placeholder.svg" alt="" width={40} height={40} className="h-10 w-10" />
              </div>
              <div className="text-white">
                <h3 className="text-xl font-semibold">Want to delve deeper into the program?</h3>
                <p>Share your details to receive expert insights from our program team!</p>
              </div>
            </div>
            <Button variant="secondary" size="lg">
              Get in touch
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />

      <ReferralForm open={isModalOpen} setOpenAction={setIsModalOpen} />
    </div>
  )
}

