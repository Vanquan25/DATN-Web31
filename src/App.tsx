import { Route, Routes } from "react-router-dom"
import Blog from "./pages/Blog"
import BlogDetail from "./pages/Blog-detail"
import Contact from "./pages/Contact"
import HomePage from "./pages/HomePage"
import WebsiteLayout from "./pages/layouts/WebsiteLayout"
import OurTrainer from "./pages/Our-trainer"
import TrainerDetail from "./pages/Trainer-detail"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="ourtrainer" element={<OurTrainer />} />
          <Route path="ourtrainer/trainerdetail" element={<TrainerDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/blogdetail" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
