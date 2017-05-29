import { Component, OnInit, trigger, state, style, animate, transition, keyframes } from '@angular/core';
import { ListService } from "../service/list.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [ListService],
  animations: [
    trigger('stateBlur', [
      state('active', style({
        backgroundColor: '#cfd8dc'
      })),
      state('inactive', style({
        backgroundColor: ''
      }))
    ])
  ]
})
export class ViewComponent implements OnInit {

  myState = 'inactive';
  List: any[] = [];
  constructor(private _listService: ListService) { }

  ngOnInit() {
    this.List = this._listService.getList();
  }

  blurOnRow() {
    this.myState = 'active';
  }

}
