import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { ngMocks } from 'ng-mocks';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit value on enter', () => {
    const searchSpy = spyOn(component.searchExecuted, 'emit');

    expect(searchSpy).not.toHaveBeenCalled();

    const input = fixture.debugElement.nativeElement.querySelector(
      'input[data-testid="search-bar"]'
    );
    input.value = '123456789';

    // trigger the enter event
    const searchBar = ngMocks.find('input');
    ngMocks.trigger(searchBar, 'keyup.enter');

    expect(searchSpy).toHaveBeenCalledWith('123456789');
  });
});
