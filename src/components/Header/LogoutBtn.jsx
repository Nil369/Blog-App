import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/slice/authSlice'
import {Button} from '../index'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler =  () =>{
      authService.logout()
      .then(dispatch(logout()))
      .catch((e)=>console.log(`Failed to log out user: ${e.message}`))
    }
  return (
    <div>
      <Button bgColor='bg-red-500' onClick={logoutHandler}>
        Log out
        </Button>
    </div>
  )
}

export default LogoutBtn
