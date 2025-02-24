let ctr = 1;
function callback() {
  console.clear();
  console.log(ctr);
  ctr = ctr + 1;
}

setInterval(callback, 1000);
