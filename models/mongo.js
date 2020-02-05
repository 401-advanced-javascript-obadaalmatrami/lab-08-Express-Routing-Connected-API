'use strict';

class Model {
    constructor(schema) {
        this.schema = schema;
    }


    get(_id) {
        let objQuwey = _id ? { _id } : {};
        return this.schema.find(objQuwey);
    }



    create(record) {
        let newRec = new this.schema(record);
        return newRec.save();
    }


    update(_id, record) {
        return this.schema.findByIdAndUpdate(_id, record, { new: true });
    }
    delete(_id) {
        return this.schema.findByIdAndDpdate(_id);
    }
}
module.exports = Model;