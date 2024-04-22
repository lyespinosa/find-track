import React from 'react'
import ProgressBar from '../../../components/forms/ProgressBar';

export default function SharedSavingsOnTop({title, goal, current}) {

    const randomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };

    return (
        <div className="favorite">
            <section>
                <p>Ahorro compartido con: </p>
                <i style={{ backgroundColor: randomColor(), }}>J</i>
                <i style={{ backgroundColor: randomColor(), }}>L</i>
                <i style={{ backgroundColor: randomColor(), }}>D</i>
            </section>
            <section className="favorite_total">
                <p>{title}</p>
            </section>
            <section className="favorite_fecha">
                <section>
                    <p>Meta</p>
                    <span>${goal}.00</span>
                </section>
                <section>
                    <p>Total actual: </p>
                    <p className="fecha_number">${current}.00</p>
                </section>
            </section>
            <section className='w-64'>
                <ProgressBar goal={goal} current={current} />
            </section>
        </div>
    )
}
