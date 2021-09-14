import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ang-app07'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing demo project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('testing demo project');
  });

  it('should render a button that changes the title on click', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('#btn1');
    btn.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.title).toEqual('Button got clicked');
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Button got clicked');
  });
});
