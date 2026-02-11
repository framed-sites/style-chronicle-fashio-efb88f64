import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import BlogPage from './pages/Blog'
import CategoriesPage from './pages/Categories'
import LookbookPage from './pages/Lookbook'
import ShopEditPage from './pages/ShopEdit'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import NewsletterPage from './pages/Newsletter'
import StyleQuizPage from './pages/StyleQuiz'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/topics" element={<CategoriesPage />} />
        <Route path="/lookbook" element={<LookbookPage />} />
        <Route path="/shop-edit" element={<ShopEditPage />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/style-quiz" element={<StyleQuizPage />} />
      </Route>
    </Routes>
  )
}
