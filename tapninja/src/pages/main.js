import React from 'react';
import {auth} from './firebase'

const Main = () => {
    const user = auth.currentUser
    console.log(user)
    return (
        <div>
Hello
<a href="/login">Login</a>
<a href="/register">Register</a>
        </div>
    )
}
export default Main