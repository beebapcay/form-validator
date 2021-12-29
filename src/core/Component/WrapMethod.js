class WrapMethod {
    constructor(func, arg) {
        this.wrap = null;
        this.func = func;
        this.arg = arg;
    }

    setWrap(wrap) {
        this.wrap = wrap;
    }

    validate(value) {
        if (this.func(value, this.arg) === false) {
            console.log(this.func.name + " failed");
        }
        if (this.wrap !== null) {
            this.wrap.validate(value);
        }
    }
}

export default WrapMethod;