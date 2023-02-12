import Navbar from './navbar'
import Footer from './footer'
import Sidemenu from './sidemenu'

export default function Layout({ children }) {

   const layoutCss = ""

   return (
      <>
         <div id='layout-main' className="grid grid-cols-5">
            <aside className='bg-gray-100 max-h-screen h-screen'>
               <nav>
                  <Navbar />
               </nav>
               <div id='aside'>
                  <Sidemenu />
               </div>
            </aside>
            <main className='col-span-4 bg-gray-50'>
               <div id="children">
                  {children}
               </div>
               <footer>
                  {/* <Footer /> */}
               </footer>
            </main>
         </div>
      </>
   )
}