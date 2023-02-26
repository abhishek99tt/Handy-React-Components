import React from 'react'
import ContentLoader, {
    Facebook,
    Instagram,
    List,
    BulletList,
  } from "react-content-loader";
  import { useEffect, useState } from "react";

const CustomLoader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const t = setTimeout(() => {
        setLoading(false)
      },3000)
  
      return () => {
        clearTimeout(t)
      }
    }, [])
  return (
    <div className="App">
        {loading ? (
                  <header className="App-header">
                  <h1>List</h1>
                  <List />
                  <h1>Bullet List</h1>
                  <BulletList />
                  <h1>Facebook</h1>
                  <Facebook />
                  <h1>Instagram</h1>
                  <Instagram />
                  <h1>Custom Loader</h1>
                  <ContentLoader viewBox="0 0 380 70">
                    {/* Only SVG shapes */}    
                    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                  </ContentLoader>
                </header>
        ) : (
            <div> Content </div>
        )}

    </div>
  )
}

export default CustomLoader