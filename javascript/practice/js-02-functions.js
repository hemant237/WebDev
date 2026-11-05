function calculatelinetotal(price,qty) {
    return price * qty
}

const gstamount = (amount) => (amount*18)/100;

const subtotal =calculatelinetotal(1500,3);
const gst = gstamount(subtotal);
const grandtotal = subtotal+gst;

console.log(`Subtotal : ${subtotal}`);
console.log(`Gst: ${gst}`);
console.log(`GrandTotal: ${grandtotal}`);


function applydiscount(amt,percent=0) {
    return amt * (100-percent)/100
}

console.log(applydiscount(5000, 10));
console.log(applydiscount(2000, 25));
console.log(applydiscount(2000));

