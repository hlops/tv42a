import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { ScheduleComponent } from './schedule/schedule.component';
import { SourcesComponent } from './sources/sources.component';
import { ChannelsComponent } from './channels/channels.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent
  },
  {
    path: 'channels',
    component: ChannelsComponent
  },
  {
    path: 'sources',
    component: SourcesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
