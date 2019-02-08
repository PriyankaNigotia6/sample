import { Directive ,ElementRef , HostListener ,HostBinding,Renderer2 ,Input } from '@angular/core';

@Directive({
  selector: '[appAdvanceattdir]'
})
export class AdvanceattdirDirective {
  constructor( private elref : ElementRef, private render : Renderer2) {   
  }
@Input() defaultColor: string;
@Input('appAdvanceattdir') highligtcolor : string;
//hostbing is for host element set property(property binding)
@HostBinding('style.border') border: string;


// check sampleone.componrnt.html for its uses..and its ts file for input property binding.
//hostlinster for hostelement event binding  
@HostListener('mouseenter') onMouseEnter()
  {
    //this.highlight('green');
    //here in method passing parameters for color
    this.highlight(this.highligtcolor || this.defaultColor  || 'green');
    this.border='2px solid black';
  } 

  //another approach without highlight method
  //@HostListener('mouseenter') onMouseEnter(){
   // this.render.setStyle(this.elref.nativeElement, 'background-color', 'blue');
 // }
 
  //can use renderer and use its default methods in hostlistner mouse events also and can remove created method highlight see ashish ex.
  @HostListener('keypress') onkeypress()
  {
    this.render.setProperty(this.elref.nativeElement,'value','coming from renderer');
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.highlight(null);
    this.border='0px';
  }

  //here in all hostlistner argument should be same as written not change thier actual name
  @HostListener('click') onnnclick() {
    console.log("host element is clicked");
    window.alert("host element is clicked so i am coimg from directive..");
  }
  
  

  //this is hightlight method
 private highlight(color :string) {
    this.elref.nativeElement.style.backgroundColor = color;
  }
}
