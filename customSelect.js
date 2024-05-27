const helper = {
    get: {
        node: (selector) => {
            return document.querySelectorAll(selector)
        },
        options: (element) => {
            return Array.from(element.querySelectorAll('option')).filter((_, i) => i !== 0).map(x => x.innerText)
        },
        default: (element) => {
            return element.querySelector('option').innerText
        },
    },
    add: {
        class: (element, className) => {
            className.forEach(c => {
                element.classList.add(c)
            })
        },
        node: (parent, child) => {
            parent.appendChild(child)
        }
    }
}

class SelectBox {
    constructor(select, income) {
        this.input = helper.get.node(select)[0] || '#selectBox'

        this.wrapperClass = income?.wrapperClass.split(' ') || 'selectBox-wrapper'
        this.parentClass = income?.parentClass.split(' ') || 'selectBox-wrapper'
        this.childClass = income?.childClass.split(' ') || 'selectBox-child'
        this.buttonClass = income?.buttonClass.split(' ') || 'selectBox-button'
        this.textClass = income?.textClass.split(' ') || 'selectBox-button'
        this.iconClass = income?.iconClass.split(' ') || 'selectBox-icon'

        this.nodes = {
            icon: document.createElement('i'),
            wrapper: document.createElement('div'),
            parent: document.createElement('ul'),
            child: document.createElement('li'),
            text: document.createElement('span'),
            button: document.createElement('button'),
        }

        this.eventTrigger = []

        this.default = null
        this.options = null

        this.totalHeight = 0

        this.build()
    }

    fillClasses() {
        helper.add.class(this.nodes.wrapper, this.wrapperClass)
        helper.add.class(this.nodes.parent, this.parentClass)
        helper.add.class(this.nodes.icon, this.iconClass)
        helper.add.class(this.nodes.child, this.childClass)
        helper.add.class(this.nodes.button, this.buttonClass)
        helper.add.class(this.nodes.text, this.textClass)
    }

    getData() {
        this.default = helper.get.default(this.input)
        this.options = helper.get.options(this.input)
    }

    setupOptions() {
        this.options.forEach((option, i) => {
            let dummy = this.nodes.child.cloneNode(true)

            dummy.innerHTML = option
            dummy.value = i + 1
            dummy.style.cursor = 'pointer'

            this.eventTrigger.push(dummy)

            helper.add.node(this.nodes.parent, dummy)
        })
    }

    setupButton() {
        this.nodes.text.innerHTML = this.default
        this.nodes.button.style.cssText = 'display: flex; justify-content: space-between; align-items: center'
        this.nodes.button.setAttribute('type', 'button')

        helper.add.node(this.nodes.button, this.nodes.text)
        helper.add.node(this.nodes.button, this.nodes.icon)
    }

    listen() {
        this.nodes.button.addEventListener('click', () => {
            this.nodes.button.classList.toggle('active')

            if (this.nodes.button.classList.contains('active')) {
                this.nodes.parent.style.height = this.totalHeight + 'px'
            } else {
                this.nodes.parent.style.height = 0 + 'px'
            }
        })

        this.eventTrigger.forEach(each => {
            each.addEventListener('click', () => {
                this.nodes.text.innerHTML = each.innerHTML
                this.input.selectedIndex = each.getAttribute('value')
            })
        })

        document.addEventListener('click', (e) => {
            if (e.target != this.nodes.button && e.target != this.nodes.child) {
                this.nodes.parent.style.height = 0 + 'px'
                this.nodes.button.classList.remove('active')
            }
        })
    }

    addNodes() {
        helper.add.node(this.nodes.wrapper, this.nodes.button)
        helper.add.node(this.nodes.wrapper, this.nodes.parent)

        this.input.before(this.nodes.wrapper)
        this.input.style.display = 'none'
    }

    calcHeight() {
        this.totalHeight = this.nodes.parent.offsetHeight

        this.nodes.parent.style.overflow = 'hidden'
        this.nodes.parent.style.height = 0
    }

    build() {
        this.getData()
        this.fillClasses()
        this.setupOptions()
        this.setupButton()
        this.addNodes()
        this.calcHeight()
        this.listen()
    }
}

export { SelectBox }