import React,{useState} from 'react'
import {Image, Title1, Title2} from '../atoms/Atoms'
import {WpFaq, WpFaqs, WpQuestion} from '../molecules/Molecules'
import Arrow from '../images/icon-arrow-down.svg'
const Card = () => {
    const [activeQuestion, setActiveQuestion] = useState(false)
    const activeFaq=()=>{
        setActiveQuestion(!activeQuestion);
        const arrow=document.getElementById('arrow');
        activeQuestion
        ?(arrow.style.transform='rotate(180deg)')
        :(arrow.style.transform='rotate(360deg)')
    }
    return (
        <WpFaqs>
            <Title1>FAQ</Title1>
            <WpFaq>
                <WpQuestion>
                    <Title2>
                        What is the maximun file upload size?
                    </Title2>
                    <Image src={Arrow} id='arrow' onClick={()=>activeFaq()}/>
                </WpQuestion>
            </WpFaq>
        </WpFaqs>
    )
}

export default Card
