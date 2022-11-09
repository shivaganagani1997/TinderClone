import React from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

const TinderCards = () => {
  const [profiles, setProfiles] = React.useState([
    {
      name: 'VIRAT KOHLI',
      url:"https://tse1.mm.bing.net/th?id=OIP.KBMTvzywfmaiNxRYsShvqAHaE8&pid=Api&P=0"
    },
    {
      name:'MS DHONI',
      url:'https://tse1.mm.bing.net/th?id=OIP.sZIpYrRJV4_mCFtPwpws8QHaE8&pid=Api&P=0'
    },
    {
      name:'SURESH RAINA',
      url:'https://tse4.mm.bing.net/th?id=OIP.rV9PGjLkARVCrtjta53h8gHaFQ&pid=Api&P=0'
    },
    {
      name:'ROHITH SHARMA',
      url:'https://tse3.mm.bing.net/th?id=OIP.C01uEUrPdc5NV4RPGnG9-wHaFo&pid=Api&P=0'
    }
  ]);

  return (
    <div className='card-container'>
      {
        profiles.map( profile => (
          <TinderCard
          className='swipe'
          key={profile.name}
          preventSwipe={['up','down']}
          
          >
            <div 
            style={{ backgroundImage: `url(${profile.url})`}}
            
            className='card'>
              <h2>{profile.name}</h2>
              </div>
           </TinderCard>
        ))
}
    </div>
  )
}

export default TinderCards