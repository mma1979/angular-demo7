import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LangStoreService } from './stores/lang-store.service';
import { SharedModule } from './modules/shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private laangStore: LangStoreService) {
    this.laangStore.languge$.subscribe(lang => { })
  }

  switchLanguage(lang: string) {
    this.laangStore.changeLanguage(lang)

  }
}
