import { docsLine } from './domElements'
import { dayWidth, monthNames } from './constants'
import docTypes from './mocks/docTypes'

export default (docs, date, dayDiff) => {
    // set the wrapper
    const dayWrapper = document.createElement('div')
    dayWrapper.classList.add('tl-day-wrapper')
    dayWrapper.style.width = dayWidth + 'px'
    dayWrapper.style.height = '100%'
    dayWrapper.style.left = dayDiff * dayWidth + 'px'
    dayWrapper.style.zIndex = 1

    // put date
    const headDate = document.createElement('h3')
    headDate.style.bottom = '0px'
    headDate.appendChild(
        document.createTextNode(
            date.getFullYear() + '-' + monthNames[date.getMonth()] + '-' + date.getDate()
        )
    )
    dayWrapper.appendChild(headDate)

    // append documents
    docs.forEach(doc => dayWrapper.appendChild(htmlFormattedDoc(doc)))

    docsLine.appendChild(dayWrapper)
}

function htmlFormattedDoc(doc) {
    var mainWrapper = document.createElement('div')
    mainWrapper.style.backgroundColor = docTypes.find(type => type.id == doc.type).color
    mainWrapper.classList.add('tl-doc')
    mainWrapper.appendChild(document.createTextNode(doc.content))
    return mainWrapper
}
