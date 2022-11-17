import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import toastr from 'toastr';
import { listpack, readpack } from "./api/princing"
import Blog from "./pages/Blog"
import BlogDetail from "./pages/Blog-detail"
import CartPage from "./pages/Cart-page"
import Contact from "./pages/Contact"
import HomePage from "./pages/HomePage"
import WebsiteLayout from "./pages/layouts/WebsiteLayout"
import OurTrainer from "./pages/Our-trainer"
import PackageDetail from "./pages/package-detail"
import PrincingPlan from "./pages/Princing-plan"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import TrainerDetail from "./pages/Trainer-detail"
import { PackagesType } from "./Type/Packages"
import { addToCart, decreaseItemInCart, increaseItemInCart, removeItemInCart } from "./ulltis/cart"

function App() {
  const [packagess, setPackagess] = useState<PackagesType[]>([])
  const [cart, setCart] = useState<PackagesType[]>([]);
// Cart
const onHandleAddToCart = async (id: number) => {
  const { data } = await readpack(id)
  addToCart({ ...data, quantity: 1 }, function () {
    toastr.success(`Thêm ${data.name} vào giỏ hàng thành công!`)
    setCart(JSON.parse(localStorage.getItem('cart') as string))
  })
}
const onHandleIncreaseItemInCart = (id: number) => {
  increaseItemInCart(id, () => {
    setCart(JSON.parse(localStorage.getItem('cart') as string))
  })
}
const onHandleDecreaseItemInCart = (id: number) => {
  decreaseItemInCart(id, () => {
    setCart(JSON.parse(localStorage.getItem('cart') as string))
  })
}

const onHandleRemoveCart = (id: number) => {
  removeItemInCart(id, () => {
    setCart(JSON.parse(localStorage.getItem('cart') as string))
  })
}
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
          <Route path="packagess/packdetail/:id" element={<PackageDetail packagess={packagess} onAddToCart={onHandleAddToCart} />} />
          <Route path="cart/:id" element={<CartPage onRemoveCart={onHandleRemoveCart} onDecreaseItemInCart={onHandleDecreaseItemInCart} onIncreaseItemInCart={onHandleIncreaseItemInCart} />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
