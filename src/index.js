import Form from "./core/Component/Form.js";

const form = document.getElementById("basic-form");
form.addEventListener('submit', event => {
    event.preventDefault();
    const form1 = new Form(null, null, form);
    form1.validate();
});
