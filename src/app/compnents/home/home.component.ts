import { Component, signal } from '@angular/core';
import { UserStoreService } from '../../services/user-store.service';
import { FakeUsers } from '../../consts';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { LangStoreService } from '../../stores/lang-store.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private userStore: UserStoreService,
    private langStore: LangStoreService) {

    this.langStore.languge$.subscribe(lang => { })

  }



  fakeClientLogin() {
    this.userStore.setToken(FakeUsers.Client);
  }

  fakeAdminLogin() {
    this.userStore.setToken(FakeUsers.Admin)
  }

}
