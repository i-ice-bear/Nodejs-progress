import vm from "node:vm";
import prompt from "prompt";

//+ Context logic
const context = {
  cat: "Cat",
  count: 2,
};

const contextScript = new vm.Script("count +=1, name='Hello,Kitty'; ");
vm.createContext(context);

for (let i = 0; i < 10; ++i) {
  contextScript.runInNewContext(context);
}

console.log(context);

//+ Const global variables:

global.name = "max";
const virtualEnv = `console.log(this.name)`;
vm.runInThisContext(virtualEnv);

// Defined contextScript

const vmContext = (given) => {
  const contextScr = {
    animal: "Hello, Kitty!",
    userFace: given,
    console: console,
  };
  vm.createContext(contextScr);
  const output = `console.log(this.animal, this.userFace)`;
  vm.runInContext(output, contextScr);
};

prompt.start();
prompt.get(["statement"], function (err, result) {
  if (err) {
    return onPromptErr(err);
  } else {
    console.log("Enter your statement: " + result)
    vmContext(result.statement);
  }
});

function onPromptErr(err, result) {
  console.log(err);
  return 1;
}
