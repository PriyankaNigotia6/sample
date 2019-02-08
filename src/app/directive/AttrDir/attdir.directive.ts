import { Directive , ElementRef , OnInit } from '@angular/core';

@Directive({
  selector: '[appAttdir]'
})
export class AttdirDirective implements OnInit{

  constructor (private elref:ElementRef) { }

 ngOnInit()
 {
   console.log("in attribute directive");
 this.elref.nativeElement.style.backgroundColor = 'orange';
 }
}
