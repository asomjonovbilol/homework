import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useUpdateProductMutation } from '../context/getRequest';
import './Dashboard.css'
function EditProduct({product,category}) {
    let {id} = useParams()
    let opls = product?.find((el) => el.id === id)
    console.log(opls);
    const [updated] = useUpdateProductMutation()
    const [title, setTitle] = useState(opls.title);
    const [price, setPrice] = useState(opls.price);
    const [categories, setCategories] = useState(opls.category);
    const [desc, setDesc] = useState(opls.desc);

    let navigate = useNavigate()
    const handleUpdate = (id) => {
        let updateData = {
            _id: id,
            title,
            price,
            image: 'https://i.ibb.co/cQX5XGR/20230528180416535300-1-1.png',
            category: categories,
            desc
        };
        updated({ _id: id, body: updateData });
        navigate('/admin')
    };
  return (
    <div className='updateds'>
                <form action="" className='createwrapper updatewrapper' onSubmit={() => handleUpdate(id)}>
                <p>Update product</p><br />
                <div>
                    <label htmlFor="">Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} required type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} required type="number" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Category</label>
                    <select name="" id="" value={categories} onChange={(e) => setCategories(e.target.value)}>
                        {
                            category?.map((item) => (
                                <option value={item.title} key={item.id}>{item.title}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="">Desc</label>
                    <textarea value={desc} onChange={(e) => setDesc(e.target.value)} required name="" id=""></textarea>
                </div>
                <button type='submit'>Edit</button>
            </form>
            </div>
  )
}

export default EditProduct
