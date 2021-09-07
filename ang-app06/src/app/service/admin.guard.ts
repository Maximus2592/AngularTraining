import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild, CanLoad {
 
  constructor(private userService:UsersService,private router:Router){}

  checkAllowability():Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{

    let finalUrl:UrlTree|null=null;
    
    let u = this.userService.currentUser();

    if(u && u.role==='USER'){
        finalUrl=this.router.parseUrl("/txns");
    }else if(!u){
      finalUrl=this.router.parseUrl("/home");
    }

    return finalUrl?finalUrl:true;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAllowability();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAllowability();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAllowability();
  }
}
