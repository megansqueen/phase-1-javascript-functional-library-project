function myEach(collection, alert) {
    let array = Object.values(collection);
     console.log("these should be values", array)
    array.forEach(alert);
    return collection
}

function myMap(collection, callback) {
    let array = Object.values(collection);
    let newArray = array.map(callback)
    return newArray
}

function myReduce(collection, callback, acc) {
    let array = Object.values(collection)
    if(acc) {
        const total = array.reduce(callback, acc)
        return total
        }
    else {
        const total = array.reduce(callback)
        return total
    }
}

function myFind(collection, callback) {
    let array = Object.values(collection);
    const found = array.find(value => callback(value))
    if (found) {
        return found
    }
}

function myFilter(collection, callback) {
    let array = Object.values(collection);
    const filtered = array.filter(callback)
    if (filtered) {
        return filtered
    }
}

function mySize(collection) {
    let array = Object.values(collection);
    let mySet = new Set(array)
    return mySet.size
}

function myFirst(array, n) {
    if (array ==  null) 
        return void 0;
    if (n == null)
        return array[0]
    if (n < 0)
        return [];
    return array.slice(0, n)
    }

function myLast(array, n) {
    if (n)
        return array.slice(-n);
    else {
        return array[array.length - 1]
    }
}

function mySortBy(array, callback) {
    let sortedArray = array.sort(callback)
    return sortedArray
}