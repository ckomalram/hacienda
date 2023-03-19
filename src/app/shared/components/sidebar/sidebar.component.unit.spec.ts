import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { SidebarService } from '../../../services/sidebar.service';
describe('SIDEBAR', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      providers: [SidebarService],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);

    component = fixture.componentInstance;
  });

  it('UNIT: Se debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('UNIT: Arreglo Menu debe tener al menos 1', () => {
      const rta = component.menuItems;
      console.log(rta);
      expect(rta.length).toBeGreaterThan(0);
  });

  it('UNIT: Metodo Logout llamado', () => {

    const logout = component.logout();

    expect(logout).toBeTruthy();
  });


});
