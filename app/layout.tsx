import { Navigation } from './components/Navigation'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />

      <body>
        <header>
          <Navigation />
        </header>
        <main
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '1rem'
          }}
        >
          { children }
        </main>
      </body>
    </html>
  )
}
