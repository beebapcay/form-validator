import {REGEX_NUMBER_ONLY} from "../../utils";
import ValidatorWithSingleInput from "./ValidatorWithSingleInput";

class ValidatorNumberOnly extends ValidatorWithSingleInput {
  constructor(rule) {
    super(rule, REGEX_NUMBER_ONLY);
  }
}

export default ValidatorNumberOnly;