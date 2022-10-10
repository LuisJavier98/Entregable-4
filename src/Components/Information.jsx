import React from 'react'

const Information = ({info}) => {
    return (
        <ul className='card_list'>
            <li key={info.first_name}><strong>{info.first_name} {info.last_name} </strong></li>
            <li key={info.email}>{info.email}</li>
            <li key={info.birthday}>{info.birthday}</li>
        </ul>
    )
}

export default Information