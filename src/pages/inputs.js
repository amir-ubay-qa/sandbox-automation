import Container from "./components/container"

export default function Radio() {
   return (
      <>
         <Container title="UI Elements: Form Input Fields">
            <div className="grid grid-rows-2 w-96">
               <div className="form-control w-full max-w-xs basis-full">
                  <label className="label">
                     <span className="label-text">Text Input</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
               </div>
               <div className="form-control w-full max-w-xs basis-full">
                  <label className="label">
                     <span className="label-text">Password Input</span>
                  </label>
                  <input type="password" placeholder="Type your password" className="input input-bordered w-full max-w-xs" />
               </div>
               <div className="form-control w-full max-w-xs basis-full">
                  <label className="label">
                     <span className="label-text">Email Input</span>
                  </label>
                  <input type="email" placeholder="Type your Email" className="input input-bordered w-full max-w-xs" />
               </div>
               <div className="form-control w-full max-w-xs basis-full">
                  <label className="label">
                     <span className="label-text">Text Area Input</span>
                  </label>
                  <textarea className="textarea textarea-bordered h-24" placeholder="Type your bio"></textarea>
               </div>

               <div className="form-control w-full max-w-xs basis-full">
                  <label className="label">
                     <span className="label-text">Date Input</span>
                  </label>
                  <input type="date" className="input input-bordered w-full max-w-xs" />
               </div>

               <div className="form-control w-full max-w-xs basis-full">
                  <label className="label">
                     <span className="label-text">Time Input</span>
                  </label>
                  <input type="time" className="input input-bordered w-full max-w-xs" />
               </div>

               
               <div className="form-control w-full max-w-xs  basis-full">
                  <label className="label">
                     <span className="label-text">Disabled Text Input</span>
                  </label>
                  <input type="text" placeholder="Can't touch me" className="input input-bordered w-full max-w-xs" disabled />
               </div>
            </div>
         </Container>
      </>
   )
}