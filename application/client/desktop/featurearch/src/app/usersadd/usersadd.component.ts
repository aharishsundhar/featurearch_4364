import { Component, OnInit } from '@angular/core';
import { UsersaddService } from './usersadd.service';

@Component({
  selector: 'app-usersadd',
  templateUrl: './usersadd.component.html',
  styleUrls: ['./usersadd.component.scss'],
})

export class UsersaddComponent implements OnInit {
    public user = {
        name: '',
    }

    constructor (
        private usersaddService: UsersaddService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.usersaddService.GpCreate(this.user).subscribe(data => {
            this.user.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}