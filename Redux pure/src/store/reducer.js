export let initialState = {
  array: [],
  obj:null,
  index:null,
  showModal:false
};

export function getArray(){
  console.log('fetch')
  return function(dispatch){
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => {
        console.log(data)
        dispatch({type:'GET', payload:data})
      })
  }
}

export function reducer(state = initialState, action) {
  if (action.type === "ADD") {
    let id;
    if (state.array.length !== 0) {
      id = state.array.at(-1).id + 1;
    } else {
      id = 1;
    }
    let obj = {
      name: action.payload.inputName,
      email: action.payload.inputMail,
      id: id,
    };
    let newArr = [...state.array, obj];
    return { ...state, array: newArr };
  } else if (action.type === "DELETE") {
    let newArr = state.array.filter((item) => item.id !== action.payload);
    return { ...state, array: newArr };
  } else if (action.type === "CHANGE") {
    let selectedObjIndex = state.array.findIndex(
      (item) => item.id === action.payload.index
    );
    let newArr = [...state.array];
    newArr[selectedObjIndex].name = action.payload.changeInputName;
    newArr[selectedObjIndex].email = action.payload.changeInputMail;
    return { ...state, array: newArr };
  }else if (action.type === "GET") {
    return { ...state, array: action.payload };
  }
  else if (action.type === "GET OBJ") {
    return { ...state, obj: action.payload };
  }

  return state;
}
