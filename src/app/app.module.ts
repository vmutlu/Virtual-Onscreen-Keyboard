import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard/keyboard.component';
import { OskInputDirective } from './directives/osk-input.directive';
import { KeyboardKeyDirective } from './directives/keyboard-key.directive';
import { KeyboardService } from './services/keyboard.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, KeyboardComponent, OskInputDirective, KeyboardKeyDirective ],
  bootstrap:    [ AppComponent ],
  providers: [KeyboardService]
})
export class AppModule { }
