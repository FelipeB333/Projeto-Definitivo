import "./css/base.css";
import Menu from "./componentes/menu"
export const metadata = {
  title: 'Padaria',
  description: 'Muitas felicidade e PÃÃÃÃÃÃÃÃOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO',
}

export default function RootLayout({ children }) {
 return (
   <html lang="en">
    <body>
      <header>
        <Menu />
      </header>
      <main>
        {children}
        <img src="https://png.pngtree.com/png-vector/20250424/ourmid/pngtree-a-cute-smiling-slice-of-bread-with-large-expressive-eyes-and-png-image_16097400.png" alt="Pão"></img>;
        <img src="https://img.freepik.com/vetores-premium/desenho-de-pao-andando_309278-28413.jpg?w=360" alt="Pão"></img>;
      </main>
       <footer>
         <p>Fundador: Felipe Barreto Godinho.</p>
      </footer>
    </body>
   </html>
)
}
export const dynamic = "force-dynamic";