const { firestore } = require('firebase-admin');

console.log(firestore);

class CollectionCRUD {
  constructor(doc) {
    this._document(doc);
  }

  _document(col) {
    const document = { products: 'products', carts: 'carts' };
    return (this.doc = firestore().collection(col));
  }

  async getAll() {
    try {
      const querySnapshot = await this.doc.get();
      let docs = querySnapshot.docs;
      console.log(docs);
      const response = docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        code: doc.data().code,
        price: doc.data().price,
        stock: doc.data().stock,
        timestamp: doc.data().timestamp,
        product: doc.data().products,
      }));
      return response;
    } catch (err) {
      console.log(err);
    }
  }
  async create(value) {
    try {
      value.timestamp = String(new Date());
      const doc = this.doc.doc();
      doc.create(value);
      return doc.id;
    } catch (err) {
      console.log(err);
    }
  }
  // FIX: to bad id --> send message
  async getById(id) {
    try {
      const _id = id;
      const doc = this.doc.doc(`${_id}`);
      const item = await doc.get();
      return item.data();
    } catch (err) {
      console.log(err);
    }
  }
  async deleteById(id) {
    try {
      const _id = id;
      const doc = this.doc.doc(`${_id}`);
      const item = await doc.delete();
      return { delete: `${_id}` };
    } catch (err) {
      console.log(err);
    }
  }
  async updateById(id, value) {
    try {
      const _id = id;
      const doc = this.doc.doc(`${_id}`);
      const item = await doc.update(value);
      return { item };
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = CollectionCRUD;
