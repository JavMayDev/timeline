import { scrollable, draggableLine } from './domElements'
import { docsLineHeight, dayWidth } from './constants'
import { docsRange } from './getDocs'
import docTypes from './mocks/docTypes'

const docsLineWidth = (docsRange + 1) * dayWidth
scrollable.style.height = docsLineHeight
draggableLine.style.top = docsLineHeight

docTypes.forEach(type => {
    const typeLine = document.createElement('div')
    typeLine.style.width = docsLineWidth + 'px'
    typeLine.classList.add('tl-type-line')
    typeLine.id = 'tl-type-line' + type.name
    typeLine.style.backgroundColor = type.color

    typeLine.onmouseover = event => setGrowHeights(event.target, true)
    typeLine.onmouseleave = event => setGrowHeights(event.target, false)

    scrollable.appendChild(typeLine)
})

function setGrowHeights(target, growing) {
    target.style.flexGrow = growing ? 2 : 1

    const height =
        (scrollable.offsetHeight / (docTypes.length + 1)) * (growing ? 2 : 1) +
        'px'
    Array.from(target.childNodes).forEach(typeDay => {
        typeDay.style.height = height
    })
}

const datesLine = document.createElement('div')
datesLine.style.width = docsLineWidth + 'px'
datesLine.id = 'tl-dates-line'
scrollable.appendChild(datesLine)
