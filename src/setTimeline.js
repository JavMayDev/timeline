import { minDate, maxDate, docsRange } from './getDocs'
import setDayWrapper from './setDayWrapper'
import getDocsByDate from './getDocsByDate'
import { canvas } from './domElements'
import { scale, dayWidth } from './constants'

canvas.width = (docsRange * dayWidth) / scale
const ctx = canvas.getContext('2d')

let i = 0 // yeah, i know
for (
    let dateIndex = new Date(minDate);
    dateIndex <= maxDate;
    dateIndex.setDate(dateIndex.getDate() + 1)
) {

    drawDate(i)

    const dateDocs = getDocsByDate(dateIndex)
    if (dateDocs.length > 0) setDayWrapper(dateDocs, dateIndex, i)

    i++
}


function drawDate (dayDiff) {
    ctx.beginPath()
    const scaledDay = (dayDiff * dayWidth) / scale
    ctx.moveTo(scaledDay, 10)
    ctx.lineTo(scaledDay, 90 )
    ctx.stroke()
}
