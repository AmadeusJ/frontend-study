const addOneItem = (state, todoItem) => {
    var obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));   // .setItem(key, value) 
    // this.todoItems.push(obj);
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.idx, 1);
}

const toggleOneItem = (state, payload) => {
    state.todoItems[idx].completed = !state.todoItems[idx].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
    state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }