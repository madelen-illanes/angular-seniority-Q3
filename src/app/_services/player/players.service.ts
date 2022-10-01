import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from 'src/app/_models/players';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  url: string =  `${environment.URL}/player`;
  headers= new HttpHeaders().set("author","28")
  constructor( private http: HttpClient ) { }


  listarTodo(){
   return this.http.get<any[]>(`${this.url}`,{'headers': this.headers})
  }
   
  buscarPorId(id:number){
    return this.http.get<any>(`${this.url}/${id}`)
  }

  buscarPorNombre(search: string){
    return this.http.post<any[]>(`${this.url}/search`,{'search':search},{'headers': this.headers})
  }

  registrarPlayer(player: Player){
    return  this.http.post(`${this.url}`, player)
  }

  editarPlayer(id:number, player:Player){
    return  this.http.patch(`${this.url}/${id}`, player)
  }

  borraPlayer(id:number){
    return  this.http.delete(`${this.url}/${id}`)
  }
}