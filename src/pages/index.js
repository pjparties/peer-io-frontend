import Image from 'next/image'
import { Inter } from 'next/font/google'
import PreferencePage from './Preferences.page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <PreferencePage/>
    </div>
  )
}
