import Component from './Component.js';
import WrapMethod from './WrapMethod.js';
import * as allMethod from "../../utils/index.js";

class Element extends Component {
    constructor(options, validator, element) {
        super(options, validator);
        this.options = options;
        this.validator = validator;
        this.attributes = null;
        this.wrap = null;
        this.value = element.value;

        // get all attributes in DOM of element and value of this element
        if (element)
        {
            var attributes = {}; 
            $.each( element.attributes, function( index ) {
                const attr = element.attributes[index];
                // else add this attr to atributes
                attributes[ attr.name ] = attr.value;
            } ); 
            this.attributes = attributes;
        }

        // need decorator method after if attribute == method name
        var wrapTemp = null;
        for (let data in this.attributes)
        {
            if (typeof allMethod[data] !== "undefined")
            {
                if (this.wrap === null)
                {
                    this.wrap = new WrapMethod(allMethod[data],attributes[data]);
                    wrapTemp = this.wrap;
                }else{
                    const wrap = new WrapMethod(allMethod[data],attributes[data]);
                    wrapTemp.setWrap(wrap);
                    wrapTemp = wrap;
                }
            }
        }
    }

    validate(){
        if (this.wrap !== null)
        {
            this.wrap.validate(this.value);
        }
    }
}

export default Element;
