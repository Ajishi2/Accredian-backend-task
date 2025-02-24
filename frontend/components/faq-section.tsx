"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../lib/utils"

const tabs = ["Eligibility", "How To Use?", "Terms & Conditions"]

const faqs = [
  {
    question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
    answer:
      "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
  },
  {
    question: "What is the minimum system configuration required?",
    answer: "System requirements details will be provided upon enrollment.",
  },
]

export function FAQSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex gap-4">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "rounded-lg px-6 py-2 text-sm",
                  activeTab === index ? "bg-white shadow-sm" : "hover:bg-gray-50",
                )}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg border bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-6"
                >
                  <h3 className="text-left text-lg font-semibold">{faq.question}</h3>
                  <ChevronDown className={cn("h-5 w-5 transition-transform", openFaq === index && "rotate-180")} />
                </button>
                {openFaq === index && <div className="px-6 pb-6 text-muted-foreground">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

