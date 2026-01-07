import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GuideComponent } from './guide/guide.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'guide',
        component: GuideComponent,
    },
    {
        path: 'catalog',
        component: CatalogComponent,
    }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}


