import { Routes } from '@angular/router';
import { AdditionComponent } from './onlineexamapp/src/app/addition/addition.component';
import { ArrayexComponent } from './onlineexamapp/src/app/arrayex/arrayex.component';
import { RoutingexComponent } from './onlineexamapp/src/app/routingex/routingex.component';
import { RegisterComponent } from './onlineexamapp/src/app/register/register.component';
import { PipeexComponent } from './onlineexamapp/src/app/pipeex/pipeex.component';
import { ParentComponent } from './onlineexamapp/src/app/parent/parent.component';
import { LoginComponent } from './onlineexamapp/src/app/login/login.component';
import { QuestionComponent } from './onlineexamapp/src/app/question/question.component';
import { ScoreComponent } from './onlineexamapp/src/app/score/score.component';
import { AdmindashboardComponent } from './onlineexamapp/src/app/admindashboard/admindashboard.component';
import { QuestionmanagementComponent } from './onlineexamapp/src/app/questionmanagement/questionmanagement.component';
import { ManageresultComponent } from './onlineexamapp/src/app/manageresult/manageresult.component';

export const routes: Routes = [

    {path:'addition/:msg',component:AdditionComponent},

    {path:'arrayex',component:ArrayexComponent},

    {path:'routingex',component:RoutingexComponent},

    {path:'register',component:RegisterComponent},

    {path:'pipeex',component:PipeexComponent},

    {path:'communication',component:ParentComponent},

    {path:'login',component:LoginComponent},

    {path:'question',component:QuestionComponent},

    {path:'score',component:ScoreComponent},

    {path:'admindashboard',component:AdmindashboardComponent},

    {path:'questionmanagement',component:QuestionmanagementComponent},

    {path:'manageresult',component:ManageresultComponent},

    {path:'',redirectTo:'register',pathMatch:'full'}


];

