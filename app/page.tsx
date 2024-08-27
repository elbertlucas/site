import { Contacts } from '@/components/contacts'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Home } from '@/components/home'
import { Services } from '@/components/services'
import { Separator } from '@/components/ui/separator'

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-slate-200 from-2% via-slate-100 via-30% to-slate-100 to-50% dark:bg-gradient-to-br dark:from-slate-950 dark:from-10% dark:via-slate-900 dark:via-50% dark:to-slate-950 dark:to-90%">
      <Header />
      <Home />
      <Separator />
      <Services />
      <Separator />
      <Contacts />
      <Footer />
    </main>
  )
}
