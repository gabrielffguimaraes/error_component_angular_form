import {AbstractControl, FormControl} from '@angular/forms';

export class Validations {
  static hasLetterS(): any {
     const validator = (control: FormControl) => {
      if (control.value.indexOf('s') === -1) {
        return {
          hasLetterS: true
        };
      }
      return null;
     };
     return validator;
  }
  static getError(control: AbstractControl, label: string, key: string): any {
    if (key !== '') {
      return {
        required: ` * ${label} Esse campo é obrigatório`,
        email: `E-mail inválido`,
        hasLetterS: `* ${label} deve conter a letra S`
      }[key];
    } else {
      return '';
    }
  }
}
