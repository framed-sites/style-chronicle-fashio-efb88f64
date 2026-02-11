import { useEffect } from 'react'
import { Button } from '../components/ui/button'

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
          Explore by Topic
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Whether you are here for runway analysis, everyday outfit ideas, or conscious fashion choices — find your corner of Style Chronicle.
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


function FeaturedCollectionSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Topics</h2>
        <div className="text-muted-foreground space-y-4">
          <p>Seven categories covering every angle of modern fashion.</p>
        </div>

      </div>
    </section>
  )
}

export default function CategoriesPage() {
  useEffect(() => {
    document.title = 'Topics | Style Chronicle'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <FeaturedCollectionSection1 />
    </main>
  )
}
