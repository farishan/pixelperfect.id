import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <main className="h-screen flex flex-col items-center justify-center p-8">
        <Image src="/pixelperfect.svg" alt="Pixel Perfect Logo" width={405} height={135} />
        <p className="max-w-xl text-center my-8">Tidak semua web developer bisa membuat website yang rapi dan persis seperti desain yang sudah ditentukan, maka dari itu Pixel Perfect dibentuk untuk mengatasi masalah tersebut. <Link href="https://wa.me/6282118051213" className="underline" target="_blank">Kirim ide atau desain</Link> Anda, santai sejenak, lalu nikmati website yang berkualitas setiap pixel-nya sebagai aset usaha Anda.</p>
        <div className="flex space-x-4 items-center">
          <Link href="/" className="py-2 px-4 underline">&larr; Kembali</Link>
          <Link href="https://wa.me/6282118051213" className="py-2 px-4 bg-[#BE3455]" target="_blank">Konsultasi Gratis</Link>
        </div>
      </main>
    </>
  )
}
