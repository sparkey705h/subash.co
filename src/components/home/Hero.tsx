"use client"

import { Download, ChevronDown } from "lucide-react"
import Image from "next/image"
import { SocialLinks } from "./SocialLinks"
import { interests, siteConfig } from "@/config/site"

export default function Hero() {
  const scrollToSkills = () => {
    const element = document.querySelector('#skills')
    if (element) {
      const elementRect = element.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.pageYOffset
      const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2)
      window.scrollTo({
        top: middle,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
      <div className="container px-4 relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-border hidden md:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile */}
          <div className="flex flex-col items-center gap-8">
            {/* Profile Picture */}
            <div className="relative w-48 h-48 rounded-full border-2 border-border overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                {siteConfig.name}
              </h1>
              <div className="space-y-1 text-muted-foreground">
                <p className="text-xl">Technical Product Associate</p>
                <p className="text-xl">Data Domain Architect</p>
                <p className="text-lg">J.P. Morgan Chase</p>
              </div>
            </div>

            <SocialLinks />
          </div>

          {/* Right Column - Biography */}
          <div className="flex flex-col gap-8 md:pl-16">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Biography</h2>
                <p className="text-muted-foreground leading-relaxed">
                A Computer Science graduate passionate about automation and cloud infrastructure. Specializing in AWS, Python, and modern DevOps practices, I bring a problem-solving mindset to every challenge. 
                I believe in collaborative development - where varying perspectives lead to better solutions. Always seeking ways to optimize and enhance existing systems while maintaining scalability and reliability.
                </p>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="flex flex-col gap-2">
                <p className="font-medium">BSc in Computer Science</p>
                <p className="text-muted-foreground">University of Texas at Dallas (2023)</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center rounded-md border px-3 py-1 text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToSkills}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to skills section"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  )
} 