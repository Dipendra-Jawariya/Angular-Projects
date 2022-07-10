import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'HttpRequest'
  private user:any = 
    {
      'id':5,
      'name': 'Dipendra Jawariya',
      'username': 'dJawariya',
      'email': 'Dipendra Jawariya is not given his email id yet',
      // 'address': {
      //   'street': 'Kulas Light',
      //   'suite': 'Apt. 556',
      //   'city': 'Gwenborough',
      //   'zipcode': '92998-3874',
      //   'geo': {
      //     'lat': '-37.3159',
      //     'lng': '81.1496'
      //   }
      // },
      // 'phone': '1-770-736-8031 x56442',
      // 'website': 'hildegard.org',
      // 'company': {
      //   'name': 'JINIsha Technologies',
      //   'catchPhrase': 'Multi-layered client-server neural-net',
      //   'bs': 'harness real-time e-markets'
      // }
    }
  

  constructor(private userService:UserService){
  }

  ngOnInit(): void {
    this.onGetUsers();
    // this.onGetuser();
    // this.OnCreateuser();
    // this.onUpdateUser();
    // this.onGetUsers(); 
    // this.onPatchUser();
    // this.onDeleteUser();  
  }

   onGetUsers():void{
    this.userService.getUsers().subscribe(
      (response)=>console.log(response),
      (error:any)=>console.log(error),
      ()=>console.log('Done getting Users'),
    )
   }

   onGetuser():void{
    this.userService.getUser().subscribe(
      (response)=>console.log(response),
      (error:any)=>console.log(error),
      ()=>console.log('Done getting User')
      
    );
   }

   OnCreateuser():void{
    this.userService.createUser(this.user).subscribe(
      (response)=> console.log(response),
      (error:any)=>console.log("error"),
      ()=>console.log("Done creating User"),
    );
   }

   onUpdateUser():void{
    this.userService.updateUser(this.user).subscribe(
      (response)=>console.log(response),
      (error)=> console.log('Error'),
      ()=>console.log("Done Updating User"),
    );
   }

   onPatchUser():void{
    this.userService.patchUser(this.user).subscribe(
      (response)=>console.log(response),
      (error)=>console.log('error'),
      ()=>console.log("Done patching user"),
    );
   }

   onDeleteUser():void{
    this.userService.deleteUser(5).subscribe(
      (response)=>console.log(response),
      (error)=>console.log('error'),
      ()=> console.log("Delete request completed"),
      
      
      
    );
   }
}
