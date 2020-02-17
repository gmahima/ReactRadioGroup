import React, {useContext, useEffect} from 'react'
import {RadioContext} from './context'

export default function Checklist(props) {
    const handleChange = (e) =>{
        console.log(e.target.value + " " + e.target.checked)
        context.actions.handleAnimeState(e.target.value, e.target.checked)
        console.log(context.anime)
    }
    
    const context = useContext(RadioContext)
    let myAnime = context.anime;
    // if(context.selected === 'all'){
    //     myAnime = context.anime;
    // }
    // else if(context.selected === 'checked'){
    //     myAnime = context.anime.filter((a) => a.checked === true)
    // }
    // else {
    //     myAnime = context.anime.filter((a) => a.checked === false)
    // }
    
    return(
        <div>
            { 
                props.myAni.map(
                    (a) => {
                        return(
                            <label>
                                <input type="checkbox"
                                    value={a.id}
                                    defaultChecked={a.checked}
                                    onChange={handleChange}
                                />
                                {a.name}
                            </label>
                        )
                    }
                )
            }
        </div>
    )
}