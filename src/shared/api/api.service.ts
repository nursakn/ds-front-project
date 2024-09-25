import {Observable, of, timeout} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  get<T>(data: T): Observable<T> {
    return of(data).pipe(
      timeout(1000)
    );
  }
}
