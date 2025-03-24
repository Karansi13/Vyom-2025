"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Plus, Minus } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const faqsRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FaqItem[] = [
    {
      question: "What is VYOM?",
      answer:
        "VYOM is the inaugural tech fest conducted by Rungta Educational Foundation. It's a three-day event featuring technical competitions, cultural performances, workshops, and adventure-themed activities inspired by Jumanji.",
    },
    {
      question: "When and where will VYOM take place?",
      answer:
        "VYOM will take place from April 7-9, 2025, at the Rungta Educational Foundation campus in Bhilai.",
    },
    {
      question: "Who can participate in VYOM?",
      answer:
        "The fest is primarily open to students from all Rungta Institutions. Check the specific event details for eligibility criteria.",
    },
    {
      question: "How can I register for VYOM?",
      answer:
        "You can register through our website by clicking the 'Register Now' button. Registration can be done for individual events or for the entire fest, depending on your interests.",
    },
   
    {
      question: "Can I form a team with students from different colleges?",
      answer:
        "For most team events, team members should be from the same institution. However, some events may allow mixed teams. Please check the specific event rules for details.",
    },

    {
      question: "How can I purchase official merchandise?",
      answer:
        "Official VYOM merchandise can be pre-ordered through our website and picked up during the fest. You can also purchase merchandise directly at the venue during the event.",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || !titleRef.current || !faqsRef.current) return

    // Animate title
    gsap.fromTo(
      titleRef.current.querySelectorAll("h2, p"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      },
    )

    // Animate FAQ items
    const faqItems = faqsRef.current.querySelectorAll(".faq-item")
    gsap.fromTo(
      faqItems,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: faqsRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Animate the answer when it opens/closes
  useEffect(() => {
    const answers = document.querySelectorAll(".faq-answer")

    answers.forEach((answer, index) => {
      if (index === openIndex) {
        gsap.fromTo(
          answer,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" },
        )
      } else {
        gsap.to(answer, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" })
      }
    })
  }, [openIndex])

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-red-400 font-horror stranger-flicker mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg font-vintage">
            Find answers to common questions about VYOM 2025. If you don't see your question here, feel
            free to contact us.
          </p>
        </div>

        <div ref={faqsRef} className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item mb-6 bg-black/60 border border-red-700/30 rounded-lg overflow-hidden transition-all duration-300  ${openIndex === index ? "shadow-lg shadow-red-600/20" : ""}`}
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-bold text-red-600 font-stranger">{faq.question}</h3>
                <span className="text-red-400 ml-4">
                  {openIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </span>
              </button>

              <div className={`faq-answer overflow-hidden h-0 ${openIndex === index ? "opacity-100" : "opacity-0"}`}>
                <div className="p-6 pt-0 text-gray-200 font-vintage">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

