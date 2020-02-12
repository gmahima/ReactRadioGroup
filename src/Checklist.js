import React, {useContext, useEffect} from 'react'
import {RadioContext} from './context'

export default function Checklist(props) {
    const handleChange = (e) =>{
        console.log(e.target.value + " " + e.target.checked)
        // context.actions.select(e.target.value)
        context.actions.handleAnimeState(e.target.value, e.target.checked)
        console.log(context.anime)
    }
    
    const context = useContext(RadioContext)
    return(
        <div>
            {
                context.anime.map(
                    (a) => {
                        return(
                            <label>
                                <input type="checkbox"
                                    value={a.id}
                                    checked={a.checked}
                                    onChange={handleChange}
                                />
                                {a.name}
                            </label>)
                    }
                )
            }
        </div>
    )
}