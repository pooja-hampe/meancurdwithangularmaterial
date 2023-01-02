import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';
import { ListEmployeComponent } from './list-employe/list-employe.component';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import { CsvfileComponent } from './csvfile/csvfile.component';
import { CsvaddfileComponent } from './csvaddfile/csvaddfile.component';
const routes: Routes = [

  { path: '', pathMatch:"full",redirectTo: "employe"},
  { path: 'employe', component: EmployeComponent },
  { path: 'list-employe', component: ListEmployeComponent},
  { path: 'edit-employe/:id', component: EditEmployeComponent },
  { path: 'csvfile', component: CsvfileComponent },
  { path: 'csvaddfile', component: CsvaddfileComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
