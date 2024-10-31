function createCounter(n) {
    let count = n; // ابدأ من القيمة n
    return function() { // إرجاع دالة العد
        return count++; // إرجاع القيمة الحالية وزيادتها بمقدار 1
    };
}

// مثال على الاستخدام
const counter = createCounter(10); // ابدأ العد من 10
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
