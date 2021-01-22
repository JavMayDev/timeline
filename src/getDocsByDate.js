import { docs } from './getDocs'

export default date =>
    docs.filter(doc => {
        if (doc.date.getTime() === date.getTime()) return doc
    })
