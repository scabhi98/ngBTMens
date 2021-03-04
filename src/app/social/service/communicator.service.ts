import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {PostData} from "../models/post-data";
import {PostType} from "../models/post-type.enum";
import {HttpClient} from "@angular/common/http";
import {PersonDetails} from "../models/person-details";
import {BoarderDetails} from "../models/boarder-details";
import {AuthService, GenericResponse} from "../../ap-auth/auth.service";
import {api, ResponseCodes} from "../../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class CommunicatorService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) {

  }

  fetchNewsPosts(): Observable<PostData[]> {
    let res = new Subject<PostData[]>();
    setTimeout(()=>{
      res.next( [
        {
          title: "Post Title",
          content: "aligjsi\nssfsaklfjsa\nsgfakjflkajglasjgla\nnisjsajfajfa\nsakjgaskgsgslkjgsal \nnsffsafsaklgsafa\nsjflsajflsaf",
          type: PostType.Text,
          author: "Someone"
        }
      ] )
    }, 800);
    return res.asObservable();
  }

  public postProfileData(personalInfo: PersonDetails, boarderDetails: BoarderDetails): Observable<GenericResponse>{
    let res = new Subject<GenericResponse>();

    this.http.post<GenericResponse>(api.profile_post_data, {
      personalInfo: personalInfo,
      boarderInfo: boarderDetails,
      token: this.auth.getToken()
    }).subscribe(response => {
      if(response.status == ResponseCodes.REQ_SUCCESS){
        this.snackBar.open("Profile Data Updated Successfully.")._dismissAfter(3000);
      }
      else {
        this.snackBar.open("Error: "+response.message);
      }
      res.next(response);
    });

    return res.asObservable();
  }


}
