function logPromiseError(error) {
  console.error('Promise Error', error);
}

function resolve(promise) {
  return promise.catch(error => {
    logPromiseError(error);
  })
}

function resolveWithChain(promise) {
  return promise.catch(error => {
    logPromiseError(error);
    throw error;
  })
}


module.exports = {
  resolve,
  resolveWithChain,
}
