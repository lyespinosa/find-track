import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

export default function Home() {

    const randomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isOpen2, onOpen: onOpen2, onOpenChange: onOpenChange2 } = useDisclosure();
    const { isOpen: isOpen3, onOpen: onOpen3, onOpenChange: onOpenChange3 } = useDisclosure();


    return (
        <>
            <section className='top'>
                <div className="favorite">
                    <section>
                        <p>Gasto compartido con: </p>
                        <i style={{ backgroundColor: randomColor(), }}>J</i>
                        <i style={{ backgroundColor: randomColor(), }}>L</i>
                        <i style={{ backgroundColor: randomColor(), }}>D</i>
                    </section>
                    <section className="favorite_total">
                        <p>Total gastado <span>$2300</span></p>
                    </section>
                    <section className="favorite_fecha">
                        <section>
                            <Button onPress={onOpen} className="favorite_details">Ver detalles</Button>
                        </section>
                        <section>
                            <p>Fecha de corte: </p>
                            <p className="fecha_number">20 de junio</p>
                        </section>
                    </section>
                </div>
                <div className="favorite">
                    <section>
                        <p>Gasto compartido con: </p>
                        <i style={{ backgroundColor: randomColor(), }}>L</i>
                        <i style={{ backgroundColor: randomColor(), }}>R</i>
                        <i style={{ backgroundColor: randomColor(), }}>C</i>
                    </section>
                    <section className="favorite_total">
                        <p>Total gastado <span>$5400</span></p>
                    </section>
                    <section className="favorite_fecha">
                        <section>
                            <Button onPress={onOpen2} className="favorite_details">Ver detalles</Button>
                        </section>
                        <section>
                            <p>Fecha de corte: </p>
                            <p className="fecha_number">13 agosto</p>
                        </section>
                    </section>
                </div>
                <div className="favorite">
                    <section>
                        <p>Gasto compartido con: </p>
                        <i style={{ backgroundColor: randomColor(), }}>J</i>
                        <i style={{ backgroundColor: randomColor(), }}>L</i>
                        <i style={{ backgroundColor: randomColor(), }}>D</i>
                    </section>
                    <section className="favorite_total">
                        <p>Total gastado <span>$2000</span></p>
                    </section>
                    <section className="favorite_fecha">
                        <section>
                            <Button onPress={onOpen3} className="favorite_details">Ver detalles</Button>
                        </section>
                        <section>
                            <p>Fecha de corte: </p>
                            <p className="fecha_number">3 de septiembre</p>
                        </section>
                    </section>
                </div>
                <div id="selected" className="favorite favorite-selected">
                    <section>
                        <p>Gasto compartido con: </p>
                        <i style={{ backgroundColor: randomColor(), }}>J</i>
                        <i style={{ backgroundColor: randomColor(), }}>L</i>
                        <i style={{ backgroundColor: randomColor(), }}>D</i>
                    </section>
                    <section className="favorite_total">
                        <p>Total gastado <span>$2000</span></p>
                    </section>
                    <section className="favorite_fecha">

                        <section>
                            <p className="">Finalizada</p>
                        </section>
                    </section>
                </div>
            </section>

            <section className='center'>
                <section className='feeds'>
                    <div></div>
                    <div></div>
                </section>
                <div className='list'></div>
            </section>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Gastos de la sección</ModalHeader>
                            <ModalBody>
                                <ul className="modal_container">

                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Cena en restaurante</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $350</p>
                                        </section>
                                        <p className="fecha_gasto">10/04/24</p>
                                    </li>

                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Ropa nueva</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $500</p>
                                        </section>
                                        <p className="fecha_gasto">08/04/24</p>
                                    </li>

                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Regalos de cumpleaños</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $750</p>
                                        </section>
                                        <p className="fecha_gasto">06/04/24</p>
                                    </li>

                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Boletos de cine</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $200</p>
                                        </section>
                                        <p className="fecha_gasto">04/04/24</p>
                                    </li>

                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Compra de libros</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $500</p>
                                        </section>
                                        <p className="fecha_gasto">01/04/24</p>
                                    </li>

                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <Modal isOpen={isOpen2} onOpenChange={onOpenChange2}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Gastos de la sección</ModalHeader>
                            <ModalBody>
                                <ul className="modal_container">

                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Viaje de fin de semana</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $1200</p>
                                        </section>
                                        <p className="fecha_gasto">18/04/24</p>
                                    </li>

                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Compras para el hogar</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $800</p>
                                        </section>
                                        <p className="fecha_gasto">16/04/24</p>
                                    </li>

                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Cena en un restaurante elegante</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $600</p>
                                        </section>
                                        <p className="fecha_gasto">14/04/24</p>
                                    </li>

                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Regalos para amigos</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $1000</p>
                                        </section>
                                        <p className="fecha_gasto">12/04/24</p>
                                    </li>

                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Concierto de música</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $1800</p>
                                        </section>
                                        <p className="fecha_gasto">10/04/24</p>
                                    </li>


                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <Modal isOpen={isOpen3} onOpenChange={onOpenChange3}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Gastos de la sección</ModalHeader>
                            <ModalBody>
                                <ul className="modal_container">
                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Almuerzo con amigos</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $400</p>
                                        </section>
                                        <p className="fecha_gasto">17/04/24</p>
                                    </li>

                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Compras en línea</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $600</p>
                                        </section>
                                        <p className="fecha_gasto">15/04/24</p>
                                    </li>

                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Cena en casa</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $300</p>
                                        </section>
                                        <p className="fecha_gasto">12/04/24</p>
                                    </li>

                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Regalos para la familia</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $400</p>
                                        </section>
                                        <p className="fecha_gasto">10/04/24</p>
                                    </li>

                                    <li className="modal_gasto">
                                        <section>
                                            <p className="fecha_number">Café con amigos</p>
                                            <p className="dots">.....</p>
                                            <p className="modal_monto"> $300</p>
                                        </section>
                                        <p className="fecha_gasto">08/04/24</p>
                                    </li>


                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>
    )
}
