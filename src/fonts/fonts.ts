import {
  Roboto,
  Poppins,
  Open_Sans,
  VT323,
  Oswald,
  Bebas_Neue,
  Anton,
  Orbitron,
  Montserrat_Alternates,
} from 'next/font/google';

const roboto = Roboto({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ['latin'],
  display: 'swap',
})
const open_sans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ['latin'],
  display: 'swap',
})
const poppins = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ['latin'],
  display: 'swap',
})
const vt323 = VT323({
  weight: ["400"],
  subsets: ['latin'],
  display: 'swap',
})
const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ['latin'],
  display: 'swap',
})
const bebas_neue = Bebas_Neue({
  weight: ["400"],
  subsets: ['latin'],
  display: 'swap',
})
const anton = Anton({
  weight: ["400"],
  subsets: ['latin'],
  display: 'swap',
})
const orbitron = Orbitron({
  weight: ["400"],
  subsets: ['latin'],
  display: 'swap',
})
const montserrat_alternates = Montserrat_Alternates({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  display: 'swap',
})


export {
  anton,
  roboto,
  poppins,
  open_sans,
  vt323,
  oswald,
  bebas_neue,
  orbitron,
  montserrat_alternates
}