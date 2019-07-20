import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
  addUser(obj){
return this._http.post('http://localhost:3000/cms',obj)
  }
  getuser(){
    return this._http.get('http://localhost:3000/cms')
  }
  update(obj1){
    return this._http.put('http://localhost:3000/cms/'+obj1.id,obj1)
  }
  deleteobj(obj2){
    return this._http.delete('http://localhost:3000/cms/'+obj2.id,obj2)
  }
}
