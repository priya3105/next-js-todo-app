import "../styles/app.scss";
import Header from "./header";
export const metadata = {
  title: 'todo app',
  description: 'todo app by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Header/>
        {children}</body>
    </html>
  )
}
