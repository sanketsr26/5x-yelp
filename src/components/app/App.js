import React from "react"
import ReactDom from "react-dom"

function App() {
  return <>5x yelp</>
}

ReactDom.render(<App />, document.querySelector("#app"))
if (module.hot) {
  module.hot.accept()
}
