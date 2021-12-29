import Form from "./core/Component/Form.js";
var form = document.getElementById("basic-form");
form.addEventListener('submit', event => {
  event.preventDefault();
  var form1 = new Form(null,null,form);
  form1.validate();
});



