function solution(order) {
    let price = 0;
    order.forEach(v => {
        if (v === "icecafelatte" || v === "cafelatteice" || v === "hotcafelatte" || v === "cafelattehot" || v === "cafelatte") {
            price += 5000;
        } else {
            price += 4500;
        }
    })
    return price;
}