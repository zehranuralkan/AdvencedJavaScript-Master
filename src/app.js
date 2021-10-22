//var,let,const
//javascript dosya bazlı programlama dilidir.
// javascript typesafe değildir.
let sayi1=10
sayi1="engin demiroğ"
let student={id:1,name:"zehra"}
//console.log(student)

//fonksiyon tanimlama
function save(puan=10,ogrenci) {
    console.log(ogrenci.name+" "+ puan)
}

//save(undefined,student);

//array
let students=["Zehra Nur Alkan","Bulut Aras"]
//console.log(students)

let students2=[student,{id:2,name:"Zehra "},"İstanbul",{city:"İstanbul"}]
//console.log(students2)

//rest (geriye kalan)
//params
//varArgs
let showProducts=function (id,...products) {
    console.log(id)
    console.log(products[0])
}
//console.log(typeof showProducts)
//function
//showProducts(10,["Elma","Armut","Karpuz"])

//console.log(Math.max(1,2,3,50,4,60,14))
//en buyuk sayiyi yazdirir

//spread: bir array'i ayırıyor
let points=[1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(Math.max(...points)))
console.log(..."ABC","D",..."EFG","H")

//Destructuring:elimizdeki arrayin değerini degiskene atamak
let populations=[10000,20000,30000,[40000,10000]]
let [small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1,number]) {
    console.log(small1)
   
}

someFunction(populations)

let category={id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])
let {id,name}=category
console.log(id)
console.log(name)