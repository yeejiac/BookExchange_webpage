import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  options: any;
  mainUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    };
  }
  
  run() {
    console.log('service run');
  }
  
  //*取得所有資料
  getAllData(): Observable<PersonModal[]> {
    return this.http.get<PersonModal[]>(`${this.mainUrl}/posts`);
  }
  
  //*取得單一資料
  getData(): Observable<PersonModal[]> {
    return this.http.get<PersonModal[]>(`${this.mainUrl}/posts/1`);
  }
  
  //*新增一筆資料
  insertData(request: PersonModal) {
    return this.http.post(`${this.mainUrl}/posts`, request, this.options);
  }
  
  //*更新一筆資料
  updateData(request: PersonModal, id: number) {
    return this.http.put(`${this.mainUrl}/posts/${id}`, request, this.options);
  }
  
  //*刪除一筆資料
  deleteData(id: number) {
    return this.http.delete(`${this.mainUrl}/posts/${id}`, this.options);
  }
}
