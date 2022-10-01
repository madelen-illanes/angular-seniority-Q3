import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
<<<<<<< HEAD
import { PlayersService } from 'src/app/_services/player/players.service';
import { Player } from '../../_models/players';
=======
import {CardService} from "../services/card.service";
import {Player} from "../../interface/player.interface";
import {Observable,} from "rxjs";
import {PositionPlayer} from "../../interface/position.interface";
>>>>>>> 512be9b4932fb5b69ec8836036df9f7e96413a08


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SliderComponent,
      multi: true,
    },
  ],
})
export class SliderComponent implements ControlValueAccessor {
  @Input()
  public label: string = '';
  field = '0';
<<<<<<< HEAD
  players: Player[] = [];
  nombre!: string;

=======
  players : Player[] = [];
  positionPlayer : PositionPlayer [] =[];
  players$:Observable<Player[]>



  constructor(
      private cardService: CardService,

  ) {
    {
      this.players$ = this.cardService.getPlayers()
    }

  }
>>>>>>> 512be9b4932fb5b69ec8836036df9f7e96413a08

  constructor(private playerServices: PlayersService) {}

  
  onChange: any = () => {};
  onTouch: any = () => {};
  
  ngOnInit(): void {
   this.playerServices.listarTodo().subscribe(data =>{
    
    this.players = data
   });
    
  }

  filtrar(){
    
    this.playerServices.buscarPorNombre(this.nombre).subscribe(data =>{
      this.players = data
    })
  } 
  // sets the value used by the ngModel of the element
  set value(val: string) {
    this.field = val;
    this.onChange(val);
    this.onTouch(val);
  }

  // This will will write the value to the view if the the value changes occur on the model programmatically
  writeValue(value: any) {
    this.value = value;
  }

  /* When the value in the UI is changed, this method will invoke a callback function */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // When the element is touched, this method will get called
  registerOnTouched(onTouched: Function) {
    this.onTouch = onTouched;
  }

<<<<<<< HEAD
  
=======

  ngOnInit(): void {
   // this.activateRoute.params
    this.getPlayers();
        //
        // .pipe(
        //     switchMap(({id})=> this.cardService.getPlayer(id))
        // ).subscribe(resp => {console.log(resp);this.players = resp});

  }
  getPlayers() {
    this.cardService.getPlayers()
        .subscribe(players => {
          this.players = players;
        })
  }

  // get bookTitle() {
  //   return this.players?.firstName
  //   // return (this.book && this.book.title) ? this.book.title : null
  // }
  // get bookId(){
  //   return this.book?.id
  // }
  //
  // get bookImage() {
  //   return this.lastName?.image
  // }
  //
  // get bookAuthor() {
  //   return this.attack?.author
  // }
  //
  // get bookUrl() {
  //   return this.defense?.url
  // }
  //
  // get bookResume() {
  //   return this.skills?.resume
  // }

>>>>>>> 512be9b4932fb5b69ec8836036df9f7e96413a08

}
