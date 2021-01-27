import { minDate, maxDate, docsRange } from './getDocs'
import insertDocs from './insertDocs'
import getDocsByDate from './getDocsByDate'
import { canvas, draggableLine } from './domElements'
import { monthNames, scale, dayWidth, canvasHeight } from './constants'
// import docTypes from './mocks/docTypes'

// set canvas
canvas.width = ((docsRange + 1) * dayWidth) / scale + 20
canvas.height = canvasHeight
const ctx = canvas.getContext('2d')

let i = 0 // yeah, i know
for (
    let dateIndex = new Date(minDate);
    dateIndex.getTime() <= maxDate.getTime();
    dateIndex.setDate(dateIndex.getDate() + 1)
) {
    // get how left-spaced put each thing in the scaled line
    const x = (i * dayWidth) / scale + 10

    drawDate(x)

    // when new month
    if (dateIndex.getDate() == 1) printMonthName(dateIndex.getMonth(), x)

    const dateDocs = getDocsByDate(dateIndex)
    if (dateDocs.length > 0) {
        insertDocs(dateDocs, dateIndex, i)

        // insert doc previews according to type in the scaled line
        docTypes.forEach((type, typeIndex) => {
            if (dateDocs.find(doc => doc.type == type.id))
                drawDocType(x, type, typeIndex)
        })
    }

    i++
}

function drawDate(x) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvasHeight)
    ctx.stroke()
}

function drawDocType(x, type, typeIndex) {
    ctx.beginPath()
    ctx.arc(
        x,
        (canvasHeight / docTypes.length) * typeIndex + 10,
        5,
        0,
        Math.PI * 2
    )
    ctx.fillStyle = '#' + type.color
    ctx.fill()
    ctx.stroke()
}

function printMonthName(monthIndex, x) {
    const monthSpan = document.createElement('span')
    monthSpan.appendChild(
        document.createTextNode(
            monthNames[monthIndex].substring(0, 3).toUpperCase()
        )
    )
    draggableLine.appendChild(monthSpan)
    monthSpan.style.left = x - monthSpan.offsetWidth / 2 + 'px'
    monthSpan.style.top = canvasHeight + 20 + 'px'
}
