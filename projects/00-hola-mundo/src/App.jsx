 import './App.css'
 import { TwitterFollowCard } from './TwitterFollowCard'
 const users = [
  {
    userName: 'eugenioand18',
    name: 'Eugenio Escalante',
    isFollowing: true
  },
  {
    userName: '1kagro',
    name: 'Fabian Lozano',
    isFollowing: false
  }
 ]
// la key siempre debe ser unica, puede ser la llave primaria de lo que se obtenga de la base de datos

 export function App(){
  const formartUserName = (userName) =>`@${userName}`
    return(
        <section className='App'>
        {/*   <TwitterFollowCard initialIsFowllowing formatUsername={formartUserName} username="eugenioand18" >  Eugenio Escalante</TwitterFollowCard>
          <TwitterFollowCard  initialIsFowllowing={false} formatUsername={formartUserName} username="1kagro" name= "Fabian Lozano"></TwitterFollowCard> */}
          {
            users.map(user =>{
              const {userName, name, isFollowing} = user
              return(
                <TwitterFollowCard
                key={userName}
                username = {userName}
                initialIsFowllowing={isFollowing}
                formatUsername = {formartUserName}
                >
                  {name}
                </TwitterFollowCard>
              )
            })
          }

        
        </section>
      
    )
}