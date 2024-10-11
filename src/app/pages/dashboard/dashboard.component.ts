import { Component, inject, OnInit, signal } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  isLoading: boolean = false;

  users = signal<User[]>([])

  private _usersService = inject(DashboardService);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;

    this._usersService.getUsers().subscribe({
      next: (users) => {
        this.users.set(users)
        console.log(users);
      },
      error: (error) => {
        alert(`Error: ${error}`);
        console.error(error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  updateUser() {
    
  }
}
