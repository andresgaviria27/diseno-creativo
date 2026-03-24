import './globals.css'
export const metadata = { title: 'Diseño Creativo', description: 'Landing page para agencia de diseño que muestra los servicios y trabajos de la agencia' }
export default function RootLayout({ children }) {
  return (<html lang='es'><body>{children}</body></html>)
}
