import {REGEX_IPV4} from "../../utils";
import ValidatorWithSingleInput from "./ValidatorWithSingleInput.js";

class ValidatorIPV4 extends ValidatorWithSingleInput {
  constructor(rule) {
    super(rule, REGEX_IPV4);
  }
}

export default ValidatorIPV4;