import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  api_url = "http://192.168.0.13/codeigniter_api/index.php/";

  constructor(
    private httpClient :HttpClient
  ) { }

    do_get(_resource){
      return this.httpClient.get<any>(this.api_url+_resource);
    }

    do_post(_resource,_data){
      return this.httpClient.post<any>(this.api_url+_resource,_data);
    }

    do_put(_resource,_data){
      return this.httpClient.put<any>(this.api_url+_resource,_data);
    }

    do_delete(_resource){
      return this.httpClient.delete<any>(this.api_url+_resource);
    }

}
