import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SafeUrlPipe
  ],
  exports: [
    SafeUrlPipe
  ]
})
export class SharedSharedLibModule {}
