import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlashComponent } from './flash/flash.component';
import { FlashService } from './flash.service';

@NgModule({
  declarations: [AppComponent, FlashComponent],
  imports: [BrowserModule, FormsModule],
  providers: [FlashService],
  bootstrap: [AppComponent],
})
export class AppModule {}
