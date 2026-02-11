import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { Badge } from '../components/ui/badge'
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
          About Me
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Hi, I&#39;m Elena. Fashion editor turned independent voice.
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


function BlogSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">The Story Behind Style Chronicle</h2>
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


function ContentBlockSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Press &amp; Collaborations</h2>
        <div className="text-muted-foreground space-y-4">
          <p>Featured in Vogue Netherlands, Harper&#39;s Bazaar, Refinery29, The Business of Fashion, and Who What Wear. Brand collaborations with COS, Sezane, Arket, Ganni, and TOTEME.</p>
        </div>
        <div className="mt-8">
          <a href="/media-kit.pdf" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Download Media Kit</a>
        </div>
      </div>
    </section>
  )
}

function ProductsSection3() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">My Style Philosophy</h2>
        <div className="mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format"
                alt="Sample Product 1"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-3 right-3">New</Badge>
            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Sample Product 1</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the product.</p>
              <p className="text-lg font-bold text-primary">$49.99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80&auto=format"
                alt="Sample Product 2"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Sample Product 2</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the product.</p>
              <p className="text-lg font-bold text-primary">$79.99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format"
                alt="Sample Product 3"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-3 right-3">Popular</Badge>
            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Sample Product 3</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the product.</p>
              <p className="text-lg font-bold text-primary">$99.99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format"
                alt="Sample Product 4"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Sample Product 4</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the product.</p>
              <p className="text-lg font-bold text-primary">$59.99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&auto=format"
                alt="Sample Product 5"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Sample Product 5</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the product.</p>
              <p className="text-lg font-bold text-primary">$129.99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format"
                alt="Sample Product 6"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Sample Product 6</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">A brief description of the product.</p>
              <p className="text-lg font-bold text-primary">$89.99</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Me | Style Chronicle'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <BlogSection1 />
      <ContentBlockSection2 />
      <ProductsSection3 />
    </main>
  )
}
