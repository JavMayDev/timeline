import { docsLine } from './domElements'
import { dayWidth } from './constants'

export default (docs, date, dayDiff) => {
    // set the wrapper
    const dayWrapper = document.createElement('div')
    dayWrapper.classList.add('tl-day-wrapper')
    dayWrapper.style.width = dayWidth + 'px'
    dayWrapper.style.left = dayDiff * dayWidth + 'px'

    // put date
    const headDate = document.createElement('h3')
    headDate.appendChild(
        document.createTextNode(
            date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
        )
    )
    dayWrapper.appendChild(headDate)

    // append documents
    docs.forEach(doc => dayWrapper.appendChild(htmlFormattedDoc(doc)))

    docsLine.appendChild(dayWrapper)
}

function htmlFormattedDoc(doc) {
    var mainWrapper = document.createElement('div')
    mainWrapper.classList.add('tl-doc')
    mainWrapper.appendChild(document.createTextNode(doc.content))
    return mainWrapper
}
