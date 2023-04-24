function delayedResult(n1, n2, delayTime, callback) {
  let result = n1 + n2;
  setTimeout(callback, delayTime, result);
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
});

delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
});

function delayedResultPromise(n1, n2, delayTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = n1 + n2;
      resolve(result);
    }, delayTime);
  });
}

delayedResultPromise(4, 5, 3000).then(console.log);

async function main() {
  const data = await delayedResultPromise(4, 5, 3000);
  console.log(data);
}
main();
