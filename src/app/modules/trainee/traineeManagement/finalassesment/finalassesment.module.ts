import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalAssessmentComponent } from './final-assessment.component';
import {RouterModule,Routes} from '@angular/router';
import { ViewFinalAssesmentScoreComponent } from './view-final-assesment-score/view-final-assesment-score.component';
import { EnterFinalAssesmentScoreComponent } from './enter-final-assesment-score/enter-final-assesment-score.component';
import { MaterialModuleModule } from 'src/app/material-module.module';


const routes:Routes=[
{
  path:'',
  component:FinalAssessmentComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FinalAssessmentComponent, 
    ViewFinalAssesmentScoreComponent, 
    EnterFinalAssesmentScoreComponent
  ]
})
export class FinalassesmentModule { }
