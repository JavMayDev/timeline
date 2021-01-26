import docTypes from './mocks/docTypes'
import { dayWidth, monthNames } from './constants'

export default (docs, date, dayIndex) => {
    docTypes.forEach(type => {
        const typeDocs = docs.filter(doc => doc.type == type.id)
        if (typeDocs.length > 0) {
            const x = dayWidth * dayIndex + 'px'

            const typeLine = document.getElementById('tl-type-line' + type.name)

            const typeDay = document.createElement('div')
            typeDay.classList.add('tl-type-day')
            typeDay.style.transform = 'translateX(' + x + ')'
            typeDay.style.width = dayWidth + 'px'
	    typeDay.style.height = typeLine.offsetHeight + 'px'

            typeDocs.forEach(doc => typeDay.appendChild(setDocWrapper(doc)))

            typeLine.appendChild(typeDay)

            const dateFoot = document.createElement('h3')
            dateFoot.style.left = x
            dateFoot.appendChild(
                document.createTextNode(
                    date.getDate() + '/' + monthNames[date.getMonth()]
                )
            )
            dateFoot.style.width = dayWidth + 'px'
            document.getElementById('tl-dates-line').appendChild(dateFoot)
        }
    })
}

function setDocWrapper(doc) {
    const docWrapper = document.createElement('div')
    docWrapper.classList.add('tl-doc-wrapper')
    docWrapper.appendChild(document.createTextNode(doc.content))
    return docWrapper
}
