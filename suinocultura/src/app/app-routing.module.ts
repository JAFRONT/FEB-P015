import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { ControlePesoComponent } from './controle-peso/controle-peso.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'autenticacao', component: AutenticacaoComponent },
  { path: 'cadastro-suino', component: CadastroSuinoComponent },
  { path: 'controle-peso', component: ControlePesoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }