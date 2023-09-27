// How to compare two JSON have the same proprties without order?
   // (a) let obj1={name:"person 1",age:5};
   // (b) let obj2={ age:5,name:"person 1"}; 

   let Obj1= {name:'person 1',age:5};
   let key1=(Object.keys(Obj1).sort());
   console.log(key1)
   console.log(JSON.stringify (key1));

   let Obj2={ age:5,name:"person 1"}; 
   let key2=(Object.keys(Obj2).sort());
   console.log(key2);
    console.log(JSON.stringify (key2))
  
   if(JSON.stringify (key1) === JSON.stringify (key2)){
    console.log("EQUAL")
   }else{
    console.log("NOT EQUAL")
   }
