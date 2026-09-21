import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';

@NgModule({
    declarations: [],
    imports: [CommonModule,MatToolbar],
    exports:[MatToolbar]
})
export class SharedModule { }
