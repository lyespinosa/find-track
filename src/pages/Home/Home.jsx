import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useEffect } from "react";
import { getSharedSavingsByUserRequest } from "../../services/public.service";
import ProgressBar from "../../components/forms/ProgressBar";
import SharedSavingsOnTop from "./components/SharedSavingsOnTop";

export default function Home() {

    useEffect(() => {
        const fetchData = async () => {
            let responseData = await getSharedSavingsByUserRequest();
            console.log(JSON.stringify(responseData));
        };

        fetchData();
    }, [])




    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isOpen2, onOpen: onOpen2, onOpenChange: onOpenChange2 } = useDisclosure();
    const { isOpen: isOpen3, onOpen: onOpen3, onOpenChange: onOpenChange3 } = useDisclosure();


    return (
        <>
            <section className='top'>
                <SharedSavingsOnTop title="Viaje de fin de semana" goal={2000} current={1500} />
                <SharedSavingsOnTop title="Para los gastos de la casa" goal={7200} current={3000} />
                <SharedSavingsOnTop title="Cena familiar" goal={4500} current={800} />
                <SharedSavingsOnTop title="Regalos de cumpleaños" goal={3000} current={2000} />

            </section>

            <section className='center'>
                <section className='feeds'>
                    <div className="py-2 px-2" >
                        <p className="text-center font-bold text-lg text-zinc-600">Apartados individuales</p>
                        <section className="flex justify-around">
                            <section className="w-[32%] px-4 flex flex-col justify-evenly items-center h-52 border-r-2 border-zinc-300">
                                <p className=" font-bold text-[#3025a7] text-xl"> Gastos de la semana</p>
                                <p className="text-xl font-medium">Meta <span className="font-extrabold">$1200.00</span></p>
                                <ProgressBar height={40} goal={1200} current={350} textInsideBar={'$350.00'} />
                                <Button className="w-28" color="primary" variant="flat" onPress={onOpen}>Apartar</Button>
                            </section>
                            <section className="w-[32%] px-4 flex flex-col justify-evenly items-center h-52 border-r-2 border-zinc-300">
                                <p className=" font-bold text-[#3025a7] text-xl">Comprar laptop</p>
                                <p className="text-xl font-medium">Meta <span className="font-extrabold">$18000.00</span></p>
                                <ProgressBar height={40} goal={18000} current={12000} textInsideBar={'$12000.00'} />
                                <Button className="w-28" color="primary" variant="flat" onPress={onOpen}>Apartar</Button>
                            </section>
                            <section className="w-[32%] px-4 flex flex-col justify-evenly items-center h-52 ">
                                <p className=" font-bold text-[#3025a7] text-xl"> Gastos de la semana</p>
                                <p className="text-xl font-medium">Meta <span className="font-extrabold">$1200.00</span></p>
                                <ProgressBar height={40} goal={1200} current={350} textInsideBar={'$350.00'} />
                                <Button className="w-28" color="primary" variant="flat" onPress={onOpen}>Apartar</Button>
                            </section>

                        </section>
                    </div>
                    <div>
                        <p className="text-center font-bold text-lg text-zinc-600">Apartados agregados reciente</p>

                    </div>
                </section>
                <div className='list'>
                    <p className="text-center font-bold text-lg text-zinc-600">Meta más cercana</p>
                </div>
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
