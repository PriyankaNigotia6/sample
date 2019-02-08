import { Component, OnInit , Input, Output, EventEmitter,ViewEncapsulation,AfterViewInit,ViewChild} from '@angular/core';



@Component({
  selector: 'app-sampleone',
  templateUrl: './sampleone.component.html',
  //template: '<h1>Hello SampleOne</h1> <h2> second type style</h2> ',
  styleUrls: ['./sampleone.component.css',
             '../dashboard/dashboard.component.css']
  //styles: ['h1 { background-color: pink;}'],
  //in inline style to check shadow dom open dev tool element section and in style tag u can see diff in None,native and emulated
 // encapsulation: ViewEncapsulation.Emulated
  
})
export class SampleoneComponent implements  AfterViewInit {
num:number;

testvalue:string;
newmsg:string = 'i am child clicked msg on output property binding';
//can also use alias aliasMessage for message name if using then by this name we will bind property in other component..
@Input('aliasMessage') message:string;
// here outdisplay is custom event used in custom element in event binding in dashboard..
@Output() outdisplay = new EventEmitter<string>();

//emiting event using event emiter to other component using method.
emitevent()
{
this.outdisplay.emit(this.newmsg);
}

//we can not access element by id so using #local ref and viewchild we access element to change..
@ViewChild('myinput') myInput;

color='green';
door=["long","short","medium"];
buidings = {'key1':'floor1','key2':'floor2','key3':'floor3','key4':'floor4'};
  allPersons = [
    {name: 'chotu', age: '25'},
    {name: 'baby', age: '23'},
    {name: 'kuhu', age: '1'},
    {name: 'Radha', age: '21'},	 
  ];
  
  //can not access like this we have to use viewChild for this using template ref variable.
  //document.getElementById("myindia").innerText="hello India";

 /* top = function (){
    setTimeout(function() {  
      console.log("i will gone");
      this.num = 10;
      alert("hello");
   }, 500);
  
 } */

 top =  function() {
  setTimeout( () => {    //this is arrow and does not have its own this scope so use its surrounding this scope
    console.log("hellooo ");
    this.num = 10;
    alert("hello");
 }, 500);

}


 keyboardkeyup(eventData: any){
  console.log(eventData);
 
  
  this.top();  //calling top object method 
  this.testvalue = eventData.target.value;
}
//constructor(public val:number) { 
  constructor() { 

   
       }
    
       //view child local ref to element this mehod used

     //  sendRefence(){
      //  alert ("i am coming using viewchild");
     //  } 

   //objcheck = new SampleoneComponent(10);
  
   
// or can also use onInit inplace of afterviewinit
   ngAfterViewInit()  {
       console.log(this.myInput);
        console.log(this.myInput.nativeElement.value);
        this.myInput.nativeElement.value = "mayonnis"; 
        console.log(this.myInput.nativeElement.value);
  }

  

}

