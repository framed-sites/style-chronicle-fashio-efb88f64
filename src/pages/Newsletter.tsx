import { useEffect } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

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
          The Weekly Thread
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Every Friday, a curated dose of fashion intelligence delivered to your inbox. The week&#39;s best stories, my personal outfit diary, one thing I bought, one thing I resisted, and a mood board to start your weekend.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#signup">Subscribe — It&#39;s Free</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <a href="#">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


function TestimonialsSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">What Readers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="text-4xl text-primary/20 font-serif leading-none">&ldquo;</div>
              <p className="text-muted-foreground italic -mt-2">Excellent service and professionalism. Very satisfied!</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  A
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Anna Johnson</p>
                  <p className="text-xs text-muted-foreground">Client</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="text-4xl text-primary/20 font-serif leading-none">&ldquo;</div>
              <p className="text-muted-foreground italic -mt-2">Fast communication and great results. Highly recommended!</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  P
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Peter Davis</p>
                  <p className="text-xs text-muted-foreground">Client</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="text-4xl text-primary/20 font-serif leading-none">&ldquo;</div>
              <p className="text-muted-foreground italic -mt-2">Fantastic experience from start to finish.</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  M
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Maria Wilson</p>
                  <p className="text-xs text-muted-foreground">Client</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


function TestimonialsSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">What You Will Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="text-4xl text-primary/20 font-serif leading-none">&ldquo;</div>
              <p className="text-muted-foreground italic -mt-2">Excellent service and professionalism. Very satisfied!</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  A
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Anna Johnson</p>
                  <p className="text-xs text-muted-foreground">Client</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="text-4xl text-primary/20 font-serif leading-none">&ldquo;</div>
              <p className="text-muted-foreground italic -mt-2">Fast communication and great results. Highly recommended!</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  P
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Peter Davis</p>
                  <p className="text-xs text-muted-foreground">Client</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="text-4xl text-primary/20 font-serif leading-none">&ldquo;</div>
              <p className="text-muted-foreground italic -mt-2">Fantastic experience from start to finish.</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  M
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Maria Wilson</p>
                  <p className="text-xs text-muted-foreground">Client</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


export default function NewsletterPage() {
  useEffect(() => {
    document.title = 'The Weekly Thread | Style Chronicle'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <TestimonialsSection1 />
      <TestimonialsSection2 />
    </main>
  )
}
