import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/login/login.service';

export const userData = createFeatureSelector<User>('user');

export const isLogin = createSelector(
  userData,
  (user) => !!user.user_name
);
