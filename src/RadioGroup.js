import React, {useContext, useEffect} from 'react'
import {RadioContext} from './context'

export default function RadioGroup(props){
    const context = useContext(RadioContext)
    const handleOptionChange = (e) => {
        console.log(e.target.value)
        context.actions.select(e.target.value)

    }
    return(
        <div>
            {
                context.anime.map((a) => {
                    return(<label>
                        <input type="radio"
                    value={a.id}
                     checked={context.selected===a.id}
                     onChange={handleOptionChange}
                     />{a.title}</label>)
                })
            }
        </div>
    )

}