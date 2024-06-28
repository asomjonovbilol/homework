import React, { useState } from 'react'
import { useCreateCategoryMutation } from '../context/getRequest';

function Createcategory({ category, setCreateCategory, setCreateproduct, setManageCategory, setManageproduct }) {
    window.scrollTo(0,100)
    const [title, setTitle] = useState('');
    const [createCategory] = useCreateCategoryMutation();
    const handleSumbit = () => {
        setCreateCategory(false);
        setCreateproduct(false);
        setManageCategory(true);
        setManageproduct(false);
        let crCategory = {
            title,
        };
        createCategory(crCategory);
    };
  return (
    <div className='createpr'>
      <p>Create category</p>
      <form action="" className='createcategorywrapper' onSubmit={handleSumbit}>
        <div>
            <label htmlFor="">Title</label>
            <input value={title} required onChange={(e) => setTitle(e.target.value)} type="text" name="" id="" />
        </div>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default Createcategory
