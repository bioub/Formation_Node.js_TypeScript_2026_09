class Collection<T = string> {
  private values: T[] = [];

  public push(value: T) {
    this.values.push(value);
  }

  public getValues(): T[] {
    return this.values;
  }
}


const numbers = new Collection<number>();
numbers.push(1);
numbers.push(2);
numbers.push(3);

console.log(numbers.getValues()); // [1, 2, 3]


function identity<T>(val: T): T {
  return val;
}

console.log(identity("Hello"))
