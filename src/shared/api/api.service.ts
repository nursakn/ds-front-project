import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  get<T>(data: T): Observable<T> {
    return new Observable<T>(subscriber => {
      setTimeout(() => {
        subscriber.next(data);
        subscriber.complete();
      }, 1000)
    });
  }
}
