import { ToastProvider } from "@radix-ui/react-toast";
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"





function App() {
 

  return (
    <>
      {/* first component define BrowserRouter */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>

     
    </>
  )
}

export default App
