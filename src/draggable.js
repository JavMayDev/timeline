import { scrollable, draggable } from './domElements'
import { scale } from './constants'

var draggableDragging = null

// is dragging
document.getElementById('tl-draggable').onmousedown = () =>
    (draggableDragging = draggable)

// stop dragging
document.onmouseup = () => (draggableDragging = null)

// move draggable to mouse  position
document.onmousemove = ({ clientX }) => {
    if (draggableDragging) {
        let left = clientX
        console.log('style: ', parseInt())
        draggableDragging.style.left = left + 'px'
        scrollable.scroll({ left: left * scale })
    }
}

// move draggable when docsLine scrolling
scrollable.onscroll = event => {
    if (!draggableDragging)
        draggable.style.left = event.target.scrollLeft / scale + 'px'
}
