import {REGEX_NO_WHITESPACE} from "../../utils";
import ValidatorWithSingleInput from "./ValidatorWithSingleInput";

class ValidatorNoWhiteSpace extends ValidatorWithSingleInput {
  constructor(rule) {
    super(rule, REGEX_NO_WHITESPACE);
  }
}

export default ValidatorNoWhiteSpace;