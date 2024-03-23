let count = 0;

function countUpToTen() {
  if (count < 10) {
    count++;
    console.log(count);
    setTimeout(countUpToTen, 1000);
  }
}

countUpToTen();