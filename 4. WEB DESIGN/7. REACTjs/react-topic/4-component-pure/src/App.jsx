import { useState } from 'react'
import Recipe from './Compo-Pure/Recipe'
import { Cup } from './Compo-Pure/Cup'
import TeaGathering from './Compo-Pure/loop'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <section>
          <h1>special chai recipe</h1>
          <h2>for two</h2>
          <Recipe drink={2} />
          <h2>for a gathering</h2>
          <Recipe drink={4} />
          <h1>many people</h1>
          <Recipe drink={100} />
        </section> */}

      <section>
        {/* <Cup guest={1} />
        <Cup guest={2} />
        <Cup guest={3} /> */}

        <TeaGathering />
      </section>


    </>

  )
}

export default App
