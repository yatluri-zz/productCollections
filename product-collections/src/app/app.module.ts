import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { ModalModule, BsDatepickerModule, BsDropdownModule, TooltipModule, CarouselModule } from 'ngx-bootstrap';
import {DragScrollModule} from 'ngx-drag-scroll';
import { ToastrModule } from 'ngx-toastr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRouteConfig } from './app.routeConfig';
import { AppComponent } from './app.component';
import { ProductCollectionComponent } from './product-collection/product-collection.component';
import { ProductCollectionListComponent } from './product-collection/product-collection-list/product-collection-list.component';
import { ProductCollectionEditComponent } from './product-collection/product-collection-edit/product-collection-edit.component';
import { ProductAuthInterceptor } from './shared/interceptors/product.Auth.interceptors';
import { ProductCollectionService } from './product-collection/services/product-collection.service';
import { ImgSliderComponent } from './shared/components/img-slider/img-slider.component';
import { DragulaExtendedDirective } from './product-collection/directives/dragula-extended.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductCollectionComponent,
    ProductCollectionListComponent,
    ProductCollectionEditComponent,
    ImgSliderComponent,
    DragulaExtendedDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CommonModule,
    CarouselModule.forRoot(),
    DragulaModule,
    DragScrollModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgxDatatableModule,
    ToastrModule.forRoot({ preventDuplicates: true }),
    AppRouteConfig


  ],
  providers: [
    DragulaService,
    { provide: HTTP_INTERCEPTORS, useClass: ProductAuthInterceptor, multi: true },
    ProductCollectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
