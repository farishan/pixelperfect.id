import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center p-8">
      <Image src="/pixelperfect.svg" alt="Pixel Perfect Logo" width={405} height={135} />
      <p className='my-8'>&copy; 2023 - Pixel Perfect 5173 | Jasa Slicing UI & Bikin Web</p>
      <div className="flex space-x-4 items-center">
        <Link href="https://wa.me/6282118051213" className="py-2 px-4 bg-[#BE3455]" target="_blank">Konsultasi Gratis</Link>
        <Link href="/about" className="py-2 px-4 underline">Baca tentang kami &rarr;</Link>
      </div>
    </main>
  )
}
