import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Inter } from 'next/font/google'
import { Container, SSRProvider } from '@/app/components/bootstrap';
import NavBar from './NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'do do, or to to, toDoList?',
  description: 'To do list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SSRProvider>
          <NavBar/>
          <main>
            <Container>
              {children}
            </Container>
          </main>
        </SSRProvider>
        </body>
    </html>
  )
}
