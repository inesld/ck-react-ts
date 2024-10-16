import React, { useEffect, useState } from 'react'

type Propos = {
    titre:string;
    contenu:string
  }

const Home: React.FC <Propos> = ({titre, contenu}) => {
    // const [first, setfirst] = useState(0)     JS 
    // const [first, setfirst] =  useState<number>(0)    TS 
    
    // useEffect(() => {
    
    //   c'est le meme en TS et JS 
    
    // }, [])
    
  return (
    <div>
           <h1>Homme Page</h1>
           <h3>{titre}</h3>
           <h4>{contenu}</h4>

    </div>
  )
}

export default Home
