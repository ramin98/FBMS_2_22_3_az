export const deleteProductFetch = async (id) => {
  console.log(id);
  await fetch(`http://localhost:5000/delete-admin/${id}`, { method: "DELETE" });
};

export const addProductFetch = async (obj) => {
  await fetch(`http://localhost:5000/add-mybag`, {
    method: "POST",
    headers:{
      "Content-type": 'application/json'
    } ,
    body:JSON.stringify(obj)
  });
};
