import React from 'react'
import { FaBirthdayCake } from 'react-icons/fa'

const Information = ({ info }) => {
    return (
        <ul className='card_list'>
            <li key={info.first_name}><strong>{info.first_name} {info.last_name} </strong></li>
            <li key={info.email}>{info.email}</li>
            <em><FaBirthdayCake /></em><li key={info.birthday}>{info.birthday}</li>
        </ul>
    )
}

export default Information