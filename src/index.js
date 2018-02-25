
function compareNegative(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
}

function comparePositive(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

class Sorter {
    constructor() {
        this.mass = [];
        // your implementation
    }

    add(element) {
        this.mass.push(element);
        // your implementation
    }

    at(index) {
        return this.mass[index]; // your implementation
    }

    get length() {
        return this.mass.length;
        // your implementation
    }

    toArray() {
        return this.mass;            // your implementation
    }

    sort(indices) {
        var m = [];
        for (var i = 0; i < indices.length; i++) {
            m.push(this.mass[indices[i]]);
        }
        if (indices[0] > indices[1])
            m.sort(compareNegative);
        else
            m.sort(comparePositive);

        for (var i = 0; i < indices.length; i++) {
            this.mass[indices[i]] = m[i];
        }
        // your implementation
    }

    setComparator(compareFunction) {
        this.mass.sort(compareFunction);
        // your implementation
    }
};

module.exports = Sorter;