class DynamicArray {

  constructor(capacity = 4, length = 0) {
    this.capacity = capacity;
    this.data = new Array(this.capacity);
    this.length = length;

  }

  read(index) {
    let counter = -1;
    let value;
    this.data.forEach(element => {
      counter++;
      if (counter == index) {
        value = element;
      }
    });
    return value;
  }

  push(val) {
    if (this.length > 0 && this.capacity !== this.length) {
      this.data[this.length] = val;
      this.length++;
    } else if (this.length == this.capacity) {
      this.resize();
      this.data[this.length] = val;
      this.length++;
    } else if (this.length == 0) {
      this.data[0] = val;
      this.length++
    }
  }


  pop() {
    if (this.length > 0) {
      const val = this.data[this.length - 1]
      this.data[this.length - 1] = null;
      this.length--;
      return val;
    } else {
      return undefined;
    }
  }

  shift() {
    if (this.length > 0) {
      const val = this.data[0]
      for (let i=0; i<this.data.length - 1; i++) {
        this.data[i] = this.data[i + 1]
      }
      this.data[this.length - 1] = undefined;
      this.length--;
      return val;
    } else {
      return undefined;
    }
  }

  unshift(val) {
    if (this.length > 0 && this.length !== this.capacity) {
      for (let i=this.length - 1; i>=0; i--) {
        this.data[i + 1] = this.data[i];
      }
      this.data[0] = val;
      this.length++;
    } else if (this.length == this.capacity) {
        this.resize();
        for (let i=this.length - 1; i>=0; i--) {
          this.data[i + 1] = this.data[i];
        }
        this.data[0] = val;
        this.length++;
    } else if (this.length == 0) {
        this.data[0] = val;
        this.length++;
    }
  }

  indexOf(val) {
    for (let i=0; i<this.data.length; i++) {
      if (this.data[i] == val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    this.capacity = this.capacity * 2;
    for (let i=this.capacity/2; i<this.capacity; i++) {
      this.data[i] = undefined;
    }
  }

}
















module.exports = DynamicArray;
