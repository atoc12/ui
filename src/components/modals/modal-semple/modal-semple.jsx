import { AiOutlineClose } from 'react-icons/ai';
import '../modal.css';
import { useEffect, useRef, useState } from 'react';
export const ModalSemple = ({parent,onClick=()=>{},children,buttonText="Aceptar",type="semple",tittle="titulo",model="normal",className=''})=>{
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
            <div className={`modal-semple ${className}`} role='modal' model-active={open != "hidden" ? open ?"active" : "disable" : "hidden"}>
                <span onClick={(e)=>{setOpen(false);click(false,e)}}></span>
                <div className='modal-container'>
                    <div className='modal-top-options'>
                        <button className='btn' onClick={(e)=>{setOpen(false);click(false,e)}}><AiOutlineClose/></button>
                    </div>
                    <div className='modal-text'>
                        <div className='modal-info'>
                            <h1>{tittle}</h1>
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                    <div className='modal-bottom-options' model-button-styles={model}>
                        {
                            type == "semple" && <button onClick={(e)=>click(true,e)} value={true} className='btn btn-primary p-05' aria-label='button accept modal'>{buttonText}</button>
                        }
                        {
                            type == "dual" && 
                            <>
                                <button onClick={(e)=>click(false,e)} value={false} className='btn btn-semple p-05' aria-label='button cancel modal'>{buttonText}</button>
                                <button onClick={(e)=>click(true,e)} value={true} className='btn btn-primary p-05' aria-label='button accept modal'>{buttonText}</button>
                            </>

                        }
                        
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}