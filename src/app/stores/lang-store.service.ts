import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangStoreService {
  languageSubject = new BehaviorSubject<string>(localStorage.getItem('lang') || 'en');
  languge$ = this.languageSubject.asObservable();

  constructor(private translate: TranslateService) {
    translate.langs = ['en', 'ar']
    this.languge$.subscribe(language => {
      this.translate.setDefaultLang(language);
      this.translate.use(language)
      this.updateUI(language)
    })
  }

  changeLanguage(lang: string) {
    this.languageSubject.next(lang);
    this.translate.use(lang)
    this.updateUI(lang);
    localStorage.setItem('lang', lang)
  }

  updateUI(lang: string) {
    document.querySelector('body')!.lang = lang;
    document.querySelector('body')!.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }


}
