import { EmailValidatorAdapter } from "./validation/email-validator-adapter";
import { EmailValidatorProtocol } from "./validation/email-validator-protocol";

function validaEmail(emailValidator: EmailValidatorProtocol, email: string): void {
    if(emailValidator.isEmail(email)){
        console.log("Valid email");
    } else {
        console.log("Invalid email");
    }
}

validaEmail(new EmailValidatorAdapter(), "antunes.f@gmail.com");


