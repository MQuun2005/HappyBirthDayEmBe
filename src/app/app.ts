import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { MessagePopupComponent } from './components/message-popup/message-popup';
import { HeartAnimationTvNlComponent } from './components/heart-animation-tv-nl/heart-animation-tv-nl.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MessagePopupComponent, HeartAnimationTvNlComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('happy-birthday-em-be');
  
  showPopup: boolean = false;
  showHeartTVNLModal: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  showMessagePopup() {
    this.showPopup = true;
  }

  closeMessagePopup() {
    this.showPopup = false;
  }

  showHeartTVNLModalPopup() {
    this.showPopup = false;
    this.showHeartTVNLModal = true;
  }

  closeHeartTVNLModal() {
    this.showHeartTVNLModal = false;
  }

  isHomePage(): boolean {
    return this.router.url === '/home' || this.router.url === '/';
  }
}
