import React, {useEffect, useState} from 'react';
import {auth,db} from './firebase'
import {doc, getDoc, updateDoc} from 'firebase/firestore'

const Edit = () =>{
    const [userDetails, setUserDetails] = useState(null)
    const [newData, setNewData] = useState(null)
    
    const fields = ['achievements', 'elixirBonus', 'goldPerCoin', 'elixirPerCoin', 'GodaiVoid', 'GodaiWind', 'GodaiFire', 'GodaiWater', 'KinomoEq', 'KatanaEq', 'KabutoEq', 'GetaEq', 'KoteEq', 'LifetimeMedals', 'QuestsCompleted', 'ChallengesLevels', 'BuildingsMilestones', 'PetStars', 'PetBonds', 'EggsOpened', 'PetAmber', 'HeroStars', 'ConqTown', 'ConqRound', 'Tiger', 'Dragon', 'Academies', 'DanGPS', 'DanElixir', 'DanSS', 'DanFF'];
    const [formData, setFormData] = useState({});
  
    const handleInputChange = (e, fieldName) => {
      setFormData({
        ...formData,
        [fieldName]: e.target.value
      });
    };
    const handleEdit = async(e)=>{
        e.preventDefault()
        
        try{
            const user = auth.currentUser
            const stat = e.target.name
            const userRef=doc(db,'Users',user.uid)
            updateDoc(userRef,{
                [stat]:newData
            })
            console.log(e)
        }catch(error){console.log(error.message)}

    }

    return(
        <div>
      {fields.map((field, index) => (
        <div key={index}>
          <label htmlFor={field}>{field}</label><br/>
          <input 
            type='text' 
            id={field} 
            value={formData[field] || ''} 
            onChange={(e) => handleInputChange(e, field)} 
          />
          <button type='button' onClick={() => handleEdit(field)}>
            Update
          </button>
        </div>
      ))}
    </div>
        // <div>
        //     <div>
        //         <label for='achievements'>achievements</label><br/>
        //         <input type='text' id='achievements' onChange={(e)=>setNewData(e.target.value)}></input>
        //         <button type='submit' name='achievements' onClick={handleEdit}>update</button>
        //     </div>
        //     <div>
        //         <label for='elixirBonus'>elixirBonus</label><br/>
        //         <input type='text' id='elixirBonus' onChange={(e)=>setNewData(e.target.value)}></input>
        //         <button type='submit' name='elixirBonus' onClick={handleEdit}>update</button>
        //     </div>
        //     <div>
        //         <label for='goldPerCoin'>goldPerCoin</label><br/>
        //         <input type='text' id='goldPerCoin' onChange={(e)=>setNewData(e.target.value)}></input>
        //         <button type='submit' name='goldPerCoin' onClick={handleEdit}>update</button>
        //     </div>

        // </div>
    )
}

export default Edit