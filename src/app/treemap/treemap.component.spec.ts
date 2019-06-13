import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ChartModule, HIGHCHARTS_MODULES} from 'angular-highcharts';
import { TreemapComponent } from './treemap.component';
import * as treemap from 'highcharts/modules/treemap.src';
import { RouterTestingModule } from '@angular/router/testing';

describe('TreemapComponent', () => {
  let component: TreemapComponent;
  let fixture: ComponentFixture<TreemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TreemapComponent,
      ],
      imports: [
        RouterTestingModule,
        ChartModule,
      ],
      providers: [
        { provide: HIGHCHARTS_MODULES, useFactory: () => [ treemap ] }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
