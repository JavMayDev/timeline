// import { docs } from './getDocs'

export default date =>
    docs.filter(doc => {
	// it cannot be just doc.date == date
	// or doc.date.getTime() == date.getTime()
	// because a javascript date weirdness
        if (
            doc.date.getFullYear() == date.getFullYear() &&
            doc.date.getMonth() == date.getMonth() &&
            doc.date.getDate() == date.getDate()
        )
            return doc
    })
