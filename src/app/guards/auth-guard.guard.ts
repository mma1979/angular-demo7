import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let userService = inject(UserStoreService);
  return userService.isAuthintecated();
};
