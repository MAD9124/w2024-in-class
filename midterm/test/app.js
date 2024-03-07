// fetch('http://localhost:4000/api/vote?keyword=killers of the').then(res => {
//     res.json().then(data => {
//         console.log(data);
//     });
// });
fetch('https://w2024-midterm.onrender.com/api/vote?keyword=killers of the').then(res => {
    res.json().then(data => {
        console.log(data);
    });
});
