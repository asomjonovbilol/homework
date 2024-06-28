import React, { useState } from 'react';
import './Dashboard.css';
import { useCreateProductMutation } from '../context/getRequest';

function CreateProduct({ category, setCreateCategory, setCreateproduct, setManageCategory, setManageproduct }) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [categories, setCategories] = useState('');
    const [desc, setDesc] = useState('');
    const [createProduct] = useCreateProductMutation();
    scrollTo(0,100)
    const handleSumbit = () => {
        setCreateCategory(false);
        setCreateproduct(false);
        setManageCategory(false);
        setManageproduct(true);
        let crproduct = {
            title,
            price,
            image: 'https://i.ibb.co/cQX5XGR/20230528180416535300-1-1.png',
            category: categories,
            desc
        };
        createProduct(crproduct);
    };

    return (
        <div className='createpr'>
            <form action="" className='createwrapper' onSubmit={handleSumbit}>
                <p>Create product</p>
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
                <button type='submit'>Create</button>
            </form>
        </div>
    );
}

export default CreateProduct;
