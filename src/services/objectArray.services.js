export default class ObjectArray {
  constructor(data) {
    this.array = data;
  }
  getMaxId() {
    const max = this.array.reduce((max, p) => {
      return p.id > max ? p.id : max;
    }, this.array[0]);
    console.log(Object.keys(max));
    return max;
  }
}
