import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { BiError } from 'react-icons/bi';
import '../modal.css';
import { useEffect, useRef, useState } from 'react';
export const ModalMessage = ({parent,onClick=()=>{},children,buttonText="Aceptar",type="error",typeMesage="dual",tittle="titulo",model="normal",className=''})=>{
    const [open,setOpen] = useState("hidden");

    const click =(value,e)=>{
        setOpen(false)
        onClick(value,e);
    }

    useEffect(()=>{
        document.getElementById(parent).addEventListener("click",()=>setOpen(true));
    },[])
    return(
        <>
            <div className={`modal-semple modal-message ${className}`} role='modal' model-active={open != "hidden" ? open ?"active" : "disable" : "hidden"}>
                <span onClick={(e)=>{setOpen(false);click(false,e)}}></span>
                <div className='modal-container'>
                    <div className='modal-top-options'>
                        <button className='btn' onClick={(e)=>{setOpen(false);click(false,e)}}><AiOutlineClose/></button>
                    </div>
                    <div className='modal-text'>
                        <div className={` modal-info ${type == "error" ? 'icon-error' : 'icon-succes' }`}>
                            <span>
                                {
                                    type == "error" && <BiError/>
                                }
                                {
                                    type == "succes" && <AiOutlineCheck/>
                                }
                            </span>
                            <h1>{tittle}</h1>
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                    <div className='modal-bottom-options' model-button-styles={model}>
                        {
                            typeMesage == "semple" && <button onClick={(e)=>click(true,e)} value="1" className='btn btn-primary p-05'>{buttonText}</button>
                        }
                        {
                            typeMesage == "dual" && 
                            <>
                                <button onClick={(e)=>click(false,e)} value="0" className='btn btn-semple p-05'>{buttonText}</button>
                                <button onClick={(e)=>click(true,e)} value="1" className='btn btn-primary p-05'>{buttonText}</button>
                            </>

                        }
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}