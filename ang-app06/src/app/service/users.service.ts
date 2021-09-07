import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersAPI:string;

  constructor(private httpClient : HttpClient) {
    this.usersAPI=environment.userAPI;
  }

  login(email:string,pwd:string):Observable<User>{
    return this.httpClient.get<User[]>(`${this.usersAPI}?email=${email}`).pipe(
      map( (users:User[]) => {
        let user = users[0];
        
        if(user.password!==pwd){
          throw "Invalid User Credits";
        }

        sessionStorage.setItem("user",JSON.stringify({...user,password:undefined}));
        return user;
      })
    );
  }

  logout(){
    sessionStorage.removeItem("user");//forgetting the user.
  }

  currentUser():User|null{
    let userStr = sessionStorage.getItem("user");
    return userStr?JSON.parse(userStr):null;
  }

  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>(this.usersAPI);
  }

  getById(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.usersAPI}/${id}`);
  }

  add(user:User):Observable<User>{
    return this.httpClient.post<User>(this.usersAPI,user);
  }

  update(user:User):Observable<User>{
    return this.httpClient.put<User>(`${this.usersAPI}/${user.id}`,user);
  }

  deleteById(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.usersAPI}/${id}`);
  }
}
