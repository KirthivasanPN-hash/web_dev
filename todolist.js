let input = prompt("So what's your goal today?");

const todos = ["Prac for SE", "apply for interships"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("*************************");
    for (let i = 0; i < todos.length; i += 1) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*************************");
  } else if (input === "new") {
    const newTodo = prompt("ok, what would you like to add:");
    todos.push(newTodo);
    console.log(`${newTodo} added to list`);
  } else if (input === "delete") {
    const deleteTodo = parseInt(prompt("ok, what would you like to delete:"));
    if (!Number.isNaN(deleteTodo)) {
      const deleteditem = todos.splice(deleteTodo, 1);
      console.log(`ok, delete this ${deleteditem[0]}`);
    } else {
      console.log("Unknown index");
    }
  }
  input = prompt("So what's your goal today?");
}

console.log("bye bye 👋 take a small break !");
