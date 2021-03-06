import { scrollable, draggable, draggableLine, canvas } from './domElements'
import { scale } from './constants'
import { docsLineWidth } from './setDocsLine'

var dragging = false

// is dragging
document.getElementById('tl-draggable').onmousedown = dragStart
document.getElementById('tl-draggable').ontouchstart = dragStart
function dragStart() {
    document.body.style = 'user-select: none'
    dragging = true
}

// stop dragging
document.onmouseup = dragStop
document.ontouchcancel = dragStop
function dragStop() {
    document.body.style = 'user-select: auto'
    dragging = false
}

// start dragging
document.onmousemove = ({ clientX }) => drag(clientX)
document.ontouchmove = ({ touches }) => drag(touches[0].clientX)

// move draggable to clientX position
function drag(clientX) {
    if (dragging) {
        let left = clientX + draggableLine.scrollLeft
        draggable.style.left = left + 'px'
        scrollable.scroll({ left: left * scale })

        scrollDraggableLine()
    }
}

// this is to checkout all the line at dragging
function scrollDraggableLine() {
    // how much the of the draggable line is overflowed
    const overflowed = canvas.offsetWidth - draggableLine.offsetWidth

    draggableLine.scrollLeft =
        // how entirely is scrolled the docsLine times the overflowed draggable line part
        (scrollable.scrollLeft / docsLineWidth) * overflowed
}

// move draggable when docsLine scrolling
scrollable.onscroll = _ => {
    if (!dragging) {
        draggable.style.left = scrollable.scrollLeft / scale + 'px'
        scrollDraggableLine()
    }
}
