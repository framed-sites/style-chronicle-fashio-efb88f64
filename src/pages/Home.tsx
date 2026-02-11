import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
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
          Style Chronicle
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Where fashion meets storytelling. Trend reports, personal style guides, street style from the world&#39;s most stylish cities, and the stories behind the clothes we wear.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="/blog">Read Latest</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <a href="/style-quiz">Take the Style Quiz</a>
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">The Return of Quiet Luxury: Why 2026 Is the Year of Understated Elegance</h2>
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

function BlogSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Fresh Off the Press</h2>
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


function ContentBlockSection3() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Explore by Topic</h2>
        <div className="text-muted-foreground space-y-4">
          <p>Dive into what interests you most — from runway analysis to everyday styling tips.</p>
        </div>

      </div>
    </section>
  )
}

function ContentBlockSection4() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">The Edit — What I Am Loving Right Now</h2>
        <div className="text-muted-foreground space-y-4">
          <p>My handpicked selection of the most covetable pieces this season. From a perfect black blazer to the sneaker everyone is talking about.</p>
        </div>
        <div className="mt-8">
          <a href="/shop-edit" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Shop All My Picks</a>
        </div>
      </div>
    </section>
  )
}

function NewsletterSection5() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">The Weekly Thread</h2>
        <div className="text-muted-foreground space-y-4">
          <p>Every Friday, I send a curated digest of the week&#39;s best fashion stories, my personal outfit diary, one thing I bought, and one thing I resisted. Join 12,000+ readers.</p>
        </div>
        <div className="mt-8">
          <a href="#newsletter-signup" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Subscribe Free</a>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  useEffect(() => {
    document.title = 'Homepage | Style Chronicle'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <GallerySection1 />
      <BlogSection2 />
      <ContentBlockSection3 />
      <ContentBlockSection4 />
      <NewsletterSection5 />
    </main>
  )
}
