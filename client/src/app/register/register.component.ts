import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() cancelToken = new EventEmitter();
  model:any ={};
  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  register()
  { 
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    })
  }

  cancel(){
    this.cancelToken.emit(false);
    console.log('Cancelled');
  }

}
