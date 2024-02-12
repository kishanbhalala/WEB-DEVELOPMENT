//////////////////////// APC ////////////////////////
// {
//     alert("kishan bhalala")
// }
// {
//     var age = prompt( "Please enter your age:");
//     document.write(age)
// }
// {
//     var msg = confirm( "Do you want to display the message?");
//     document.write(msg)
// }

// {
//     var newEle = document.createElement("marquee")
//     newEle.textContent= "hello"
//     document.body.appendChild(newEle)
// }

/////////////////////////////////// loops ///////////////////////////////////

// {
//     var count = 1;
//     while(count <= 10){
//        document.write(count + "<br>")
//        count++;
//     }
// }
// {
//     var count = 100;
//     do{
//         document.write(count + "<br>")
//         count--;
//     }while(count >= 91);
// }
// {
//   for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//       console.log("even", i);
//     }
//     else{
//         console.log("odd", i);
//     }
//   }
// }

// {
//     var arr = ["javascript","c++","recatJs"]
//     for(let x of arr){
//         document.write(x  + "<br>")
//     }
// }

// {
//     var a = [10,20,30,40,50]
//     for(let x of a){
//         document.write(x)
//     }
// }
// {
//     var obj = {
//         name : "kishan",
//         age : 25,
//         number :  13478646464
//     }
//     for (var c of  Object.keys(obj)) {
//         document.write(c)
//     }
// }
// {
//     var a = [10,20,30,40,50]
//     for (let x in a){
//         document.write(x)
//     }
// }
// {
//     var obj = {
//         name : "kishan",
//         age : 25,
//         number :  13478646464
//     }
//     for(let x in obj){
//         document.write(`${x} : ${obj[x]}` + "<br>")
//     }
// }

///////////////////////////// date method /////////////////////////////
// {
//     var date = new Date()
//     console.log(date)
// }
// {
//     var date = new Date()
//     console.log(date.getDate());
//     console.log(date.getMonth());
//     console.log(date.getFullYear());
//     console.log(date.getHours());
//     console.log(date.getMinutes());
//     console.log(date.getSeconds());
//     console.log(date.getMilliseconds());
// }
// {
//     const dates = new Date();
//     dates.setMonth(10);
//     console.log(dates);
// }

//////////////////////// Map method ****** Set method ////////////////////////

// {
//   var obj = {
//     name: "Kishan",
//     true: 25,
//   };
//   console.log(obj.name);
//   obj.city = "surat";
//   console.log(obj);
//   delete obj.true
//   console.log(obj);
// }

// {
//   var mapobj = new Map([
//     ["name", "kishan"],
//     [true, "bhalala"],
//   ]);
//   console.log(mapobj.keys());
//   mapobj.set("city", "mumbai");
//   console.log(mapobj);
//   mapobj.set("name", "jeegar");
//   console.log(mapobj);

//   console.log(mapobj.values());
//   console.log(mapobj.size);

//   mapobj.delete(true)
//   console.log(mapobj);

//   console.log(mapobj.has('name'));

//   mapobj.set({},'this is object')
//   mapobj.set(() => {},'this is arrow')

//   console.log(mapobj);

//   mapobj.forEach((a,b)=>{
//     console.log(a,b);
//   })

// }

// {
//   var obj = new Set([1, 2, 3, true, {}, 2, true]);
//   console.log(obj);

//   obj.add("hello");
//   obj.add("hiii");
//   obj.add({ name: "kishan" });
//   obj.delete(3)
// //   obj.clear()

// obj.forEach((item) => {
//     console.log(item);
// })
//   console.log(obj);
// }
