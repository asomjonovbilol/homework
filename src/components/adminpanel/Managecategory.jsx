import React from 'react'
import { useDeleteCategoryMutation, useGetCategoryQuery, useUpdataCategoryMutation } from '../context/getRequest'
import { CiEdit } from 'react-icons/ci'

function Managecategory() {
    const [deleteCategory] = useDeleteCategoryMutation()
    const handleDelete = (id) => {
        deleteCategory(id)
    }
    const [updated] = useUpdataCategoryMutation()
    const {data} = useGetCategoryQuery()
    const handleUpdate = (id,title) => {
        let updateData = {
            _id: id,
            title: prompt(title).valueOf(title),
        };
        updated({ _id: id, body: updateData });
    };
    let categoryes = data?.map((item) => (
        <li key={item.id} className='managecategory'>
            <p>{item.title}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleUpdate(item.id,item.title)} style={{background:'white', color: 'black',border: '1px solid',fontSize: '100%'}}><CiEdit size={20} color='black' /></button>
        </li>
    ))
  return (
    <div className='createpr'>
      <ul className='lists items'>
        {
            categoryes
        }
      </ul>
    </div>
  )
}

export default Managecategory
