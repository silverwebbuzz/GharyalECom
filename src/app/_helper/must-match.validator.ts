import { AbstractControl } from '@angular/forms';

export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {
        let password = control.get('password').value;

        let confirmpassword = control.get('confirmpassword').value;
        if (!confirmpassword) {
            return true;
        }
        
        if (password != confirmpassword) {
            control.get('confirmpassword').setErrors({ confirmpassword: true });
        } else {
            return null
        }
    }
}