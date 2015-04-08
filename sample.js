function sum(list) {

    if (list && list.length) {

        var total = 0;

        for (var i = 0; i < list.length; i++) {
            total += list[i];
        }

        return total;
    }

    return null;
}

export default sum;
