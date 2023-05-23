import { Header } from '../components/Header';
import '../globals.css'
import ProvidersWrapper from './ProvidersWrapper';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (  
    <html lang="pt-br">
      <body className='bg-background-100'>
        <ProvidersWrapper>
            <Header/>
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  )
}