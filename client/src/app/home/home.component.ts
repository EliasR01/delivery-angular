import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    try {
      const token = document.cookie.split('=')[1];
      const payload = jwt_decode(token);
      const userId = payload.userId._id;
      if (userId) {
        this.router.navigate(['dashboard/summary']);
      }
    } catch (err) {
      null;
    }
  }
}
