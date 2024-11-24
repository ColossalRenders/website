import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { Noto_Sans } from "next/font/google"
import { Geist } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Inter({ subsets: ["latin"] })
const notoSans = Noto_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
 })
const geist = Geist({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
 })

export const metadata = {
  title: "ColossalRenders",
  description: "IDK what I'm doing",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${geist.className}`}
        //style={{ fontFeatureSettings: "'ss04' on" }} // Enable stylistic set ss04
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/read">Read</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
