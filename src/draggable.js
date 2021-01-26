import { scrollable, draggable, draggableLine, canvas } from './domElements'
import { scale } from './constants'
var dragging = false


// is dragging
document.getElementById('tl-draggable').onmousedown = dragStart
document.getElementById('tl-draggable').ontouchstart = dragStart
function dragStart () {
    document.body.style = 'user-select: none'
    dragging = true
}

// stop dragging
document.onmouseup = dragStop
function dragStop () {
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
// (actually hard to explain)
function scrollDraggableLine() {
    const overflowed = canvas.offsetWidth - draggableLine.offsetWidth 
	+ draggable.offsetWidth 
    draggableLine.scrollLeft =
        ((parseInt(draggable.style.left.split('p')) -
            draggableLine.scrollLeft) /
            draggableLine.offsetWidth) *
        overflowed
}

// move draggable when docsLine scrolling
scrollable.onscroll = event => {
    if (!dragging) {
        draggable.style.left = event.target.scrollLeft / scale + 'px'
	scrollDraggableLine()
    }
}
