import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'costas',
    loadChildren: () => import('./tipo/costas/costas.module').then( m => m.COSTASPageModule)
  },
  {
    path: 'peito',
    loadChildren: () => import('./tipo/peito/peito.module').then( m => m.PEITOPageModule)
  },
  {
    path: 'abdominal',
    loadChildren: () => import('./tipo/abdominal/abdominal.module').then( m => m.AbdominalPageModule)
  },
  {
    path: 'biceps',
    loadChildren: () => import('./tipo/biceps/biceps.module').then( m => m.BicepsPageModule)
  },
  {
    path: 'panturrilha',
    loadChildren: () => import('./tipo/panturrilha/panturrilha.module').then( m => m.PanturrilhaPageModule)
  },
  {
    path: 'pernas',
    loadChildren: () => import('./tipo/pernas/pernas.module').then( m => m.PernasPageModule)
  },
  {
    path: 'ombros',
    loadChildren: () => import('./tipo/ombros/ombros.module').then( m => m.OmbrosPageModule)
  },
  {
    path: 'antebraco',
    loadChildren: () => import('./tipo/antebraco/antebraco.module').then( m => m.AntebracoPageModule)
  },
  {
    path: 'triceps',
    loadChildren: () => import('./tipo/triceps/triceps.module').then( m => m.TricepsPageModule)
  },
  {
    path: 'dados-exerc',
    loadChildren: () => import('./dados-exerc/dados-exerc.module').then( m => m.DadosExercPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
