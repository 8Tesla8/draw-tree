import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  public tree = [];
  public countFloor = 0;

  constructor(){
  }

  public Draw(): void
  {
    this.tree = this.DrawTreeHtml(this.countFloor);
  }

  private DrawTree(countFloor: number): Array<string>
  {
    var result = []; 
 
    for (
      let index = 0, countSpace = countFloor -1, countAsterisks = 1 ; 
      index < countFloor; 
      index++, countAsterisks += 2, countSpace--) {

      result[index]= new String(" ".repeat(countSpace) + "*".repeat(countAsterisks) + " ".repeat(countSpace)) ;
    }

    return result;
  }

  private DrawTreeHtml(countFloor: number): Array<string>
  {
    var result = []; 
 
    for (
      let index = 0, countSpace = countFloor -1, countAsterisks = 1 ; 
      index < countFloor; 
      index++, countAsterisks += 2, countSpace--) {

      result[index]= new String("&nbsp; ".repeat(countSpace) + "*".repeat(countAsterisks) + "&nbsp; ".repeat(countSpace)) ;
    }

    return result;
  }
}
