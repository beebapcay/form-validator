class WrapMethod {
    constructor(func,arg) {
        this.wrap = null;
        this.func = func;
        this.arg = arg;
    }

    setWrap(wrap){
        this.wrap = wrap;
    }

    validate(value, errors){
        
    }
}

export default WrapMethod;