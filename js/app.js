const colorArray = ['A', 'B', 'C', 'D', 'E', 'F', 0,1,2,3,4,5,6,7,8,9];

const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    var color = generateRandomColor();
    console.log(color);
    document.body.style.backgroundColor = color;
})

const generateRandomColor = () => {
    var color = '#';
    for (let index = 0; index < 6; index++) {
        var number = Math.trunc(Math.random() * colorArray.length);
        color = color + colorArray[number];
    }

    return color;
}
