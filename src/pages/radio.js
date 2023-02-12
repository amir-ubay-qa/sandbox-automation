import Container from "./components/container"

export default function Radio() {
   return (
      <>
         <Container title="UI Elements: Radio Buttons">
            <div className="form-control">
               <label className="label cursor-pointer gap-4">
                  <span className="label-text">Red pill</span>
                  <input type="radio" name="radio-10" className="radio checked:bg-red-500" readOnly />
               </label>
            </div>
            <div className="form-control">
               <label className="label cursor-pointer gap-4">
                  <span className="label-text">Blue pill</span>
                  <input type="radio" name="radio-10" className="radio checked:bg-blue-500" readOnly />
               </label>
            </div>
         </Container>
      </>
   )
}