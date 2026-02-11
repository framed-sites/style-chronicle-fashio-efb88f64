import { useEffect, useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'

function HeroSection0() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 md:px-6">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 container mx-auto text-center max-w-4xl space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
          Let Us Work Together
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Open to brand collaborations, press inquiries, speaking engagements, and styled content creation. I work with brands that align with my values of quality, sustainability, and thoughtful design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#">Get Started</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <a href="#">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


function ContactSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input type="tel" id="phone" name="phone" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={5} required />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">info@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-sm text-muted-foreground">+31 (0)20 123 4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Adres</h3>
                <p className="text-sm text-muted-foreground">Keizersgracht 123, 1015 CJ Amsterdam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function BlogSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Collaboration Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://picsum.photos/600/340?random=40"
                alt="First article title"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="pt-6 space-y-3">
              <time className="text-xs text-muted-foreground">2026-01-15</time>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">First article title</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief summary of the article...</p>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://picsum.photos/600/340?random=41"
                alt="Second article title"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="pt-6 space-y-3">
              <time className="text-xs text-muted-foreground">2026-01-10</time>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Second article title</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief summary of the article...</p>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://picsum.photos/600/340?random=42"
                alt="Third article title"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="pt-6 space-y-3">
              <time className="text-xs text-muted-foreground">2026-01-05</time>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Third article title</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief summary of the article...</p>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact & Collaborations | Style Chronicle'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ContactSection1 />
      <BlogSection2 />
    </main>
  )
}
