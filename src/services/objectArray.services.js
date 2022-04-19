export default class ObjectArray {
  constructor(data) {
    this.array = data;
  }

  getMaxId() {
    const max = this.array.reduce((max, p) => {
      return p.id > max ? p.id : max;
    }, this.array[0].id);
    return max;
  }

  getObjectById(id) {
    console.log('aca get object', this.array);
    return this.array.filter((p) => p.id == id);
  }
  getObjectIndex(id) {
    console.log('getO', this.array);
    return this.array.findIndex((p) => p.id == id || p.pid == id);
  }
}
