'use strict';

/**
 * Represents a WhatsApp data structure
 */
class Base {
    constructor(client) {
        /**
         * The client that instantiated this
         * @readonly
         */
        Object.defineProperty(this, 'client', { value: client });
    }

    _clone() {
        return Object.assign(Object.create(this), this);
    }

    _patch(data) {
        return data;
    }

    static _normalizeId(id) {
        if (id && id._serialized == null && id.$1 != null) {
            return Object.assign({}, id, { _serialized: id.$1 });
        }
        return id;
    }
}

module.exports = Base;
