class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector)
        const length = result.length
        for (let i=0;i<length; i++) {
            this[i] = result[i]
        }
        this.length = length1
    }
    get(index) {
        return this[index]
    }
    each(fn){
        for (let i=0; i<this.length; i++) {
            const elem = this[i]
            fn(elem)
        }
    }
    on(tupe,fn) {
        return this.each(elem => {
            elem.addEventLister(type,fn,false)
        })
    }  
}