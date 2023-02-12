import Container from "./components/container"

export default function Toggles() {
   return (
      <>
         <Container title="UI Elements: Checkboxes">
            <div className="flex flex-col">
               <div className="form-control w-52">
                  <label className="cursor-pointer label">
                     <span className="label-text">Remember me</span>
                     <input type="checkbox" className="checkbox checkbox-primary"/>
                  </label>
               </div>
               <div className="form-control w-52">
                  <label className="cursor-pointer label">
                     <span className="label-text">Keep me login</span>
                     <input type="checkbox" className="checkbox checkbox-secondary" />
                  </label>
               </div>
               <div className="form-control w-52">
                  <label className="cursor-pointer label">
                     <span className="label-text">Notification</span>
                     <input type="checkbox" className="checkbox checkbox-accent"  />
                  </label>
               </div>
            </div>
         </Container>
      </>
   )
}