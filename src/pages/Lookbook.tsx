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
          Street Style
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Real fashion from real people in the world&#39;s most stylish cities. Captured on the streets of Amsterdam, Paris, Copenhagen, Milan, and Tokyo.
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


function GallerySection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">The Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format"
              alt="Gallery image 1"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80&auto=format"
              alt="Gallery image 2"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format"
              alt="Gallery image 3"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format"
              alt="Gallery image 4"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&auto=format"
              alt="Gallery image 5"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format"
              alt="Gallery image 6"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function LookbookPage() {
  useEffect(() => {
    document.title = 'Street Style Gallery | Style Chronicle'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <GallerySection1 />
    </main>
  )
}
