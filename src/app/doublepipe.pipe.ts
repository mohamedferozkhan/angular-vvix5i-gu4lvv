import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "double"
})
export class DoublepipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value * 2;
  }
}
