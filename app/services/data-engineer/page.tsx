import { Navigation } from '@/components/navigation'

export default function HomePage() {
  return (
    <div className="flex w-screen h-screen bg-gradient-to-br from-slate-200 from-2% via-slate-100 via-30% to-slate-100 to-50% dark:bg-gradient-to-br dark:from-slate-950 dark:from-10% dark:via-slate-900 dark:via-50% dark:to-slate-950 dark:to-90% ">
      <Navigation />
      <div className="flex justify-center items-center w-full">
        <label>data-engineer</label>
      </div>
    </div>
  )
}
