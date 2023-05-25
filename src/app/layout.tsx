import { BottomBar } from '../components/BottomBar';
import { Header } from '../components/Header';
import { NavigationBarCategories } from '../components/NavigationBarCateogries';
import { Sidebar } from '../components/Sidebar';
import { GlobalProvider } from '../context/globalsProvider';
import '../globals.css'
import ProvidersWrapper from './ProvidersWrapper';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
      <body className='bg-background-100 text-detailsSecondary-100'>
        <ProvidersWrapper>
          <GlobalProvider>
            <Header />
            
            {children}
            <BottomBar />
          </GlobalProvider>
        </ProvidersWrapper>
      </body>
    </html>
  )
}