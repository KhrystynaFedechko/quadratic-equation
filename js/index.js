calcQuad();

function calcQuad() {
    var result;
    var a = Number(prompt('Input a'));

    if (a === 0) {
        document.write('a can\'t be 0 ' +
            '<a href="https://homework6-khrystyna13.c9users.io/index.html">Try again</a>');
        return;
    }
    var b = Number(prompt('Input b'));
    var c = Number(prompt('Input c'));
    
    var discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        result = 'Your discriminant ' + discriminant + ' is less than 0';
    }

    else if (discriminant === 0) {
        result = 'Your discriminant ' + discriminant +
            ' so your square equation has one real root, x = 0';

    }
    else if (discriminant > 0) {

        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        result = 'x1 = ' + x1 + ', x2 = ' + x2;
    }

    document.write(result);

}

//var result = Math.sqrt(25);
//document.write(result);
