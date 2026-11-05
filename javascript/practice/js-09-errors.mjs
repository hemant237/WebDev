// 1) throw: galat input pe khud error uthao
function calculatelinetotal (price,qty) {
    if (typeof price != "number" || typeof qty != "number") {
        throw new Error("Price and qty must be numbers");
    }
    if (qty <= 0) {
        throw new Error("Price or qty must be greater than zero")
    }
    return price *qty;
}

console.log(calculatelinetotal(1500,3));


