import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class  NavbarComponent{
  constructor(private readonly sessionService: SessionService){
  }

  get hasActiveSession(): boolean {
    return this.sessionService.active();
  }
}
