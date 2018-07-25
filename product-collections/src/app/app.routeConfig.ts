import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';

// importing local components.

import { ProductCollectionComponent } from '../app/product-collection/product-collection.component';
import {ProductCollectionEditComponent} from '../app/product-collection/product-collection-edit/product-collection-edit.component';

const routes: Routes = [{ path: 'productCollections', component: ProductCollectionComponent},
                         {path: 'productCollectionEdit', component: ProductCollectionEditComponent},  
                        { path: 'store-productCollections', component: ProductCollectionComponent },
                        { path: '**', redirectTo: 'productCollections' }];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRouteConfig { }
