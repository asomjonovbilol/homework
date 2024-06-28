import './Dashboard.css'
import { MdDeleteOutline } from 'react-icons/md'
import { useDeleteProductMutation, useGetProductsQuery } from '../context/getRequest'
import { CiEdit } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
function Manageproduct() {
    const {data} = useGetProductsQuery()
    console.log(data);
    const [deleteProduct] = useDeleteProductMutation()
    let navigate = useNavigate()
    const handleDelete = (id) => {
        deleteProduct(id)
    }
    let products = data?.map((item) => (
        <li className='list' key={item.id}>
        <img src={item.image} alt="" onClick={() => navigate(`/product/${item.id}`)} />
        <h4>{item.title?.slice(0,15)}</h4>
        <span>{+item.price + 100 + '.00'}₽</span>
        <div className='addcart'>
        <p>{item.price}₽</p>
        <button onClick={() => {
            // handleUpdate(item.id)
            navigate(`/edit/${item.id}`)
        }} style={{background:'white', color: 'black',border: '1px solid',fontSize: '100%'}}><CiEdit size={20} color='black' /></button>
        <button onClick={() => handleDelete(item.id)}><MdDeleteOutline /></button>
        </div>
    </li>
      ))
      
  return (
    <div className='createpr'>

        <p>Manage product</p>
      <ul className='lists pritems'>
        {
            products
        }
      </ul>
    </div>
  )
}

export default Manageproduct
