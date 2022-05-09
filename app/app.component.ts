import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
   template: `
    <div class="bounds">
    
      <div class="content" 
           fxLayout="row" 
           fxLayout.xs="column" 
           fxFlexFill >
           
          <div fxFlex="15" class="sec1" fxFlex.xs="55">
              first-section
          </div>
          <div fxFlex="30" class="sec2" >
              second-section
          </div>
          <div fxFlex="55" class="sec3" fxFlex.xs="15">
              third-section
          </div>
          
      </div>
      
    </div>

    <media-query-status></media-query-status>
  `
})
export class AppComponent  {
  name = 'Anyone can you help with Angular 4 Drag and drop';


}


