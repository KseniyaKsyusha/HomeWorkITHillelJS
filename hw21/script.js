// "use strict";

function* Foo(index) {
  console.log("start");
  while (index < 4) {
    yield index;
    index++;
  }
  console.log("finish");
}

const iteratorFoo = Foo(1);
console.log(iteratorFoo.next().value);
console.log(iteratorFoo.next().done);
console.log(iteratorFoo.next().value);
console.log(iteratorFoo.next().done);

function Boo() {
  this.step = 1;
  this.next = function () {
    let result = {
      value: undefined,
      done: true,
    };

    if (this.step === 1) {
      console.log("start");
    } 

    if (this.step <= 3) {
      result.value = this.step;
      result.done = false;
    }

    if (this.step === 4) {
      console.log("finish");
    }

    this.step++;

    return result;
  };

  return this;
}

console.log("");
const iteratorBoo = Boo();
console.log(iteratorBoo.next().value);
console.log(iteratorBoo.next().done);
console.log(iteratorBoo.next().value);
console.log(iteratorBoo.next().done);
