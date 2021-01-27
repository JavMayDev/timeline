// import docs from './mocks/test'
import { milisecInDay } from './constants'

// if(!docs) var docs

var maxDate = null,
    minDate = null
docs.forEach(doc => {
    doc.date = new Date(doc.date + 'T00:00:00')
    if (doc.date < minDate || !minDate) minDate = doc.date
    if (doc.date > maxDate || !maxDate) maxDate = doc.date
})

// how many days are between the max and min
const docsRange = Math.trunc((maxDate - minDate) / milisecInDay)

export { maxDate, minDate, docsRange }
