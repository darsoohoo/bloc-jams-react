formatTime(seconds) {
    if (isNaN(seconds)) { return "-:--"; }
    const wholeSeconds = Math.floor(seconds);
    const minutes = Math.floor(wholeSeconds / 60);
    const remainingSeconds = wholeSeconds % 60;
    let output = minutes + ':';

    if (remainingSeconds < 10) {
      output += '0';
    }
    output += remainingSeconds;
    return output;
}