import { useState } from "react"
//los hubs le dan funcionalidad a los componentes
//useState la usaremos para saber si esta o no siguiendo a este usuario



export function TwitterFollowCard ({children,formatUsername, initialIsFowllowing,username = 'unknown'}) {
   /* const state = useState(false)
   const isFowllowing = state[0] // el valor del estado
   const setIsFollowing = state[1]//interruptor, cambiar de estado 
   El estado es independiente en cada elemento 
   */

   const [isFowllowing, setIsFollowing] = useState(initialIsFowllowing)
   const text = isFowllowing ? 'Siguiendo' : 'Seguir'
   const buttonClassName = isFowllowing
    ? 'tw-followCard-Button is-following'
    : 'tw-followCard-Button'

    const handleClick = () =>{
        setIsFollowing(!isFowllowing)
    } 

    return(
        <article className = 'tw-followCard'>
        <header className='tw-follorCard-header'>
        
        <img
        className='tw-follorCard-avatar' 
        src={`https://unavatar.io/github/${username}`}></img>
        <div className='tw-followCard-info'>
            <strong> {children}</strong>
            <span className='tw-followCard-inforUsername'>{formatUsername(username)}</span>
        </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-Button-text">{text}</span>
            <span className="tw-followCard-Button-stopFollow">Dejar de seguir</span>
         
            </button>
        </aside>
    </article>
    )
}