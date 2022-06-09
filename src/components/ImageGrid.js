import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = () => {
    const { docs } = useFirestore('images')
    const images = docs.map((doc) => {
        return (
            <div className="img-wrap" key={doc.id}>
                <img src={doc.url} alt="uploaded" />
            </div>
        )
    })
    console.log(docs)
    return <div className="img-grid">{docs && images}</div>
}

export default ImageGrid
