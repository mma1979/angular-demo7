import { Component } from '@angular/core';
import { UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
token: string = '';

constructor(private userStore: UserStoreService){
  this.userStore.token$.subscribe(newToken=> this.token=newToken)
}

}
