import React, {useContext, useEffect} from 'react'
import {RadioContext} from './context'
import Checklist from './Checklist'

export default function RadioGroup(props){
    const context = useContext(RadioContext)
    const handleOptionChange = (e) => {
        console.log("radio:" + e.target.value)
        context.actions.select(e.target.value)

    }
    let myAnime = context.anime;
    if(context.selected === 'all'){
        myAnime = context.anime;
    }
    else if(context.selected === 'checked'){
        myAnime = context.anime.filter((a) => a.checked === true)
    }
    else {
        myAnime = context.anime.filter((a) => a.checked === false)
    }
    return(
        <div>
            {
                context.show.map((a) => {
                    return(<label>
                        <input type="radio"
                    value={a.id}
                     checked={context.selected===a.id}
                     onChange={handleOptionChange}
                     />{a.title}</label>
                    )
                })
            }
            <Checklist myAni = {myAnime}></Checklist>

        </div>
    )

}