// const test = str.split(" ").map(word => {
//     return state.articles
//         .filter(
//             item =>
//                 item.title.toLowerCase().includes(word.toLowerCase()) ||
//                 item.summary.toLowerCase().includes(str.toLowerCase())
//         )
//         .map(item => {
//             let newTitle = item.title.replace(
//                 new RegExp(`${word}`, "gi"),
//                 match => `<mark > ${match}</mark>`
//             );
//             let newDesc = item.summary.replace(
//                 new RegExp(`${word}`, "gi"),
//                 match => `<mark >${match}</mark>`
//             );
//             return {
//                 ...item,
//                 title: newTitle,
//                 summary: newDesc,
//             };
//         });
// });
