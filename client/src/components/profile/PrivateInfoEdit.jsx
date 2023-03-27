import React, { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";
import add from '../../assets/addd.svg';
import cross from '../../assets/cross.svg';

const PrivateInfoEdit = () => {
    const [selected, setSelected] = useState("SE");
    const [buyerChecked, setBuyerChecked] = useState(false);
    const [meChecked, setMeChecked] = useState(false);

    function handleBuyerChange(event) {
        setBuyerChecked(event.target.checked);
        setMeChecked(false);
    }

    function handleMeChange(event) {
        setMeChecked(event.target.checked);
        setBuyerChecked(false);
    }

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col xsm:w-[93%] sm:w-[93%] xsm:text-[1rem] sm:text-[1rem] text-[1.2rem] w-[80%] xsm:gap-[0.6875em] sm:gap-[0.6875em] gap-[1em] justify-center mt-[1.1875em]'>
                <div className='flex w-full flex-col gap-[0.5em]'>
                    <label className='text-[0.75em] font-[600]' htmlFor="fullName">Full Name</label>
                    <input name='fullName'
                        type="text" className='text-[0.75em] pl-[5px] ml-[0.625em] w-[40%] placeholder:font-[700]  border-[1px] border-[#595959]  xsm:h-[23px] sm:h-[23px] h-[2.938em] rounded-[2px]' placeholder='Fred Isaksson' />
                </div>
                <div className='flex w-full flex-col gap-[0.5em]'>
                    <label className='text-[0.75em] font-[600]' htmlFor="fullName">Listing in</label>
                    <div className='pl-[5px] w-[190px]'>
                        <ReactFlagsSelect
                            selected={selected}
                            fullWidth={true}
                            searchable={true}
                            alignOptionsToRight={true}
                            onSelect={(code) => { setSelected(code); console.log(code); }}
                            className='w-[90%] mt-[-4px] text-text font-sans'
                            placeholder="Choose a country"
                        />
                    </div>
                </div>

                <div className='flex w-full flex-col gap-[0.5em]'>
                    <label className='text-[0.75em] font-[600]' htmlFor="fullName">Delivery Address (Recieving to)</label>
                    <input name='fullName' type="text" className='text-[0.75em] pl-[5px] ml-[0.625em] xsm:w-[80%] sm:w-[80%] w-full placeholder:font-[700] border-[1px] border-[#595959] xsm:h-[23px] sm:h-[23px] h-[2.938em] rounded-[2px]' placeholder='Address line 1' />
                    <input name='fullName' type="text" className='text-[0.75em] pl-[5px] ml-[0.625em] xsm:w-[80%] sm:w-[80%] w-full placeholder:font-[700] border-[1px] border-[#595959] xsm:h-[23px] sm:h-[23px] h-[2.938em] rounded-[2px]' placeholder='Address line 2' />
                    <div className='flex ml-[0.425em] xsm:w-[80%] sm:w-[80%] w-full gap-[0.9375em]'>
                        <input name='fullName' type="text" className='text-[0.75em]   w-[50%] pl-[5px] placeholder:font-[700] border-[1px] border-[#595959] xsm:h-[23px] sm:h-[23px] h-[2.938em] rounded-[2px]' placeholder='Postal Code' />
                        <input name='fullName' type="text" className='text-[0.75em]   w-[50%] pl-[5px] placeholder:font-[700] border-[1px] border-[#595959] xsm:h-[23px] sm:h-[23px] h-[2.938em] rounded-[2px]' placeholder='City' />
                    </div>
                    <div className='flex ml-[0.425em] xsm:w-[80%] sm:w-[80%] w-full gap-[0.9375em]'>
                        <input name='fullName' type="text" className='text-[0.75em]   w-[50%] pl-[5px] placeholder:font-[700] border-[1px] border-[#595959] xsm:h-[23px] sm:h-[23px] h-[2.938em] rounded-[2px]' placeholder='State / Province' />
                        <input name='fullName' type="text" className='text-[0.75em]   w-[50%] pl-[5px] placeholder:font-[700] border-[1px] border-[#595959] xsm:h-[23px] sm:h-[23px] h-[2.938em] rounded-[2px]' placeholder='Country' />
                    </div>
                </div>
                <div className='flex w-full flex-col gap-[0.5em]'>
                    <label className='text-[0.75em] font-[600] flex items-center gap-[5px]' htmlFor="fullName">Shipping Address (Sending from) <span className='text-[0.5em] text-[#595959BF] font-[500]'>Copy delivery address</span></label>
                    <input name='fullName' type="text" className='text-[0.75em] pl-[5px] ml-[0.625em] xsm:w-[80%] sm:w-[80%] w-full placeholder:font-[700]  border-[1px] border-[#595959] xsm:h-[23px] sm:h-[23px] h-[2.938em] rounded-[2px]' placeholder='Address line 1' />
                    <input name='fullName' type="text" className='text-[0.75em] pl-[5px] ml-[0.625em] xsm:w-[80%] sm:w-[80%] w-full placeholder:font-[700]  border-[1px] border-[#595959] xsm:h-[23px] sm:h-[23px] h-[2.938em] rounded-[2px]' placeholder='Address line 2' />
                    <div className='flex ml-[0.425em] xsm:w-[80%] sm:w-[80%] w-full gap-[0.9375em]'>
                        <input name='fullName' type="text" className='text-[0.75em] w-[50%] pl-[5px] placeholder:font-[700] border-[1px] border-[#595959] xsm:h-[23px] sm:h-[23px] h-[2.938em] rounded-[2px]' placeholder='Postal Code' />
                        <input name='fullName' type="text" className='text-[0.75em] w-[50%] pl-[5px] placeholder:font-[700] border-[1px] border-[#595959] xsm:h-[23px] sm:h-[23px] h-[2.938em] rounded-[2px]' placeholder='City' />
                    </div>
                    <div className='flex ml-[0.425em] xsm:w-[80%] sm:w-[80%] w-full gap-[0.9375em]'>
                        <input name='fullName' type="text" className='text-[0.75em] w-[50%] pl-[5px] placeholder:font-[700] border-[1px] border-[#595959] xsm:h-[23px] sm:h-[23px] h-[2.938em] rounded-[2px]' placeholder='State / Province' />
                        <input name='fullName' type="text" className='text-[0.75em] w-[50%] pl-[5px] placeholder:font-[700] border-[1px] border-[#595959] xsm:h-[23px] sm:h-[23px] h-[2.938em] rounded-[2px]' placeholder='Country' />
                    </div>
                </div>

                <div className='flex flex-col mt-[15px]'>
                    <h1 className='text-[0.75em] font-[600]' >Who pays shipping? </h1>
                    <div className='flex gap-[0.625em]'>
                        <div className='mt-[15px] flex items-center gap-[6px]'>
                            <input
                                id="buyer"
                                name='check'
                                type="checkbox"
                                checked={buyerChecked}
                                onChange={handleBuyerChange}
                                className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black"
                            />
                            <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[12px] font-[700]'>Buyer</p>
                        </div>
                        <div className='mt-[15px] flex items-center gap-[6px]'>
                            <input
                                id="me"
                                name='check'
                                type="checkbox"
                                onChange={handleMeChange}
                                checked={meChecked}
                                className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black"
                            />
                            <span className='peer-checked/published:text-[#000000] inline-flex text-[#AAAAAA] text-[12px] font-[700]'>Me</span>
                        </div>
                    </div>
                </div>

                <div className='flex w-full flex-col gap-[0.5em] mt-[15px]'>
                    <label className='text-[0.75em] font-[600]' htmlFor="fullName">Payment methods</label>

                    <div className='flex flex-col gap-[0.75em]'>
                        <input name='fullName' type="text" className='text-[0.75em] pl-[5px] ml-[0.625em] w-[50%] placeholder:font-[700]  border-[1px] border-[#595959]  xsm:h-[27px] sm:h-[27px] h-[2.938em] rounded-[2px]' placeholder='Swish' />
                        <input name='fullName' type="text" className='text-[0.75em] pl-[5px] ml-[0.625em] w-[70%] placeholder:font-[700]  border-[1px] border-[#595959]  xsm:h-[27px] sm:h-[27px] h-[2.938em] rounded-[2px]' placeholder='Account No' />
                    </div>

                    <div className=' flex gap-[0.625em] justify-center' >
                        <button className='h-[1.875em] w-[1.875em] bg-primary flex justify-center items-center'><img src={add} alt="" /></button>
                        <button className='h-[1.875em] w-[1.875em] bg-[#F21111] flex justify-center items-center'><img src={cross} alt="" /></button>
                    </div>
                </div>
                <div className='flex w-full flex-col gap-[0.5em] mt-[15px]'>
                    <div className='flex flex-col gap-[0.75em]'>
                        <input name='fullName' type="text" className='text-[0.75em] pl-[5px] ml-[0.625em] w-[50%] placeholder:font-[700]  border-[1px] border-[#595959]  xsm:h-[27px] sm:h-[27px] h-[2.938em] rounded-[2px]' placeholder='Name of method' />
                        <textarea name='fullName' defaultValue="Payment information like phone number, bank details or other transaction instructions " type="text" className='text-[0.75em] pl-[5px] ml-[0.625em] min-h-[5em] w-[80%] placeholder:font-[700] border-[1px] resize-none border-[#595959] rounded-[2px]' />
                    </div>

                    <div className=' flex gap-[0.625em] justify-center' >
                        <button className='h-[1.875em] w-[1.875em] bg-primary flex justify-center items-center'><img src={add} alt="" /></button>
                        <button className='h-[1.875em] w-[1.875em] bg-[#F21111] flex justify-center items-center'><img src={cross} alt="" /></button>
                    </div>
                </div>
                <div className='flex justify-center my-[0.625em] gap-[0.625em]'>
                    <button onClick={() => navigate('/profile/private/information/edit')} className='text-[#ffffff] mt-[0.45em] mb-[0.625em] button rounded-[2px] text-[.75em] font-[600] py-[0.625em] px-[2.1875em] bg-primary'>Save</button>
                    <button onClick={() => navigate('/profile/private/information/edit')} className='text-[#ffffff] mt-[0.45em] mb-[0.625em] button rounded-[2px] text-[.75em] font-[600] py-[0.625em] px-[2.1875em] bg-[#F21111]'>Discard</button>

                </div>

            </div>
        </div>
    )
}

export default PrivateInfoEdit