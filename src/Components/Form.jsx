import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import { FaBirthdayCake } from 'react-icons/fa'

const Form = ({formdata,bring,updateData,createData,create,removeNewUser}) => {
    return (
        <form ref={formdata} onSubmit={bring ? updateData : createData} className={create ? "card_form" : "card_off"}>
            <button className='card_close' onClick={removeNewUser} ><AiFillCloseCircle /></button>
            <div className='card_input'>
                <em><FaUserAlt /></em>
                <input id='first_name' type="text" autoComplete='off' required placeholder='First Name' />
                <input id='last_name' type="text" autoComplete='off' required placeholder='Last Name' />
            </div>
            <div className='card_input'>
                <em><MdEmail /></em><input id='email' type="text" autoComplete='off' required placeholder='Email' />
            </div>
            <div className='card_input'>
                <em><RiLockPasswordFill /></em><input id='password' type='password' autoComplete='off' required placeholder='Password' />
            </div>
            <div className='card_input'>
                <em><FaBirthdayCake /></em><input height={100} id='birthday' type='date' required />
            </div >
            <div className='card_button'>
                {bring ?
                    <button className='card__update' >Update</button> :
                    <button className='card_upload'>Upload</button>
                }
            </div>
        </form>
    )
}

export default Form