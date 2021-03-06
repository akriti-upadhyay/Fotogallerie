import React, { useState } from 'react'
import ImageGrid from './ImageGrid'
import Modal from './Modal'
import Title from './Title'
import UploadForm from './UploadForm'

function App() {
    const [selectedImg, setSelectedImg] = useState(null)
    return (
        <div className="App">
            <Title />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && (
                <Modal
                    selectedImg={selectedImg}
                    setSelectedImg={setSelectedImg}
                />
            )}
        </div>
    )
}

export default App

