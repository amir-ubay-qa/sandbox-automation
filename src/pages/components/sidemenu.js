import { useRouter } from 'next/router'

export const inputElements = [
   {
      link:"Buttons",
      href:"buttons"
   },
   {
      link:"Toggles",
      href:"toggles"
   },
   {
      link:"Dropdowns",
      href:"dropdowns"
   },
   {
      link:"Checkboxes",
      href:"checkboxes"
   },
   {
      link:"Radio Buttons",
      href:"radio"
   },
   {
      link:"Modal",
      href:"modal"
   },
   {
      link:"Input Fields",
      href:"inputs"
   }
]

export default function Sidemenu() {

   const router = useRouter();


   return (
      <>
         <ul className="menu bg-transparent w-full p-2">
            <li className="text-lg text-gray-700">
               <span>Input Elements</span>
            </li>
            {inputElements.map((data) => {
               return(
                  <li key={data.href}><a className={"/" + data.href === router.pathname ? "active" : ""} href={data.href}>{data.link}</a></li>
               )
            })}
         </ul>
      </>
   )
}

