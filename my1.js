let value = null;
do {
    value = +prompt("nhap gia tri")
} while (value<1 || value>10);
alert("so ban vua nhap la " + value);