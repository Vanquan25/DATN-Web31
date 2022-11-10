import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { listpack } from "./api/princing"
import Blog from "./pages/Blog"
import BlogDetail from "./pages/Blog-detail"
import CartPage from "./pages/Cart-page"
import Contact from "./pages/Contact"
import HomePage from "./pages/HomePage"
import WebsiteLayout from "./pages/layouts/WebsiteLayout"
import OurTrainer from "./pages/Our-trainer"
import PackageDetail from "./pages/package-detail"
import PrincingPlan from "./pages/Princing-plan"
import TrainerDetail from "./pages/Trainer-detail"
import { PackagesType } from "./Type/Packages"

function App() {
  const [packagess, setPackagess] = useState<PackagesType[]>([])

  useEffect(() => {
    const getPackagess = async () => {
      const { data } = await listpack();
      setPackagess(data);
    }
    getPackagess();
  }, [])
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
          <Route path="packagess" element={<PrincingPlan packagess={packagess} />} />
          <Route path="packagess/packdetail/:id" element={<PackageDetail />} />
          <Route path="cart/:id" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
