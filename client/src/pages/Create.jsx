import React, { useState } from 'react'
import upload from '../assets/upload.svg'
import info from '../assets/info.svg'
import arrowdown from '../assets/arrowdown.svg'
import plastic from '../assets/plastic.svg'
import grams from '../assets/grams.svg'
import { getCountryInfoByISO } from '../utils/iso-country-currency'
import NumofListing from '../components/create/NumofListing'

//will be in global auth of user 
const userCountry = 'PK'
const countryInfo = getCountryInfoByISO(userCountry);

const Create = () => {
    const [selectedRange, setSelectedRange] = useState(null);
    const [optional, setOptional] = useState(false);
    const [model, setModel] = useState(false)


    const ranges = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const handleClick = (range) => {
        setSelectedRange(range);
        console.log(range);
    };

    const handlePublish = () => {
        setModel(true)
    }

    return (
        <div>

            <div className='relative left-1/2  sm:text-[16px] xsm:text-[16px] text-[20px] -translate-x-1/2 mr-[50px] min-h-[90vh] max-w-[1350px]  mt-[0.5em] '>
                <div className='flex justify-between w-full items-center mb-[15px]'>
                    <h1 className='font-[700] text-[1.25em] '>Create a listing</h1>
                    <button type="submit" className='w-[2.5em] h-[2.3125em]  text-[0.875em] font-[600] bg-primary text-[#ffff] shadow-2xl rounded-[2px]' style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 6px 4px -1px rgba(0, 0, 0, 0.06)" }}>+</button>
                </div>
                <div className='bg-[#FFFFFF] rounded-[8px] pb-[40px] px-[20px] xsm:px-[0] sm:px-[0] border-[#0000001f] border-[0.5px]'>
                    <div className='flex justify-center items-center h-[219px]'>
                        <img src={upload} alt="upload a picture" />
                    </div>
                    <div className=' border-[0.5px] border-[#0000002e] mb-[14px]'></div>
                    <div><label htmlFor="Qty" className='text-[0.75em] ml-[1em] text-[#595959] font-[700]'>Qty :<input type="number" min='1' defaultValue={1} className='ml-[8px] pl-[2px] border-[1px] h-[20px] rounded-[2px] w-[45px]' name="" id="" /></label> </div>
                    <div className='flex justify-end mb-[3px] '>
                        <div className='w-[50%] flex pl-[10px] items-center '>
                            <h1 className=' font-sans text-[12px] font-[700] mr-[10px]'>Condition*</h1>
                            <img src={info} className='' alt="information" />
                        </div>
                    </div>

                    <div className='px-[0.8em] flex'>
                        <div className='w-[50%] flex flex-col gap-[9px] mr-[10px]'>
                            <input type="text" className='text-[0.75em] placeholder:font-[700] pl-[7px] border-[1px] border-[#595959]  xsm:h-[23px] sm:h-[23px] h-[1.938em] rounded-[2px] ' placeholder='Disc Name *' />
                            <select className="w-full  text-[0.75em]  pl-[2px] border-[1px] border-[#595959]   rounded-[2px]  xsm:h-[23px] sm:h-[23px] h-[1.938em]  ">
                                <option disabled value="" selected hidden>Brand *</option>
                                <option>Zara</option>
                                <option>Gucci</option>
                                <option>Leopard</option>
                            </select>
                            <input
                                list="rangeOptions"
                                className="w-full text-[0.75em] bg-white border-[1px] border-[#595959] pl-[6px] rounded-[2px]  xsm:h-[23px] sm:h-[23px] h-[1.938em]"
                                placeholder="Range *"
                            />
                            <datalist id="rangeOptions">
                                <option value="Zara" />
                                <option value="Gucci" />
                                <option value="Leopard" />
                                <option value="" disabled>
                                    Type something else
                                </option>
                            </datalist>
                        </div>
                        <div className="w-[50%] grid grid-cols-4 gap-x-2 gap-y-[6px]">
                            {ranges.map((range) => (
                                <div
                                    key={range}
                                    className={`flex justify-center items-center rounded-full px-[8px] py-[3px] ${selectedRange === range ? 'bg-[#81b29a2f]' : ''} border border-[#595959] cursor-pointer`}
                                    onClick={() => handleClick(range)}
                                >
                                    <span className="text-[12px]">{range}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <span onClick={() => setOptional((prev) => !prev)} className='inline-flex text-[0.75em] mt-[18px] ml-[1em] text-[#595959] font-[700]'>Optional details <img className={`ml-[7px] transform ${optional ? 'rotate-180' : ''}`} src={arrowdown} /></span>
                    {optional &&
                        <div className='px-[0.8em] mt-[9px] flex flex-wrap  mb-[20px]'>

                            <div className='flex w-full'>
                                <div className='flex w-[50%] items-center gap-[6px]'>
                                    <img src={plastic} className="h-[20px]" alt="plastic" />
                                    <input type="text" className='border rounded-[2px] w-full  mr-[20px]   xsm:h-[1.25em] m:h-[1.25em] h-[1.75em]  text-[.75em] placeholder:font-[700] pl-[8px]' placeholder='Plastic...' />
                                </div>
                                <div className='flex w-[50%] items-center gap-[6px]'>
                                    <img src={grams} className="h-[20px]" alt="plastic" />
                                    <input type="number" className='border rounded-[2px] w-[50%] xsm:h-[1.25em] m:h-[1.25em] h-[1.75em]  text-[.75em] placeholder:font-[700] pl-[8px]' placeholder='Grams' />
                                </div>
                            </div>

                            <div className='w-[50%]  mt-[15px] flex items-center gap-[6px]'>
                                <input id="published" type="checkbox" className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black" />
                                <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[12px] font-[700] '>Named</p>
                            </div>
                            <div className='w-[50%]  mt-[15px] flex items-center gap-[6px]'>
                                <input id="published" type="checkbox" className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black" />
                                <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[12px] font-[700] '>Dyed</p>
                            </div>
                            <div className='w-[50%]  mt-[15px] flex items-center gap-[6px]'>
                                <input id="published" type="checkbox" className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black" />
                                <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[12px] font-[700] '>Blank</p>
                            </div>
                            <div className='w-[50%]  mt-[15px] flex items-center gap-[6px]'>
                                <input id="published" type="checkbox" className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black" />
                                <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[12px] font-[700] '>Glow</p>
                            </div>
                            <div className='w-[50%]  mt-[15px] flex items-center gap-[6px]'>
                                <input id="published" type="checkbox" className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black" />
                                <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[12px] font-[700] '>Collectible</p>
                            </div>
                            <div className='w-[50%]  mt-[15px] flex items-center gap-[6px]'>
                                <input id="published" type="checkbox" className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black" />
                                <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[12px] font-[700] '>First Run</p>
                            </div>

                        </div>}
                    <div className='flex flex-wrap px-[0.8em]'>
                        <div className='w-[50%]  mt-[15px] flex items-center gap-[6px]'>
                            <input id="published" type="checkbox" className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black" />
                            <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[12px] font-[700] '>Auction</p>
                        </div>
                        <div className='w-[50%]  mt-[15px] flex items-center gap-[6px]'>
                            <input id="published" type="checkbox" className="peer/published w-[18px] h-[18px] border border-gray-400 rounded-md bg-white checked:border-transparent checked:background-[#fffff] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black" />
                            <p className='peer-checked/published:text-[#000000] text-[#AAAAAA] text-[12px] font-[700] '>Fixed Price</p>
                        </div>
                    </div>
                    <div className='flex  items-start gap-[0px] px-[0.8em]'>
                        <div className='w-[50%] pr-[10px] mt-[15px] flex items-center '>
                            <input type="number" min={0} className='w-full text-[0.75em] h-[1.938em] placeholder:font-[700] pl-[7px] border-[1px] font-sans border-[#595959]  rounded-[2px] ' placeholder={`Starting Price (${countryInfo.currency})`} />
                        </div>
                        <div className='w-[50%]  justify-start mt-[15px] flex flex-col items-start '>
                            <input type="number" min={0} className='w-full text-[0.75em] placeholder:font-[700] pl-[7px] border-[1px] font-sans border-[#595959] h-[1.938em] rounded-[2px] ' placeholder={`Min Price (${countryInfo.currency})`} />
                            <p className='font-[400] text-[.6em] mt-[.2em] text-[#AAAAAA] text-left'>5 {countryInfo.currency} min price</p>
                        </div>
                    </div>
                    <div className='flex mx-[0.8em] mt-[10px] gap-[10px] w-full '>
                        <div className='flex items-center   font-[500] '>
                            <span className='mr-[5px] text-[.75em]'>End time :</span>
                            <input className='  text-[#595959bf]  xsm:h-[1.25em] sm:h-[1.25em] h-[1.75em]  text-[.75em] rounded-[2px] border-[1px] border-[#000000]' id="data" type="date" name="" placeholder='sss' />
                        </div>
                        <label htmlFor="time" className='text-[.75em] xsm:h-[1.25em] sm:h-[1.25em] h-[1.75em]  font-[500]'>at<input className='min-w-[80px] xsm:h-[1.25em] sm:h-[1.25em] h-[1.75em]  ml-2  text-[#595959bf]  rounded-[2px] border-[1px] border-[#000000]' type="time" name="" id="time" /></label>
                    </div>
                </div>

                <div className='flex justify-center mb-[20px]'><button onClick={handlePublish} className='w-[7.5em] h-[2.3125em] mt-[18px] text-[0.875rem] font-[600] bg-primary text-[#ffff] shadow-2xl rounded-[2px]' style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 6px 4px -1px rgba(0, 0, 0, 0.06)" }}>Publish</button></div>

            </div>
            {model && <NumofListing setModel={setModel} />}
        </div>
    )
}

export default Create