import Container from "./components/container"

export default function Buttons() {
   return (
      <>
         <Container title="UI Elements: Buttons">
            <button className="btn">Button</button>
            <button className="btn btn-primary">Button</button>
            <button className="btn btn-secondary">Button</button>
            <button className="btn btn-accent">Button</button>
            <button className="btn btn-ghost">Button</button>
            <button className="btn btn-link">Button</button>
         </Container>
      </>
   )
}