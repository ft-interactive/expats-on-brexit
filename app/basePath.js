// this is good enough for now
const basePath = location.pathname.slice(0, -1);

console.log('initial basePath is', basePath);
console.log('location', location);

export default basePath;
