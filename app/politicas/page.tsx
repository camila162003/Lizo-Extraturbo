import { NavBar } from '@/components/NavBarNew'
import { Footer } from '@/components/Footer'
import PurchasePolicies from '@/components/PurchasePolicies'

export default function PoliticasPage() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <PurchasePolicies />
      <Footer />
    </main>
  )
}
