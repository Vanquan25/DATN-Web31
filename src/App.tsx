import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import toastr from 'toastr';
import { signup } from "./api/auth";
import { addcontact, listcontact, removecontact, updatecontact } from "./api/contact";
import { addpack, listpack, readpack, removepack, updatepack } from "./api/princing"
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
import { ContactType } from "./Type/Contact"
import { PackagesType } from "./Type/Packages"
import { User } from "./Type/User"
import { addToCart, decreaseItemInCart, increaseItemInCart, removeItemInCart } from "./ulltis/cart"

function App() {
  const [packagess, setPackagess] = useState<PackagesType[]>([])
  const [contacts, setContacts] = useState<PackagesType[]>([])
  const [cart, setCart] = useState<PackagesType[]>([]);
  const [users, setusers] = useState<User[]>([]);
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
  //delete packages
  const onHandleremovePack = async (id: number) => {
    if (window.confirm('Are you sure you want to remove  ?')) {
      removepack(id)
      setPackagess(packagess.filter(item => item.id !== id));
    }
  }
  //add packages
  const onhandlerAddPack = async (packages: PackagesType) => {
    const { data } = await addpack(packages)
    setPackagess([...packagess, data])
    alert("More success!");
  }
  // update packages
  const onHandlerUpdatePack = async (packages: PackagesType) => {
    try {
      const { data } = await updatepack(packages);
      setPackagess(packagess.map(item => item.id === data.id ? data : item))
      if (data) {
        alert("Update successful!");
      }
    } catch (error) {
    }
  }

  // Contact
  useEffect(() => {
    const getContacts = async () => {
      const { data } = await listcontact();
      setContacts(data);
    }
    getContacts();
  }, [])
  //delete contact
  const onHandleremoveContact = async (id: number) => {
    if (window.confirm('Are you sure you want to remove  ?')) {
      removecontact(id)
      setContacts(contacts.filter(item => item.id !== id));
    }
  }
  // add contact
  const onhandlerAddContact = async (contact: ContactType) => {
    const { data } = await addcontact(contact)
    setContacts([...contacts, data])
    alert("Cảm ơn phản hồi của quý khách!");
  }
  // update contact
  const onHandlerUpdateContact = async (contact: ContactType) => {
    try {
      const { data } = await updatecontact(contact);
      setContacts(contacts.map(item => item.id === data.id ? data : item))
      if (data) {
        alert("Update successful!");
      }
    } catch (error) {
    }
  }

  // User
  const onSignup = async (user: User) => {
    // console.log('User', user);
    const { data } = await signup(user);
    setusers([...users, data]);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="ourtrainer" element={<OurTrainer />} />
          <Route path="ourtrainer/trainerdetail" element={<TrainerDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/blogdetail" element={<BlogDetail />} />
          <Route path="contact" element={<Contact onAddContact={onhandlerAddContact} />} />
          <Route path="packagess" element={<PrincingPlan packagess={packagess} />} />
          <Route path="packagess/packdetail/:id" element={<PackageDetail packagess={packagess} onAddToCart={onHandleAddToCart} />} />
          <Route path="cart/:id" element={<CartPage onRemoveCart={onHandleRemoveCart} onDecreaseItemInCart={onHandleDecreaseItemInCart} onIncreaseItemInCart={onHandleIncreaseItemInCart} />} />
          <Route path="signup" element={<Signup onSignup={onSignup} />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
