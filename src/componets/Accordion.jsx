import React,{useState}from "react";
import './Accordion.css'

function Accordion() {
    const[selected, setSelected] = useState(null)
    const toggle =(index)=> {
        if(selected === index){
            return setSelected(null)

        }
        setSelected(index);
        
    }
    return (
        <div className='warpper'>
            <div className='accordion'>
                {data.map((item, index) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(index)}>
                            <p>{item.title}</p>
                            <span>{selected === index ? '-' : '+'}</span>
                        </div>
                    
                    <div className={selected === index ? 'content show' : 'content'}>{item.content}</div>
                </div>

                ))}

            </div>

        </div>
    )
}
const data = [
    
    {
        title:'WHAT INFORMATION DO WE COLLECT',
        content:'We collect personal information that you pprivode to us'
    },
    {
        title:'WILL YOUR INFOMATION BES SHARED WITH ANYONE ',
        content:'We only share information with your consent, to comply with lawas, to provide you with services, to protect your rights, or to fulfill business obligations'

    },
    {
        title:'DO WE USE COOKIES AND OTHER TRACKING TECHOLOGIES',
        content:'We may use cookies and other tacking techlogies to collect and store your information'

    },
    {
        title:'HOW DO WE HANDLE SOCILA LOGINS',
        content:'if you choose to register or log in to our services using a social media accout, we may have acess to certain information about you'
        
    }
    
  
    
];
export default Accordion;