import Image from 'next/image'
import profilePic from '../public/profile.png'

export function Home() {

  return (
    <div id="home" className="flex flex-col md:flex-row py-2 justify-center items-center w-full md:px-6 gap-12 h-screen animate-caret-blink">
      <Image
        src={profilePic}
        alt="Picture of the author"
        className='rounded-full shadow-2xl size-48 md:size-72 border-4 border-primary'
        placeholder="blur"
      />
      <div className='flex flex-col px-8 md:p-4 md:w-1/3 gap-2 '>
        <label className='text-2xl md:text-4xl font-semibold text-primary '>
          Olá, eu sou <strong>Elbert Lucas</strong>
        </label>
        <label className='text-lg md:text-2xl font-semibold text-secondary-foreground '>
          <span className='text-green-700 dark:text-green-400'>Desenvolvedor Fullstack</span>, com experiência em <span className='text-yellow-600 dark:text-yellow-400'> Engenharia de dados, BI</span> e <span className='text-cyan-600 dark:text-cyan-400'> desenvolvimento RPA</span>.
        </label>
      </div>
    </div>
  )
}
