import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        // return a function to un-subscribe from the collection
        const unsub = projectFirestore
            .collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = []
                snap.forEach((doc) => {
                    documents.push({ ...doc.data(), id: doc.id })
                })
                setDocs(documents)
            })

        // clean-up function
        return () => unsub()
    }, [collection])

    return { docs }
}

export default useFirestore