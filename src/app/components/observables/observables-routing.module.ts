import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OffromComponent } from './offrom/offrom.component';
import { ToarrayComponent } from './toarray/toarray.component';
import { CustomComponent } from './custom/custom.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebounceComponent } from './debounce/debounce.component';
import { SubjectComponent } from './subject/subject.component';
import { ReplaysubjectComponent } from './replaysubject/replaysubject.component';
import { AsyncsubjectComponent } from './asyncsubject/asyncsubject.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';

const routes: Routes = [
  { path: '', component: ObservablesComponent },
  { path: 'from-event', component: FromEventComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'of-from', component: OffromComponent },
  { path: 'to-array', component: ToarrayComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'map', component: MapComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'tap', component: TapComponent },
  { path: 'take', component: TakeComponent },
  { path: 'retry', component: RetryComponent },
  { path: 'debounce', component: DebounceComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'replaysubject', component: ReplaysubjectComponent },
  { path: 'asyncsubject', component: AsyncsubjectComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'mergemap', component: MergemapComponent },
  { path: 'concatmap', component: ConcatmapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
