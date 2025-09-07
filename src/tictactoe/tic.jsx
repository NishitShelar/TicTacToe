import React, {useState, useRef, useEffect} from 'react'
import circle from "../assets/circle.png"
import cross from "../assets/cross.png"
import './tic.css'

const tic = () => {
    const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    
    const toggle = (e, index) => {
    if (lock || data[index] !== "") {
        return;
    }

    const player = count % 2 === 0 ? "x" : "o";

    setData(prev => {
        const newData = [...prev];
        newData[index] = player;
        return newData;
    });

    e.target.innerHTML = player === "x"
        ? `<img src='${cross}'>`
        : `<img src='${circle}'>`;

    setCount(count + 1);
    };

    const checkWin= () => {
        if(data[0] === data[1] && data[1] === data[2] && data[2] !== ''){
            won(data[0]);
        }else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ''){
            won(data[3]);
        }else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ''){
            won(data[6]);
        }else if(data[0] === data[3] && data[3] === data[6] && data[6] !== ''){
            won(data[0]);
        }else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ''){
            won(data[1]);
        }else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ''){
            won(data[2]);
        }else if(data[0] === data[4] && data[4] === data[8] && data[8] !== ''){
            won(data[0]);
        }else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ''){
            won(data[2]);
        }
        function won(winner){
            setLock(true);
            if(winner ==="x"){
                titleRef.current.innerHTML = `Congratulations: <img src='${cross}'> Wins!`;
            }else{
                titleRef.current.innerHTML = `Congratulations: <img src='${circle}'> Wins!`;
            }

        }
    }
    const reset = () => {
        setCount(0);
        setLock(false);
        titleRef.current.innerHTML = "TicTacToe";
        setData(['', '', '', '', '', '', '', '', '']);

        const boxes = document.querySelectorAll(".boxes");
        boxes.forEach(box => box.innerHTML = "");
    };

    useEffect(() => {
        checkWin();
    }, [data]); 

  return (
   <div className='container'>
        <h1 className="title" ref={titleRef}>TicTacToe</h1>
        
        <div className="board">
            <div className="row1">
                <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
                <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
                <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
            </div>
            <div className="row2">
                <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
                <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
                <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
            </div>
            <div className="row3">
                <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
                <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
                <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
            </div>
        </div>
        <button className="reset" onClick={() => {reset();}}>Reset</button>
   </div>
  )
}


export default tic