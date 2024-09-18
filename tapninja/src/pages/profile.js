import React, {useEffect, useState} from 'react';
import {auth,db} from './firebase'
import {doc, getDoc} from 'firebase/firestore'

const Profile = () => {
    const [userDetails, setUserDetails] = useState(null)
    const fetchData = async() =>{
        auth.onAuthStateChanged(async(user)=>{
            console.log(user)
            const docRef=doc(db,'Users',user.uid)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setUserDetails(docSnap.data())
                console.log(docSnap.data())
            }else{
                console.log('nie ma usera')
            }
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
            {userDetails ? (
                <>
                    <h3>Welcome {userDetails.nickname}</h3>
                    <div>
                        <h4>Tu wszystkie dane z bazy danych</h4>
                    </div>
                    <p><a href='/profile/edit'>Clcik to edit profile</a></p>
                </>
            ) : (
                <p>Loading...</p>
            ) }
        </div>
    )
}
export default Profile