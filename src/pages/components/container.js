export default function Container({ title, children, height="h-auto" }) {
   return (
      <div className="m-10">
         <h1 className="text-4xl font-bold font-sans mb-12">{title}</h1>
         <div className="mockup-window border border-base-300 bg-gray-100 dark:bg-slate-700 mb-8">
            <div className={`flex justify-center px-4 py-16 border-t border-base-300 gap-4 ${height}`}>
               {children}
            </div>
         </div>
      </div>
   )
}