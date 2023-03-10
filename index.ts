import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

const sliderInput = document.querySelector('input#slider');

fromEvent(sliderInput, 'input')
  .pipe(
    debounceTime(500),
    map((event) => event.target['value'])
  )
  .subscribe((value) => console.log(value));
