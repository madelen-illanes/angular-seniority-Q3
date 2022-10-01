import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PlayersService } from 'src/app/_services/player/players.service';
import { Player } from '../../_models/players';


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
  players: Player[] = [];
  nombre!: string;


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

  

}
