import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { BookComponent } from '../book/book.component';
import { BooksTestingModule } from '../books-testing.module';
import { BookRatingService } from '../shared/book-rating.service';
import { Book } from '../shared/book';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {

    const bookRatingMock = {
      rateUp: book => book
    };

    TestBed.configureTestingModule({
      imports: [BooksTestingModule],
      declarations: [
        DashboardComponent,
        BookComponent // Integration Test!!!
      ],
      providers: [
        {
          provide: BookRatingService,
          useValue: bookRatingMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('doRateUp() should forward the execution to BookRatingService', () => {

    const rs: BookRatingService = TestBed.get<BookRatingService>(BookRatingService);
    spyOn(rs, 'rateUp').and.callThrough();

    component.doRateUp({ isbn: '000' } as Book);

    expect(rs.rateUp).toHaveBeenCalled();
    expect(rs.rateUp).not.toHaveBeenCalledTimes(2);
  });

  it('doRateUp should call updateList', () => {
    spyOn(component, 'updateAndSort');
    component.doRateUp({ isbn: '000' } as Book);

    expect(component.updateAndSort).toHaveBeenCalled();
  });
});
