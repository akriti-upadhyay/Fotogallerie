import React from 'react'
import ImageGrid from './ImageGrid'
import Title from './Title'
import UploadForm from './UploadForm'

const App = () => {
    return (
        <div className="App">
            <Title />
            <UploadForm />
            <ImageGrid />
        </div>
    )
}

export default App
