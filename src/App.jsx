import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { HomePage } from './pages/Home/HomePage'
import { ProductListPage } from './pages/Products/ProductListPage'
import { ProductDetailsPage } from './pages/Products/ProductDetailsPage'
import { AboutPage } from './pages/About/AboutPage'
import { ContactPage } from './pages/Contact/ContactPage'
import { NotFoundPage } from './pages/NotFound/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
