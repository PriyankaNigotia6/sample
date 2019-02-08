import { Component} from '@angular/core';

@Component({
  selector: 'app-arrowfuntest',
  templateUrl: './arrowfuntest.component.html',
  styleUrls: ['./arrowfuntest.component.css']
})
export class ArrowfuntestComponent  {
 num:number = 0;  
 
  constructor() {
    this.increaseme();
    
   }
    
/* increaseme():void{
  setInterval(function(){   //using JS Function can not use num class property by this here..
    this.num++;
  },500 ); 
  } */
  
  increaseme():any{
    setInterval(() => {   //using ts arrow now can use num by this here
      this.num++;
    },1000 );  // in every 1sec chage num
    }  
       
   // printme()
   //   {
    //  return 'i am child';
    //  }

    
// this section is to test class new object and this equality.

/*console.log(this.num);
var testobj = new ArrowfuntestComponent();
var thistest = testobj;
if(thistest === this){
  console.log("new testobj and this is equal");
}
else
{
  console.log("they are not equal..");
} */
          

}
