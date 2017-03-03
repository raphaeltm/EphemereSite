function adBlockDetected() {
    $('.ad-blocked').show();
}


if (typeof blockAdBlock === 'undefined') {
    adBlockDetected();
}
else {
    blockAdBlock.onDetected(adBlockDetected);
}