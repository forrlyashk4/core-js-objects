
function fromJSON(proto, json) {
  const translating = new Promise((res) => {
    res(JSON.parse(json));
  }).then((res) => res(Object.create(res, proto)));
  console.log(translating);
}

console.log(fromJSON('{ "a":10, "b":20, "c":30 }', {}));
