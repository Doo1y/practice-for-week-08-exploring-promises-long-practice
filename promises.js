/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here

function firstFunc() {
  return 1;
}

async function secondFunc() {
  return 2
}
console.log('func1', firstFunc());
console.log('func2', secondFunc());

secondFunc().then(result => console.log(result))
/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here

async function waiting() {
  const waiting = await secondFunc();
  console.log('waiting', waiting);
}

waiting()

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here

async function waitForPromise(param) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(param);
    }, 500);
  });
  
  const result = await promise;
  console.log("my third promise is", result);
}

waitForPromise('done!!!');

/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here

new Promise((resolve) => {
  setTimeout(() => {
    resolve('done!')
  }, 1000);
}).then(r => console.log('my fourth promise is', r));

/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function trigger(ms) {
  wait(ms).then(() => console.log('my fifth promise is done!!'))
}
trigger(1500)
/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here

const tryRandomPromise = (random) => {
  return new Promise((resolve, reject) => {
    if (random >= .5) {
      resolve('success!!!');
    } else {
      reject('error');
    }
  });
}
for (let i = 1; i < 10; i++) {
  const random = Math.random();
  wait(2000 + random * 1000)
    .then(() => tryRandomPromise(random))
    .then(result => console.log('random try #', i, result))
    .catch(error => console.error('random try #', i, error));
}

/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here

const tryRandomAsync = async (num) => {
  const random = Math.random();

  await wait(3000 + random * 1000);

  try {
    const result = await tryRandomPromise(random);
    console.log('random again #', num, result);
  } catch (error) {
    console.error('random again #', num, error);
  }
};

for (let i = 1; i < 10; i++) {
  tryRandomAsync(i);
}

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here

console.log('End of Program');