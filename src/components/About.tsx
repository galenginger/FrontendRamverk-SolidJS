import { A } from '@solidjs/router'

function About() {
  return (
    <div class="app">
      <header>
        <h1>Om ramverket</h1>
      </header>

      <main>
        <p>Todo-appen är byggd med SolidJS + TypeScript.</p>
        <p>
          SolidJS är ett reaktivt UI-ramverk skapat av Ryan Carniato. Till
          skillnad från React finns ingen Virtual DOM — reaktiva signals
          uppdaterar bara exakt den DOM-nod som ändrats.
        </p>
      </main>

      <footer>
        <A href="/">← Till att-göra-listan</A>
      </footer>
    </div>
  )
}

export default About
