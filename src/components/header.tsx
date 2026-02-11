import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-xl font-bold text-foreground">
          Style Chronicle
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Homepage</Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">About Me</Link>
          <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Contact & Collaborations</Link>
          <Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">All Articles</Link>
          <Link to="/categories" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Topics</Link>
          <Link to="/lookbook" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Street Style Gallery</Link>
          <Link to="/shop-edit" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">The Edit — Shop My Picks</Link>
        </nav>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Style Chronicle</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col space-y-1">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors">Homepage</Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors">About Me</Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors">Contact & Collaborations</Link>
              <Link to="/blog" className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors">All Articles</Link>
              <Link to="/categories" className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors">Topics</Link>
              <Link to="/lookbook" className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors">Street Style Gallery</Link>
              <Link to="/shop-edit" className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors">The Edit — Shop My Picks</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
