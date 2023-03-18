import React from 'react'
import Faq from './../components/about/Faq'

const About = () => {

    const faq = [
        {
            title: 'Are offers binding',
            description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. A cupiditate debitis voluptatibus quidem blanditiis sunt suscipit explicabo nostrum in hic?'
        },
        {
            title: 'Are offers binding',
            description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. A cupiditate debitis voluptatibus quidem blanditiis sunt suscipit explicabo nostrum in hic?'
        }
    ]

    return (
        <div className='p-[20px] min-h-[90vh]'>
            <div className='flex flex-col gap-[11px]'>
                <h1 className='text-[20px] font-[700]'>About Fleadisc</h1>
                <p className='text-[12px] w-[70%]  font-[500]'>Fleadisc is an independent platform for buying and selling discs between private individuals. You can see us as a variant of a buy and sell group on Facebook</p>
            </div>

            <div className='mt-[20px]'>
                <h1 className='text-[20px] mb-[15px] font-[700]'>FAQ</h1>

                <div className='flex flex-col gap-[10px]' >
                    {faq.map((item, index) => {
                        return (
                            <Faq title={item.title} description={item.description} />
                        )
                    })}
                </div>

            </div>
            <div className='mt-[25px]'>
                <h1 className='text-[20px] mb-[15px] font-[700]'>Contact</h1>

            </div>
        </div>
    )
}

export default About