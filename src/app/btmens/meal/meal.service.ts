import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {MealData} from "./meal-data";
import {AuthService, GenericResponse} from "../../ap-auth/auth.service";
import {api, ResponseCodes} from "../../../environments/environment";

@Injectable()
export class MealService {

  private motdSubject = new Subject<MealData>();

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {

  }

  public getMealOfTheDay(): Observable<MealData> {
    this.pingForMealOfTheDay();
    return this.motdSubject.asObservable();
  }

  private pingForMealOfTheDay(){
    this.http.get<GenericResponse<MealData>>(api.meal.MealOfTheDay).subscribe(response => {
      if(response.status == ResponseCodes.REQ_SUCCESS){
        this.motdSubject.next(response.response);
      }else{
        this.motdSubject.next(null);
      }
    });
  }

  private postMealOfTheDay(mealData: MealData): Observable<MealData>{
    let postSubject = new Subject<MealData>();
    this.http.post<GenericResponse<{id: string}>>(api.meal.MealOfTheDay, {
      token: this.auth.getToken(),
      data: mealData
    }).subscribe( r => {
      if(r.status == ResponseCodes.REQ_SUCCESS){
        mealData.id = r.response.id;
        postSubject.next(mealData);
      }else{
        postSubject.next(null);
      }
    });
    return postSubject.asObservable();
  }

}

