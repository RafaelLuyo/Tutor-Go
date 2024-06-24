import {CanActivateFn, Router} from '@angular/router';
import {CreateAccountService} from "../../user/services/create-account.service";

export const AuthGuard: CanActivateFn = (route, state) => {
  // @ts-ignore
  const createAccountService = new CreateAccountService();
  const router = new Router();

  if (createAccountService.getToken()) {
    return true;
  }
  router.navigate(['login']);
  return false;
};
