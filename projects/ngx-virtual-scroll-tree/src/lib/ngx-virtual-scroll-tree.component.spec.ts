import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollTreeComponent } from './ngx-virtual-scroll-tree.component';

describe('VirtualScrollTreeComponent', () => {
  let component: VirtualScrollTreeComponent;
  let fixture: ComponentFixture<VirtualScrollTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualScrollTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
