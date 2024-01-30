import { NgModule } from "@angular/core";
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
// import { QrCodeModule } from 'ng-qrcode';
import {MatTableModule} from '@angular/material/table';
import { AdMovieComponent } from './ad-movie/ad-movie.component';
const features: any[] = [
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    
    MatTableModule
]

@NgModule({
    imports: [features],
    exports: [features],
    declarations: [
      AdMovieComponent
    ],
    
    
    
    
    
    
})
export class MaterialFeatures {}