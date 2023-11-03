import './index.css';
import { NavigatorComponent } from "../../components/navigator/navigator";
import { useTheme } from "../../context/theme/theme_context"
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import { ModalSemple } from '../../components/modals/modal-semple/modal-semple';
import { ModalMessage } from '../../components/modals/modal-messages/modal-messages';
import { CardInfo } from '../../components/cards/card-info/card_info';

export const Index = ()=>{
    const {theme,setTheme} = useTheme();
    const [open,setOpen] = useState(false);
    return (
        <>
            <aside>
                <NavigatorComponent/>
            </aside>

            {/* BUTTONS AND MODLAS */}
            <div className='container'>
                <header>

                </header>

                <main>
                    <div className='col gap-1 h-full justify-around'>
                        <span className='line-h'></span>
                        <section className='row'>
                            <h1>Button's and Modal's</h1>
                        </section>
                        <section className='col gap-1 wrap'>
                            <button className='btn btn-secondary p-1 tooltip-container' id='btn-modal'>
                                <span className='tooltip-text'>Click me</span>
                                Click me
                            </button>
                            <button className='btn btn-primary p-1 tooltip-container' id='btn-modal2'>
                                <span className='tooltip-text'>Click me</span>
                                Click me
                            </button>
                            <button className='btn btn-danger p-1 tooltip-container' id='btn-modal3'>
                                <span className='tooltip-text'>Click me</span>
                                Click me
                            </button>
                            <button className='btn btn-success p-1 tooltip-container'>
                                <span className='tooltip-text'>Click me</span>
                                Click me
                            </button>
                            <button className='btn btn-warning p-1 tooltip-container'>
                                <span className='tooltip-text'>Click me</span>
                                Click me
                            </button>
                            <button className='btn btn-semple p-1 tooltip-container' id='btn-modal4'>
                                <span className='tooltip-text'>Click me</span>
                                Click me
                            </button>
                            <button className='btn btn-semple-denger p-1 tooltip-container'>
                                <span className='tooltip-text'>Click me</span>
                                Click me
                            </button>
                            <button className='btn btn-blur p-1 tooltip-container' id='btn-modal5'>
                                <span className='tooltip-text'>Click me</span>
                                Click me
                            </button>
                            <button className='btn btn-toggle' onClick={()=>setOpen(!open)} data-toggle={!open ? "left" : "right"}>
                                        <span></span>
                            </button>
                            <ModalSemple parent="btn-modal" className='modal-blur'  onClick={(value)=>console.log(value)}>
                                modal1
                            </ModalSemple>
                            <ModalSemple parent="btn-modal2" type='dual' >
                                modal2
                            </ModalSemple>
                            <ModalSemple parent="btn-modal3" type='dual-danger'>
                                Es necesario iniciar session
                            </ModalSemple>
                            <ModalMessage parent="btn-modal4" type='succes' model='second'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sint. Maxime, mollitia eius iste nesciunt incidunt, veniam consequatur provident nam atque totam, ex quae repellendus esse dolor maiores sequi optio.
                            </ModalMessage>
                            <ModalMessage parent="btn-modal5" type='error' typeMesage='dual' model='second'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sint. Maxime, mollitia eius iste nesciunt incidunt, veniam consequatur provident nam atque totam, ex quae repellendus esse dolor maiores sequi optio.
                            </ModalMessage>
                        </section>
                        <span className='line-h'></span>
                    </div>

                    {/* INPUTS */}

                    <div className='col gap-1 justify-between h-full'>
                        <section className='row center'>
                            <h1 className='tittle'>Inputs</h1>
                        </section>
                        <section className='col wrap gap-1'>
                            <input type="text" className=' input input-text' placeholder='Text' />
                            <section className='input-label'>
                                <label htmlFor="text-input"><AiOutlineSearch/></label>
                                <input type="text" id='text-input' className='input' placeholder='Buscar'/>
                            </section>
                        </section>
                        <span className='line-h'></span>
                    </div>
                    
                    {/* imgs */}
                    <div className='col gap-1 justify-between h-full'>
                        <section className='row center'>
                            <h1>Image's</h1>
                        </section>
                        <section className='col wrap gap-1'>

                            <div className='img-parent img-blurred'>
                                <img src="/img/example.jpg" />
                                <img src="/img/example.jpg" />
                            </div>

                            <div className='img-parent img-blurred'>
                                <img src="/img/example2.png" />
                                <img src="/img/example2.png" />
                            </div>

                            <div className='img-parent'>
                                <img src="/img/example3.jpg" />
                            </div>

                        </section>
                        <span className='line-h'></span>
                    </div>

                    {/* cards */}
                    <div className='col gap-1 justify-between h-full'>
                        <section className='row center'>
                            <h1>Card's</h1>
                        </section>
                        <section className='col wrap gap-1'>

                            <div className='card card-bg-blur'>
                                <section className='card-img-container'>
                                    <img className='img' src="/img/example.jpg" />
                                </section>
                                <section className='card-text-container'>
                                    <h1 className='card-tittle'>titulo</h1>
                                    <h2 className='card-subtittle'>subtitulo</h2>
                                    <p>descripcion</p>
                                </section>
                                <section className='card-options-container'>

                                </section>
                            </div>

                            <div className='card card-bg-blur'>
                                <section className='card-img-container'>
                                    <img className='img' src="/img/example3.jpg" />
                                </section>
                                <section className='card-text-container'>
                                    <h1 className='card-tittle'>titulo</h1>
                                    <h2 className='card-subtittle'>subtitulo</h2>
                                    <p>descripcion</p>
                                </section>
                                <section className='card-options-container'>
                                    <button className='btn btn-blur-second p-05'>Aceptar</button>
                                    <button className='btn btn-blur-second p-05'>Aceptar</button>
                                </section>
                            </div>

                            <div className='card card-bg-blur card-skeleton'>
                                <section className='card-img-container'>
                                    <span className='load-anim'></span>
                                </section>
                                <section className='card-text-container'>
                                    <span className='card-tittle load-anim'></span>
                                    <span className='card-subtittle load-anim'></span>
                                    <span className='card-description load-anim'></span>
                                </section>
                                
                            </div>

                        </section>
                        <span className='line-h'></span>
                    </div>

                    {/* Alert */}
                    
                    <div className='col gap-1 justify-between h-full'>
                        <section className='row center'>
                            <h1 className='tittle'>Alerts</h1>
                        </section>
                        <section className='col gap-1'>
                            <div className='alert'>
                                <span className='alert-icon'></span>
                                <span> Lorem ipsum dolor sit amet consectetur adipisicing elit..</span>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    )
}