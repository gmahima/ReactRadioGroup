import React, {useState, createContext} from 'react'
export const RadioContext = createContext(null);
export function Provider(props){
    const show = [{title: 'all', id: 'all'}, {title: 'checked', id: 'checked'}, {title: 'unchecked', id:'unchecked'}]

    const [selected, setSelected] = useState('all')
    const handleSelection = (id) => {
        setSelected(id)
    }
    const [anime,setAnime] = useState([{name: 'snk', id: '0snk', checked:false}, {name: 'gekkan shoujo nozaki kun', id:'gsnk', checked:false}, {name: 'wotakoi', id:'wotakoi3', checked:false}])
    const handleAnimeState = (id, checked) => {
        const n = anime.slice();
        for (let o of n) {
            if(o.id === id) {
                o.checked = checked;
                setAnime(n);
            }
        }
    }
    return(
        <RadioContext.Provider value={{
            show: show,
            selected: selected,
            anime: anime,
            actions: {
                select: handleSelection,
                 handleAnimeState: handleAnimeState
            }
        }} >{props.children}</RadioContext.Provider>
    )
}