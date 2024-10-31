// تعريف الدالة sleep
function sleep(millis) {
    // إرجاع وعد (Promise)
    return new Promise((resolve) => {
        // استخدام setTimeout لتأخير التنفيذ
        setTimeout(() => {
            resolve(millis); // استدعاء resolve مع قيمة millis
        }, millis); // التأخير بالميلي ثانية المحددة
    });
}

// استخدام الدالة sleep
let t = Date.now(); // الحصول على الوقت الحالي
sleep(100).then(() => {
    console.log(Date.now() - t); // حساب الوقت المنقضي
});
