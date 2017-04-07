import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { newMessagePage } from '../newMessage/newMessage';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = newMessagePage;
  tab3Root: any = ProfilePage;

  constructor() {

  }

  
}
