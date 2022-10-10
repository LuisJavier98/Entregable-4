import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import Information from './Components/Information'
import { MdDelete } from 'react-icons/md'
import { GoPencil } from 'react-icons/go'
import Form from './Components/Form'

function App() {
  const [create, setcreate] = useState()
  const [information, setinformation] = useState()
  const [bring, setbring] = useState()
  const formdata = useRef()

  const createNewUser = () => {
    setcreate("Activo")
  }
  const removeNewUser = () => {
    setcreate()
  }
  useEffect(() => {
    if (bring) {
      formdata.current.email.value = bring.email
      formdata.current.password.value = bring.password
      formdata.current.first_name.value = bring.first_name
      formdata.current.last_name.value = bring.last_name
      formdata.current.birthday.value = bring.birthday
    }
  }, [bring])

  useEffect(() => {
    getUsers()
  }, [])

  const bringData = info => {
    setbring({
      email: info.email,
      password: info.password,
      first_name: info.first_name,
      last_name: info.last_name,
      birthday: info.birthday,
      id: info.id
    })
    createNewUser()
  }

  const clear = e => {
    e.preventDefault()
    e.target.email.value = ""
    e.target.password.value = ""
    e.target.first_name.value = ""
    e.target.last_name.value = ""
    e.target.birthday.value = ""
  }

  const getUsers = () => {
    URL = "https://users-crud1.herokuapp.com/users/"
    axios.get(URL)
      .then(res => setinformation(res.data))
      .catch(err => console.log(err))
  }

  const createData = e => {
    e.preventDefault()
    URL = "https://users-crud1.herokuapp.com/users/"
    console.log(e.target.email.value)
    axios.post(URL,
      {
        email: e.target.email.value,
        password: e.target.password.value,
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        birthday: e.target.birthday.value
      })
      .then(res => {
        getUsers()
        clear(e)
        removeNewUser()
      })
      .catch(err => console.log(err))
  }
  const deleteData = info => {
    URL = `https://users-crud1.herokuapp.com/users/${info}/`
    axios.delete(URL)
      .then(res => {
        console.log(res)
        getUsers()
      })
      .catch(err => console.log(err))
  }
  const updateData = e => {
    e.preventDefault()
    URL = `https://users-crud1.herokuapp.com/users/${bring.id}/`
    axios.put(URL, {
      email: e.target.email.value,
      password: e.target.password.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      birthday: e.target.birthday.value
    })
      .then(res => {
        console.log(res)
        getUsers()
        setbring()
        clear(e)
        removeNewUser()
      }
      )
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div className='card_user'>
        <button className='button_user' onClick={createNewUser}>Create New User</button>
      </div>
      {information?.map(info =>
        <div className='card_information'>
          <div className='card_buttons'>
            <button onClick={() => deleteData(info.id)} id={info.id} className='card_delete'><MdDelete /></button>
            <button onClick={() => bringData(info)} id={info.id} className='card_update'><GoPencil /></button>
          </div>
          <Information key={info.id} info={info} />
        </div>)}
      <Form
        formdata={formdata}
        bring={bring}
        updateData={updateData}
        createData={createData}
        create={create}
        removeNewUser={removeNewUser} />
    </div>
  )
}

export default App
