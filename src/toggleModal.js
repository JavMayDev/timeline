import { modal } from './domElements'

export default imgSrc => {
    modal.classList.add('modal-toggled')
    modal.onclick = () => {
	modal.classList.remove('modal-toggled')
	modal.removeChild(img)
    }
    const img = new Image()
    img.src = imgSrc
    modal.appendChild(img)
}
