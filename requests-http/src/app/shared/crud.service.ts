import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrudService<T> {

  constructor(protected http: HttpClient, private API_URL) {}

  list() {
    return this.http.get<T[]>(this.API_URL).pipe();
  }
  loadById(id) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }
  private create(resgister: T) {
    return this.http.post(this.API_URL, resgister).pipe(take(1));
  }
  private update(resgister) {
    return this.http.put(`${this.API_URL}/${resgister.id}`, resgister).pipe(take(1));
  }
  save(resgister) {
    if (resgister.id) {
      return this.update(resgister);
    } else {
      return this.create(resgister);
    }
  }
  delete(id) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}
