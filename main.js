let val = document.addEventListener('submit',upForm);
function upForm(event){
event.preventDefault();
 let selling = document.getElementById('selling').value;
let product = document.getElementById('product').value;

let obj={
    sellingPrice:selling,
    productName:product
  

}
axios.post("https://crudcrud.com/api/986f3c10c26449999d834f1e9eb6190c/admin",obj)
.then((response)=>{
    uiUpadte(response.data)
})
.catch((err)=>{
    console.log(err);
})


}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/986f3c10c26449999d834f1e9eb6190c/admin")
    .then((respnse)=>{
        for(let i = 0;i<respnse.data.length;i++){
            uiUpadte(respnse.data[i])
        }

    })
})
function uiUpadte(obj){
    let generateID = document.getElementById('outputList');
    let showData = document.createElement('li');
    
   
    showData.textContent ='Product Deatils'+'     '+ obj.sellingPrice+'---'+obj.productName;
    let btn = document.createElement('button');
    btn.textContent='delete button';
    btn.onclick=()=>{
        axios.delete(`https://crudcrud.com/api/986f3c10c26449999d834f1e9eb6190c/admin/${obj._id}`)
        .then(()=>{
            generateID.removeChild(showData);

        })
        .catch((err)=>{
            console.log(err)
        }) 

    }
    
   
 
    
    generateID.appendChild(showData);
     showData.appendChild(btn);
    
   
}
