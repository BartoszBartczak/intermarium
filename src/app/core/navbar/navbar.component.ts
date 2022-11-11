import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable,} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  Kontakt:boolean = true
  //searchForm: any;

  constructor() {  }

  clickEvent(){
    this.Kontakt=!this.Kontakt;
    
  }

  @Input() set query(query: string | null) {
    const field = this.searchForm.get('query')
    if (!(field instanceof FormControl)) return
    field.setValue(query, {})
  }

  badword = 'Putin';
  censor = (control: AbstractControl): ValidationErrors | null => {

    if (String(control.value).includes(this.badword))
      return {
        censor: { 'badword': this.badword }
      }
    
    return null
  }
  asyncCensor = (control: AbstractControl): Observable<ValidationErrors | null> => {
    

    return new Observable((observer) => {
      

      const handle = setTimeout(() => {
        const result = (String(control.value).includes(this.badword)) ? {
          censor: { 'badword': this.badword }
        } : null;
        
        observer.next(result)
        observer.complete()
      }, 500)

      return () => {
        
        clearTimeout(handle)
      }
    })
    
  }

  searchForm = new FormGroup({
    'query': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // this.censor
    ], [
      this.asyncCensor
    ]),
    'extras': new FormGroup({
      'type': new FormControl('słowo'),
      'markets': new FormArray([
        new FormGroup({
          'code': new FormControl('PL')
        })
      ])
    })
  })
  

  ngOnInit(): void {
    const queryField = this.searchForm.get('query')!

    const valueChanges = queryField.valueChanges
    const statusChanges = queryField.statusChanges

  }

  

}
