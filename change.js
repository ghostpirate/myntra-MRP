if (document.getElementsByClassName('product-discountedPrice').length > 0) {
    var length = document.getElementsByClassName('product-discountedPrice').length;
    for (var i = 0; i < length; i++) {
        var priceWithoutTax = parseInt(document.querySelectorAll('.product-discountedPrice')[i].innerText.split(' ')[1]);
        var priceAfterTax = Math.floor(priceWithoutTax + ((priceWithoutTax * 5) / 100));
        document.getElementsByClassName('product-discountedPrice')[i].innerHTML = "Rs. " + priceAfterTax;
    }
}
if (document.getElementsByClassName('pdp-price').length > 0) {
    var priceWithoutTax = parseInt(document.getElementsByClassName('pdp-price')[0].innerHTML.split(' ')[1]);
    var priceAfterTax = Math.floor(priceWithoutTax + ((priceWithoutTax * 5) / 100));
    document.getElementsByClassName('pdp-price')[0].innerHTML = "Rs. " + priceAfterTax;
}