import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersAPI:string;
  constructor(private httpClient : HttpClient) {
    this.usersAPI=environment.userAPI;
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
