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
    
    let total=document.getElementById('value')
  var yash =0
    axios.get("https://crudcrud.com/api/ce5116b1c1564a0690431ca288746174/admin")
    .then((response)=>{
        for(let i=0;i<response.data.length;i++){
           yash = yash+response.data[i].sellingPrice
        }

    })
    
    generateID.appendChild(showData);
     showData.appendChild(btn);
    //  total.appendChild(yash);

     total.innerHTML=yash
   
}