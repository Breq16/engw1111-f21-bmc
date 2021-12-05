import React from "react"
import Reflection from "./Reflection"

import Artist from "./writing/Artist"
import ArtistReflection from "./writing/ArtistReflection"
import Chemicals from "./writing/Chemicals"
import ChemicalsReflection from "./writing/ChemicalsReflection"
import Conclusion from "./writing/Conclusion"
import Expression from "./writing/Expression"
import ExpressionReflection from "./writing/ExpressionReflection"
import Identity from "./writing/Identity"
import IdentityReflection from "./writing/IdentityReflection"
import Title from "./writing/Title"

function App() {
  return (
    <div>
      <Title />
      <Chemicals />
      <Reflection>
        <ChemicalsReflection />
      </Reflection>
      <Expression />
      <Reflection>
        <ExpressionReflection />
      </Reflection>
      <Artist />
      <Reflection>
        <ArtistReflection />
      </Reflection>
      <Identity />
      <Reflection>
        <IdentityReflection />
      </Reflection>
      <Conclusion />
    </div>
  )
}

export default App
