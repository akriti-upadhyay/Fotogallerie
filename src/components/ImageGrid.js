import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images')
    const images = docs.map((doc) => {
        return (
            <div className="img-wrap" key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
            >
                <img src={doc.url} alt="uploaded" />
            </div>
        )
    })
    return <div className="img-grid">{docs && images}</div>
}

export default ImageGrid
