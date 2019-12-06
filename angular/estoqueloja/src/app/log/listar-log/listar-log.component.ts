import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { log } from '../log.class';
import { LogService } from 'src/app/service/log-service';

@Component({
  selector: 'app-listar-log',
  templateUrl: './listar-log.component.html'
})
export class ListarLogComponent implements OnInit {

  frmlog: FormGroup
  lstlog: log[];

  constructor(private srvLog: LogService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.listar("","",0);
  }

  listar(msg: string, login : string, produto : number ) {

    this.srvLog.getLista(msg,login,produto).subscribe((data: log[]) => {
      this.lstlog = data;

    });

  }
}
