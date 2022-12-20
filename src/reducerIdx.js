const store = require('./store')
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})
store.dispatch(fetchUsers())
unsubscribe()