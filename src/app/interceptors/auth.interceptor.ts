import { HttpInterceptorFn } from '@angular/common/http';
import { KEY } from '../helpers/constant.helper';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const access = localStorage.getItem(KEY);

  if (access) {
    // const clone = req.clone({
    //   headers: 
    // })
  } 
  
  return next(req);
};
