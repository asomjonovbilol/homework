import { TbCategoryPlus } from 'react-icons/tb'
import './Dashboard.css'
import { CiEdit } from 'react-icons/ci'
import { FiLogOut } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import CreateProduct from './CreateProduct'
import { useNavigate } from 'react-router-dom'
import Manageproduct from './Manageproduct'
import Createcategory from './Createcategory'
import Managecategory from './Managecategory'
function Dashboard({category,setLogin}) {
  const [createproduct,setCreateproduct] = useState(true)
  const [createcategory,setCreateCategory] = useState(null)
  const [manageproduct,setManageproduct] = useState(null)
  const [managecategory,setManageCategory] = useState(null)
  let navigate = useNavigate()
  scrollTo(0,100)
    useEffect(() => {
        window.scrollTo(0,100)
    },[])
  return (
    <div className="dashboard">
      <div className="controlpanel">
        <div className='controlls'>
        <p>Admin Dashboard</p>
        <button onClick={() => {
          setCreateproduct(true)
          setCreateCategory(false)
          setManageCategory(false)
          setManageproduct(false)
        }}><TbCategoryPlus color='white' size={25} /> Create product</button>
        <button onClick={() => {
          setCreateproduct(false)
          setCreateCategory(false)
          setManageCategory(false)
          setManageproduct(true)
        }}><CiEdit color='white' size={25} /> Manage product</button>
        <button onClick={() => {
          setCreateproduct(false)
          setCreateCategory(true)
          setManageCategory(false)
          setManageproduct(false)
        }}><TbCategoryPlus color='white' size={25} /> Create category</button>
        <button onClick={() => {
          setCreateproduct(false)
          setCreateCategory(false)
          setManageCategory(true)
          setManageproduct(false)
        }}><CiEdit color='white' size={25} /> Manage category</button>
        </div>
        <button onClick={() => {
          navigate('/')
          localStorage.removeItem('login')
          setLogin(false)
        }}><FiLogOut size={25} /> Log out</button>
      </div>
      {
        createproduct ? <CreateProduct category={category} setCreateCategory={setCreateCategory} setCreateproduct={setCreateproduct} setManageCategory={setManageCategory} setManageproduct={setManageproduct} /> : <></>
      }
      {
        manageproduct ? <Manageproduct  /> : <></>
      }
      {
        createcategory ? <Createcategory setCreateCategory={setCreateCategory} setCreateproduct={setCreateproduct} setManageCategory={setManageCategory} setManageproduct={setManageproduct} /> : <></>
      }
      {
        managecategory ? <Managecategory /> : <></>
      }
      
    </div>
  )
}

export default Dashboard
