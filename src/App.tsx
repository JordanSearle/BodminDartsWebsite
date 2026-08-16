import { Navigate, Route, Routes } from "react-router"
import { About, Fixtures, Home, NotFound, Tables } from "./views"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/fixtures" element={<Fixtures />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}

export default App
