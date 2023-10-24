import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contador dinâmico | Countizdown Temporizador',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='w-screen h-screen bg-transparent'>
      <body className='w-full h-full flex justify-center items-center'>{children}</body>
    </html >
  )
}
