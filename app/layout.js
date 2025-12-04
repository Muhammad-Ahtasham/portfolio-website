import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Muhammad Ahtasham Portfolio',
  description: 'Muhammad Ahtasham Portfolio - AI Engineer and Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="App">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}

