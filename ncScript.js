const menu = [
    ['<img src="/HTML/NewCafe/Assets/menu/resized/cake-slice.jpg" alt="slice of chocolate cake">','Slice of Cake', 4.50, 'A lovely slice of chocolate cake. See specials board for todays freshley baked selection.']
    [' <img src="/HTML/NewCafe/Assets/menu/resized/filled-baguette.jpg" alt="Baguette sandwich with a range of meat and salad fillings">','Baguete', 5.50,'8 inch baguette baked fresh each day. Choose your selection of fresh fillings.']
]


var menudata = document.querySelector(".menuCard");
console.log (menudata.innerHTML);


var menudata2 = document.querySelectorAll(".menuCard");
console.log (menudata2.innerText);

document.getElementById('test1').innerHTML += 'Just playing around';

//let colors = ['red','green','blue'];
//for (const color of colors){
//    document.getElementById()
//    console.log(color);
//}