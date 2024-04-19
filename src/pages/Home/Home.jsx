
export default function Home() {

    return (
        <>
            <section className='top'>
                <div className="favorite">
                    <section>
                        <p>Gasto compartido con: </p>
                        <i>L</i>
                        <i>J</i>
                        <i>D</i>
                    </section>
                    <section className="favorite_total">
                        <p>Total gastado <span>$2300</span></p>
                    </section>
                    <section className="favorite_fecha">
                        <section>
                            <button className="favorite_details">Ver detalles</button>
                        </section>
                        <section>
                            <p>Fecha de corte: </p>
                            <p>20 de marzo</p>
                        </section>
                    </section>
                </div>
                <div className="favorite"></div>
                <div className="favorite"></div>
                <div className="favorite favorite-selected"></div>
            </section>

            <section className='center'>
                <section className='feeds'>
                    <div></div>
                    <div></div>
                </section>
                <div className='list'></div>
            </section>
        </>
    )
}
