import { scrollable, draggable, draggableLine, canvas } from './domElements'
import { scale } from './constants'

var draggableDragging = null

// is dragging
document.getElementById('tl-draggable').onmousedown = () =>
    (draggableDragging = draggable)
document.getElementById('tl-draggable').ontouchstart = () =>
    (draggableDragging = draggable)

// stop dragging
document.onmouseup = () => (draggableDragging = null)

// start dragging
document.onmousemove = ({ clientX }) => drag(clientX)
document.ontouchmove = ({ touches }) => drag(touches[0].clientX)

// move draggable to clientX position
function drag(clientX) {
    if (draggableDragging) {
        let left = clientX + draggableLine.scrollLeft
        draggableDragging.style.left = left + 'px'
        scrollable.scroll({ left: left * scale })

	scrollDraggableLine()
    }
}

// this is to checkout all the line at dragging
// (actually hard to explain)
function scrollDraggableLine() {
    const overflowed = canvas.offsetWidth - draggableLine.offsetWidth
    draggableLine.scrollLeft =
        ((parseInt(draggable.style.left.split('p')) -
            draggableLine.scrollLeft) /
            draggableLine.offsetWidth) *
        overflowed
}

// move draggable when docsLine scrolling
scrollable.onscroll = event => {
    if (!draggableDragging) {
        draggable.style.left = event.target.scrollLeft / scale + 'px'
	scrollDraggableLine()
    }
}
