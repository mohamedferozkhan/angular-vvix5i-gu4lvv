import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "half"
})
export class HalfPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value / 2;
  }
}
