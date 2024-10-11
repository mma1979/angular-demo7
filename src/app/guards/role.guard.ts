import { CanActivateFn } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  let userService = inject(UserStoreService);
  return userService.isUserInRole('admin');
};
