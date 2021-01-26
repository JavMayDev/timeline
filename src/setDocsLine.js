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

    typeLine.onmouseover = _ => growLine(typeLine, true)
    typeLine.onmouseleave = _ => growLine(typeLine, false)

    const typeTag = document.createElement('div')
    typeTag.classList.add('tl-type-tag')
    typeTag.appendChild(document.createTextNode(type.name))

    typeLine.appendChild(typeTag)

    scrollable.appendChild(typeLine)
})

function growLine(typeLine, growing) {
    typeLine.style.flexGrow = growing ? 2 : 1

    const height =
        ((scrollable.offsetHeight - datesLine.offsetHeight) /
            (docTypes.length + 1)) *
            (growing ? 2 : 1) +
        'px'
    Array.from(typeLine.childNodes).forEach(child => {
        if (child.classList.contains('tl-type-day')) {
            child.style.height = height
            child.style.pointerEvents = growing ? 'all' : 'none'
        }
    })
}

const datesLine = document.createElement('div')
datesLine.style.width = docsLineWidth + 'px'
datesLine.id = 'tl-dates-line'
scrollable.appendChild(datesLine)
