import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import BlogPage from './pages/Blog'
import CategoriesPage from './pages/Categories'
import LookbookPage from './pages/Lookbook'
import ShopEditPage from './pages/ShopEdit'
import ContactPage from './pages/Contact'
import NewsletterPage from './pages/Newsletter'
import StyleQuizPage from './pages/StyleQuiz'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/topics" element={<CategoriesPage />} />
        <Route path="/street-style-gallery" element={<LookbookPage />} />
        <Route path="/the-edit" element={<ShopEditPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/the-weekly-thread" element={<NewsletterPage />} />
        <Route path="/find-your-style" element={<StyleQuizPage />} />
      </Route>
    </Routes>
  )
}
