import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList',
  pure: false
})
export class FilterListPipe implements PipeTransform {
  transform(items: object[], filterCriteria: object, filterCondition: object): any[] {
    if (!items) { return []; }
    const criteria = { ...filterCriteria };
    const invalidValues = ['', null, undefined];
    Object.keys(criteria).forEach((key) => (invalidValues.includes(criteria[key])) && delete criteria[key]);
    const keysList = Object.keys(criteria);
    return items.filter((item) => {
      if (keysList.length === 0) { return item; }
      return keysList.every(key => {
        const condition = filterCondition[key];
        let value = item[key];
        if (typeof value === 'string' || value instanceof String) {
          value = value.toLowerCase();
        } else if (Array.isArray(value)) {
          value = value.map((element) => {
            return element.toLowerCase();
          });
        }
        let requiredValue = criteria[key];
        if (typeof requiredValue === 'string' || requiredValue instanceof String) {
          requiredValue = requiredValue.toLowerCase();
        }
        switch (condition) {
          case 'equal': {
            return value === requiredValue ? true : false;
          }
          case 'greaterThenOrEqual': {
            return value >= requiredValue ? true : false;
          }
          case 'inArray': {
            return value.includes(requiredValue) ? true : false;
          }
          case 'consist': {
            return value.indexOf(requiredValue) > -1 ? true : false;
          }
          default: {
            return value === requiredValue ? true : false;
          }
        }
      });
    });
  }
}
