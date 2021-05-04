import { ActionReducerMap, createReducer, MetaReducer, on } from '@ngrx/store';
import { User } from 'src/app/login/login.service';
import { environment } from 'src/environments/environment';
import { AuthActions } from './login-action-type';

export interface AppState {
  user: User;
}

export const initialState: any = {};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => {
    return {
      ...action.user
    };
  })
);

export const reducers: ActionReducerMap<AppState> = {

  user: authReducer,
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];

