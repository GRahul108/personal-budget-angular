import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dataSource:any = {

    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#ff0000',
                '#87f195',
                '#405e44'
            ]
        }
    ],
    labels: []
};
private dataLoaded = false;
  constructor(private http: HttpClient) { }
  fetchData() {
    if (this.dataLoaded) {
      return of(this.dataSource);
    }
    else
    return this.http.get('http://localhost:3002/budget').pipe(
    tap((res:any) => {
      for (var i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
      }
    this.dataLoaded=true;

  })
    )

  }
}
