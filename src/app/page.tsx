'use client'
import React from 'react'
export default function Home(){
  const [token, setToken] = React.useState(null);
  
  const handleData = async () => {

    const formData = new URLSearchParams();
    formData.append('grant_type','client_credentials');
    formData.append('client_id',`${process.env.NEXT_PUBLIC_CLIENT_ID}` );
    formData.append('client_secret',`${process.env.NEXT_PUBLIC_CLIENT_SECRET}`);
    
    
    const dato = await fetch('https://accounts.spotify.com/api/token',{
        method: 'POST',
        headers: {
          "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: formData
      })
        const result = await dato.json()
        console.log(result)
        setToken(result)
    }


    const handleArtistData = async () => {      
      const dato = await fetch('https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb',{
          method: 'GET',
          headers: {
            "Authorization" : `Bearer ${token}`
          }
        })
          
          console.log(await dato.json())
      }
    
    


  

  return (
    <main className="">
      <p>Hola mundo!</p>
      <button onClick={handleData}>Obtener token de acceso</button>
      <button onClick={handleArtistData}>Buscar datos de artista</button>
    </main>
  )
}
