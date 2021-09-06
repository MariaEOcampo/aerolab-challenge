import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { IntegrationService } from 'src/app/services/integration.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public user!: User;
  public userPoints$!: Observable<number>;

  constructor(
    private userService: UserService,
    private integrationService: IntegrationService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((userResponse) => {
      this.integrationService.emitUserPoints$(userResponse.points);
      this.user = userResponse;
      console.log('navbar', this.user);
    });
  }
}
