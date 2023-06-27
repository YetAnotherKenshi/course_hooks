import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const block = useRef();
    const blockText = useRef();
    const handleClick = () => {
        block.current.style.height = "150px";
        block.current.style.width = "80px";
        blockText.current.textContent = "text";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={block}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={blockText}>Блок</small>
            </div>
            <button className="btn btn-secondary" onClick={handleClick}>
                Изменить
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
