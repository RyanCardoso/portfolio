// Libs 
import React, { useState, useEffect } from "react";
import * as S from "./styles";

const Main = () => {
    const [title, setTitle] = useState(['']);
    const [ shadow, setShadow ] = useState('');

    const titleTxt = "Hello Word, welcome!";
    let titleShadow = '';

    useEffect(() => {
        showText(titleTxt, 150);

        for (let i = 0; i < 20; i++) {
            titleShadow += (titleShadow? ',' : '')+ -i*1+'px '+ i*1+'px 0 #d9d9d9';

            if (i >= 19) {
                setShadow(titleShadow);
            }
        }

    }, [])

    const showText = (text, interval) => {
        let char = text.split("").reverse();
        let finish = '';

        const typer = setInterval(() => {
            if (!char.length) return clearInterval(typer)

            let next = char.pop();
            finish += next;
            setTitle(finish);

        }, interval);
    }

    return (
        <S.Container>
            <S.Title
                content={title}
                textShadow={shadow}
            >
                {title}
            </S.Title>
        </S.Container>
    )
}

export default Main;


// var el = document.querySelector("#text");
// var text = "JavaScript é muito bom!"
// var interval = 200;
// function showtext(el, text, interval) {
//     var char = text.split("").reverse();

//     var typer = setInterval(function () {

//         if (!char.length) {
//             return clearInterval(typer)
//         }

//         var next = char.pop();

//         el.innerHTML += next;

//     }, interval);

// }
// showtext(el, text, interval);