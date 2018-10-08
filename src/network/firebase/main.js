import db from './init';

export default class HTTPMethods {
  constructor(params) {
    this.parmas = params;
  }
  getAjax() {
    const dataArr = [];
    db.collection(this.parmas).get().then((querySnapshot) => {
      this.loading = false;
      querySnapshot.forEach((doc) => {
        dataArr.push(doc.data().item);
      });
    }).catch((err) => {
      console.log(err);
    });
    return dataArr;
  }

  postAjax(args) {
    db.collection(this.parmas).add({
      item: args,
    }).catch((err) => {
      console.log(err);
    });
  }
}
