import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service'
import { MenuClass } from '../../model/menu.class'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuend : any;
  lstmenu: MenuClass []

  constructor(private menuSrv : MenuService) { 

  }

  ngOnInit() {

    this.lstmenu = this.menuSrv.getListaMenu()
    this.menuend = this.menuSrv.getListaCep()
  }

  openNav() : void{
    document.getElementById("mySidenav").style.width = "235px";
  }
  
 closeNav() : void{
    document.getElementById("mySidenav").style.width = "0";
  }
}
