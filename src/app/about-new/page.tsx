import AboutPage from "@/components/ui/about-page"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <AboutPage />
      <Footer />
    </div>
  )
}
