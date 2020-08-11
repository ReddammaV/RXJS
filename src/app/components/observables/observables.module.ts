import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
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
import { Comp1Component } from './subject/comp1/comp1.component';
import { Comp2Component } from './subject/comp2/comp2.component';
import { Comp3Component } from './subject/comp3/comp3.component';

@NgModule({
  declarations: [ObservablesComponent, FromEventComponent, IntervalComponent, OffromComponent, ToarrayComponent, CustomComponent, MapComponent, PluckComponent, FilterComponent, TapComponent, TakeComponent, RetryComponent, DebounceComponent, SubjectComponent, Comp1Component, Comp2Component, Comp3Component],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ]
})
export class ObservablesModule { }
