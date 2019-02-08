import { Component } from '@angular/core';

@Component({
  selector: 'app-syncrequest',
  templateUrl: './syncrequest.component.html',
  styleUrls: ['./syncrequest.component.css']
})
export class SyncrequestComponent {

  constructor() { }

   loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://www.google.com", true);
    xhttp.send();
  }

}
