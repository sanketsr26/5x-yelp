import React, { useEffect, useState } from "react"
import ReactDom from "react-dom"
import { Business } from "../../apis/yelp/index"

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Business.searchBusinesses()
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return <>5x yelp</>
}

ReactDom.render(<App />, document.querySelector("#app"))
if (module.hot) {
  module.hot.accept()
}
