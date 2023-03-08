import Sidebar from '@/components/sidebar'
import './globals.css'
import { Gothic_A1 } from 'next/font/google';
import clsx from 'clsx';

export const metadata = {
  title: 'Fahrezi Adha',
  description: 'Saya Aji, seorang Software Developer di Google Indonesia, dan saya senang dapat berbagi karya dan pengalaman saya dengan Anda di sini.',
}

const gothic_A1 = Gothic_A1({
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <div className={clsx('flex flex-row lg:w-[1000px] mx-4 lg:mx-auto mt-[151px]', gothic_A1.className)}>
          <Sidebar />
          <main className='flex flex-grow w-full'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
