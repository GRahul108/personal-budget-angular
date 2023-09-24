import { Component, AfterViewInit } from '@angular/core';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {
  public dataSource:any = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#eb87f1',
                '#87f195',
                '#405e44'
            ]
        }
    ],
    labels: []
};
  constructor ( private http:HttpClient ){

  }
  ngAfterViewInit(): void {
    this.http.get('http://localhost:3002/budget')
    .subscribe((res:any) => {
      console.log(res)
      for (var i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;


    }

    this.createChart();

    })

  }


  createChart(){

    var ctx:any =document.getElementById('myChart');

    var myPieChart= new Chart(ctx,
      {
        type:'pie',
        data:this.dataSource
      });

  }

}


