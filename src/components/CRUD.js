import React, { useState } from 'react'



import './CRUD.css'

const CRUD = () => {

    const list_of_items = [
        {
            id: 1,
            name: "HP",
            price: "2222"
        },
        {
            id: 2,
            name: "Lenovo",
            price: "12222"
        },
    ]

    const [items, setItems] = useState(list_of_items);
    return (
        <div className='crud'>
            <table>
                {items.map((item) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <button className='edit'>Edit</button>
                            <button className='delete'>Delete</button>

                        </td>


                    </tr>
                ))

                }
            </table>
        </div>
    )
}

export default CRUD;