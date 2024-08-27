import { MessageCircleIcon } from 'lucide-react'
import { Button } from './ui/button'

export function Contacts() {
  return (
    <div
      id="contacts"
      className="flex flex-col justify-center items-center gap-4 overscroll-contain py-[3rem] border-b-2"
    >
      <label className="w-2/3 text-2xl md:text-2xl font-semibold mb-4 text-center">
        # Contatos{' '}
      </label>
      <a
        href="https://wa.me/5521993705286"
        className="flex justify-center items-center gap-2"
      >
        <Button className="bg-green-400">
          Whatsapp
          <MessageCircleIcon className="text-secondary ml-4" />
        </Button>
      </a>
    </div>
  )
}
