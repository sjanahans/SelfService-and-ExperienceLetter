import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerDevPlanComponent } from './career-dev-plan.component';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { RouterModule, Routes } from '@angular/router';
import { ViewCareerDevelopmentPlanComponent } from './view-career-development-plan/view-career-development-plan.component';
import { ManageCareerDevelopmentPlanComponent } from './manage-career-development-plan/manage-career-development-plan.component';
import { CareerDevelopmentPlanFormComponent } from './modal/career-development-plan-form/career-development-plan-form.component';

const routes:Routes=[
  {
    path:'',
  component:CareerDevPlanComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CareerDevPlanComponent, ViewCareerDevelopmentPlanComponent, ManageCareerDevelopmentPlanComponent, CareerDevelopmentPlanFormComponent]
})
export class CareerDevPlanModule { }
