import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public peopleInfo:any = {
    username: "",
    sex: "2",
    citysList:['北京', '上海', '广州'],
    city: '北京',
    hobby: [
      {
        title: "吃饭",
        checked: false,
      },{
        title: "睡觉",
        checked: false,
      }, {
        title: "敲代码",
        checked: true,
      }
    ],
    mark: '',
  }

  constructor() { }

  ngOnInit() {
  }


  doSubmit() {
    let username:any = document.getElementById("username")
    alert(username.value)
  }
}
