import { Component, OnInit } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
import { DemoAdapter } from 'app/my-adapter';
import { DemoAdapterPagedHistory } from 'app/my-adapter-paged-history';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'app';


  public adapter: ChatAdapter = new DemoAdapter();
  //public adapter: ChatAdapter = new DemoAdapterPagedHistory();
  public messageSeen(event: any)
  {
    console.log(event);
  }

}
