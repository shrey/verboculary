import { Injectable, RendererFactory2, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeChangeService {
  renderer : Renderer2;
  crntClass : string;

  constructor(private renderedFactory : RendererFactory2, @Inject(DOCUMENT) private document : Document) {
    this.renderer = this.renderedFactory.createRenderer(null,null);

  }

  enableDarkMode(){
    this.renderer.addClass(this.document.body, 'darkTheme');

  }

  enableLightMode(){
    this.renderer.removeClass(this.document.body, 'darkTheme');    
  }


  changeTheme(themeName : string){    
    if(this.crntClass) this.renderer.removeClass(this.document.body, this.crntClass); 
    if(themeName) this.renderer.addClass(this.document.body, themeName); // this themeName should exsist in the app.component.scss under :root{}
    this.crntClass = themeName;
  }
  
}
