import { scrollable, draggableLine } from './domElements'
import { docsLineHeight, dayWidth } from './constants'
import { docsRange } from './getDocs'
import docTypes from './mocks/docTypes'

const docsLineWidth = docsRange * dayWidth
scrollable.style.height = docsLineHeight
draggableLine.style.top = docsLineHeight

docTypes.forEach((type, i) => {
    const typeLine = document.createElement('div')
    typeLine.style.width = docsLineWidth + 'px'
    typeLine.style.height =
        'calc(' + docsLineHeight + '/' + docTypes.length + ')'
    typeLine.style.position = 'absolute'
    typeLine.style.top =
        'calc(' + (docsLineHeight + '/' + docTypes.length) + '*' + i + ')'
    typeLine.style.backgroundColor = type.color
    typeLine.style.zIndex = 0

    scrollable.appendChild(typeLine)
})
