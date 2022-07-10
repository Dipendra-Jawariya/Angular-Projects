import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl  = environment.apiUrl;
  constructor(private https:HttpClient) 
  // Injected http client
  { }
  
  getUsers():Observable<User[]>{
    let myHeaders  =new HttpHeaders({
      'myHeader':'headerValue'
    });
    // myHeaders = myHeaders.set('id', '1234');
    // myHeaders = myHeaders.append('id','0000');
    let myParams = new HttpParams().set('page','5').set('sort','true');
    return this.https.get<User[]>(`${this.apiUrl}/users`, { params:myParams });
  }
  getUser():Observable<User>{
    return this.https.get<User>(`${this.apiUrl}/users/1`);
  }

  createUser(user:User):Observable<User>{
    return this.https.post<User>(`${this.apiUrl}/users`,user);
  }

  // In put request we have to send all data and the data which we not send will become null by default
  updateUser(user:User):Observable<User>{
    return this.https.put<User>(`${this.apiUrl}/users/${user.id}`,user);
  }


  // Patch data
  patchUser(user:User):Observable<User>{
    return this.https.patch<User>(`${this.apiUrl}/users/${user.id}`,user);
  }

  // Delete User
  deleteUser(id:number):Observable<void>{
    return this.https.delete<void>(`${this.apiUrl}/users/${id}`);
  }
}
