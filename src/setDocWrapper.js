import toggleModal from './toggleModal'

export default doc => {
    const docWrapper = document.createElement('div')
    docWrapper.classList.add('tl-doc-wrapper')

    // image
    if (doc.image_url) {
        const docImg = document.createElement('img')
        docImg.src = doc.image_url
	docImg.onclick = () => toggleModal(doc.image_url)
        docWrapper.appendChild(docImg)
    }

    // info
    const docInfo = document.createElement('div')
    docInfo.classList.add('tl-doc-info')
    docInfo.appendChild(document.createTextNode(doc.content))
    docWrapper.appendChild(docInfo)

    // country tag
    if(doc.country) {
	const docCountry = document.createElement('span')
	docCountry.appendChild(document.createTextNode(doc.country))
	docInfo.appendChild(docCountry)
    }

    // source
    if (doc.source) {
        const docLink = document.createElement('a')
	docLink.target = '_blank'
        docLink.href = doc.source
	const btn = document.createElement('button')
	btn.appendChild(document.createTextNode('Fuente'))
	docLink.appendChild(btn)
	docInfo.appendChild(docLink)
    }

    return docWrapper
}
