import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import {auth,db} from './firebase'
import {setDoc,doc} from 'firebase/firestore'
const Register = () => {

        const [login, setLogin] = useState('');
        const [password, setPassword] = useState('');
        const [confirm, setConfirm] = useState('');
        const handleRegister= async (e) => {
            e.preventDefault();
            try{
              await createUserWithEmailAndPassword(auth, login, password)
              const user = auth.currentUser
              console.log(user)
              if(user){
                await setDoc(doc(db,'Users', user.uid),{
                    nickname: user.email.split('@')[0],
                    password: confirm,
                    uid: user.uid,
                    achievements: '',
                    elixirBonus: '',
                    goldPerCoin: '',
                    elixirPerCoin: '',
                    GodaiVoid: '',
                    GodaiWind: '',
                    GodaiFire: '',
                    GodaiWater: '',
                    KinomoEq:'',
                    KatanaEq:'',
                    KabutoEq:'',
                    GetaEq:'',
                    KoteEq:'',
                    LifetimeMedals: '',
                    QuestsCompleted: '',
                    ChallengesLevels: '',
                    BuildingsMilestones: '',
                    PetStars: '',
                    PetBonds: '',
                    EggsOpened: '',
                    PetAmber:'',
                    HeroStars: '',
                    ConqTown: '',
                    ConqRound: '',
                    Tiger: '',
                    Dragon: '',
                    Academies: '',
                    DanGPS:'',
                    DanElixir: '',
                    DanSS:'',
                    DanFF:'',
                })
              }
            }catch(error){console.log(error.message)}
        }

    return (

        <div>
            <form onSubmit={handleRegister}>
            <h2>Register</h2>
            <input type='text' id='login' placeholder='Login' onChange={(e)=>setLogin(e.target.value)}></input>
            <input type='password' id='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
            <input type='password' id='password' placeholder='Confirm Password' onChange={(e)=>setConfirm(e.target.value)}></input>
            
            <button type='submit' id='submitReg'>Register</button>
            </form>
        </div>
    )
}

export default Register