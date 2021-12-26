import Component from './Component';

class Element extends Component {
    constructor(options, validator, element) {
        this.options = options;
        this.validator = validator;
        this.attributes = null;

        // get all attributes in DOM of element and value of this element
        if (element)
        {
            var attributes = {}; 
            $.each( element.attributes, function( index, attr ) {
                // get name of element
                if (attr.name === "name"){
                    this.name = attr.value;
                    return; // continue
                }
                // get id of element
                if (attr.name === "id"){
                    this.id = attr.value;
                    return; // continue
                }
                // get type of element
                if (attr.name === "type"){
                    this.type = attr.value;
                    return; // continue
                }
                // else add this attr to atributes
                attributes[ attr.name ] = attr.value;
            } ); 
            this.attributes = attributes;
        }

        // need decorator method after if attribute == method name
    }

    validate(){

    }
}

export default Element;
