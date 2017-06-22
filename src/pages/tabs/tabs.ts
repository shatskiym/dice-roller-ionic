import { Component } from '@angular/core';

import { PlayPage } from '../play/play';
import { HomePage } from '../home/home';
import { CameraPage } from '../camera/camera';
import { NewDicePage } from '../new-dice/new-dice';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PlayPage;
  tab3Root = CameraPage;
  tab4Root = NewDicePage;

  constructor() {

  }
}
