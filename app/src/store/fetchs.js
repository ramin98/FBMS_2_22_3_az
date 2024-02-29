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

export const addProductAdminFetch = async (obj) => {
  await fetch(`http://localhost:5000/add-admin`, {
    method: "POST",
    headers:{
      "Content-type": 'application/json'
    } ,
    body:JSON.stringify(obj)
  });
};

export const changeProductAdminFetch = async (obj) => {
  await fetch(`http://localhost:5000/change-admin/${obj.id}`, {
    method: "PUT",
    headers:{
      "Content-type": 'application/json'
    } ,
    body:JSON.stringify(obj)
  });
};

export const deleteMyBagProductFetch = async (id) => {
  console.log(id);
  await fetch(`http://localhost:5000/delete-mybag/${id}`, { method: "DELETE" });
};
