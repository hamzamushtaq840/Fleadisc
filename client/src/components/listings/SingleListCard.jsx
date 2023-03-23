import React, { useState } from 'react'
import disc from '../../assets/disc.svg'
import grams from '../../assets/grams.svg'
import plastic from '../../assets/plastic.svg'
import glow from '../../assets/glow.svg'
import dyed from '../../assets/dyed.svg'
import firstRun from '../../assets/firstRun.svg'
import named from '../../assets/named.svg'
import blank from '../../assets/blank.svg'
import collectible from '../../assets/collectible.svg'
import moment from 'moment';
import disc2 from '../../assets/disc2.svg'
import ConfirmBid from './ConfirmBid'
import OlderBids from './OlderBids'
import { useNavigate } from 'react-router-dom'

const SingleListCard = ({ val, index }) => {
    const [extra, setExtra] = useState(false)
    const [imageModal, setImageModal] = useState(false);
    const [modal, setModal] = useState(false)
    const [oldModal, setOldModal] = useState(false)
    const [price, setPrice] = useState(null)
    const [type, setType] = useState(null)
    const navigate = useNavigate()

    function getRemainingTime(endDay, endTime) {
        const endDateTime = moment(`${endDay} ${endTime}`);
        const now = moment();
        const diff = endDateTime.diff(now);
        const duration = moment.duration(diff);
        const years = duration.years();
        const months = duration.months();
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        let remainingTime;
        if (years > 0) {
            remainingTime = `${years} ${years === 1 ? 'year' : 'years'}`;
        } else if (months > 0) {
            remainingTime = `${months} ${months === 1 ? 'month' : 'months'}`;
        } else if (days > 0) {
            remainingTime = `${days} ${days === 1 ? 'day' : 'days'} ${hours} ${hours === 1 ? 'hour' : 'hours'}`;
        } else if (hours > 0) {
            remainingTime = `${hours} ${hours === 1 ? 'hour' : 'hours'} ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
        } else if (minutes > 0) {
            remainingTime = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
            if (seconds > 0) {
                remainingTime += ` ${seconds} ${seconds === 1 ? 'second' : 'seconds'}`;
            }
        } else {
            remainingTime = `${seconds} ${seconds === 1 ? 'second' : 'seconds'}`;
        }

        return remainingTime;
    }

    function getMonthAndDate(dateString) {
        const date = moment(dateString);
        const monthName = date.format("MMM");
        const dayOfMonth = date.format("D");
        return `${dayOfMonth} ${monthName}`;
    }

    const handleBid = (e, type) => {
        e.preventDefault()
        type === 'bid' ? setType('bid') : setType('buy')
        setModal(true)
    }

    return (
        <div className={`flex mb-[10px] pb-[5px] min-h-[217.7px]  ${!extra ? "max-h-[217.7px]" : ""}  card rounded-[8px] bg-[#ffffff] flex-wrap min-w-[150px] w-[30%] max-w-[230px] flex-col`}>
            <img src={disc} className=' w-full' alt="" onClick={() => setImageModal(true)} />
            <div onClick={() => setExtra(prev => !prev)} className='flex justify-between px-[0.625em] pt-[0.425em]'>
                <div className='flex  flex-col justify-between'>
                    <div className='flex items-start '>
                        <div className='flex flex-col  mr-[0.425em]'>
                            <h1 className='text-[0.75em] font-[700] ' >{val.discName}</h1>
                            <h1 className='text-[0.5em] font-[500] mt-[-0.413em]  text-[##595959]' >{val.brand}</h1>
                        </div>
                        <span className='px-[0.5em] mt-[2px] text-[0.563em] border-[1px] rounded-full border-[#595959]'>{val.condition}</span>
                    </div>
                    <div className='flex mt-[5px] flex-col text-[0.5em]  text-[#595959]'>
                        <span className='font-[600]'>{getMonthAndDate(val.endDay)} - {val.endTime} </span>
                        <span className='font-[500] text-[#595959BF]'>{getRemainingTime(val.endDay, val.endTime)}</span>
                    </div>
                </div>

                <div className='flex flex-col justify-between'>
                    <button className='text-[0.5em] px-[0.4375em] py-[0.125em] border-[#595959] border-[1px] rounded-[6px]'>Follow</button>

                    <div className='flex flex-col'>
                        <span className='text-[0.75em]  font-[600]'>{val.startingPrice}</span>
                        <span className='text-[0.5em] font-[500]  text-[#595959bf]'>Final price</span>
                    </div>

                </div>
            </div>
            {extra && <> <div className='mt-[5px] px-[0.625em]'>
                <div className='flex w-full mb-[5px] justify-between gap-[5px] flex-wrap'>

                    {val.plastic !== '' &&
                        <div className=' flex items-center gap-[3px] text-[1rem] '>
                            <img src={plastic} alt="" className=" w-[13px]" />
                            <p className='text-[0.6em] font-[300]'>{val.plastic}</p>
                        </div>
                    }
                    {val.grams !== '' &&
                        <div className=' flex items-center gap-[3px] text-[1rem] '>
                            <img src={grams} alt="" className=" w-[12px]" />
                            <p className='text-[0.6em] font-[300]'>{val.grams}</p>
                        </div>
                    }
                    {val.named !== false &&
                        <div className=' flex items-center  gap-[3px] text-[1rem]  '>
                            <img src={named} alt="" className=" w-[10px]" />
                            <p className='text-[0.6em] font-[300]'>Named</p>
                        </div>
                    }
                    {val.dyed !== false &&
                        <div className=' flex items-center gap-[3px] text-[1rem]  '>
                            <img src={dyed} alt="" className=" w-[11px]" />
                            <p className='text-[0.6em] font-[300]'>Dyed</p>
                        </div>
                    }
                    {val.blank !== false &&
                        <div className=' flex items-center gap-[3px] text-[1rem] '>
                            <img src={blank} alt="" className=" w-[10px]" />
                            <p className='text-[0.6em] font-[300]'>Blank</p>
                        </div>
                    }
                    {val.glow !== false &&
                        <div className=' flex items-center gap-[3px] text-[1rem] '>
                            <img src={glow} alt="" className=" w-[12px]" />
                            <p className='text-[0.6em] font-[300]'>Glow</p>
                        </div>
                    }
                    {val.firstRun !== false &&
                        <div className=' flex items-center gap-[3px] text-[1rem] '>
                            <img src={firstRun} alt="" className=" w-[10px]" />
                            <p className='text-[0.6em] font-[300]'>Run</p>
                        </div>
                    }
                    {val.collectible !== false &&
                        <div className=' flex items-center gap-[3px] text-[1rem] '>
                            <img src={collectible} alt="" className=" w-[11px]" />
                            <p className='text-[0.6em] font-[300]'>Collectible</p>
                        </div>
                    }
                </div>
                {val.priceType === 'auction' &&
                    <form onSubmit={(e) => handleBid(e, 'bid')} className='flex flex-col mb-[7px] gap-[6px]'>
                        <input value={price} onChange={(e) => setPrice(Number(e.target.value))} required type="number" className='w-full pl-[3px] py-[0.25em]  rounded-[2px] text-[.65em] border-[1px] border-[#000000]' min={val.minPrice} placeholder={`Min Price - ${val.minPrice} kr`} />
                        <button type='submit' className='py-[0.25em] w-full rounded-[2px] text-[.75em] bg-primary font-[600] text-[#ffffff] button'>Place Bid</button>
                    </form>}
                {val.priceType === 'fixedPrice' &&
                    <div className='flex mb-[5px] mt-[10px]'>
                        <button onClick={(e) => handleBid(e, 'buy')} className='py-[0.25em] w-full rounded-[2px] text-[.75em] bg-primary font-[600] text-[#ffffff] button'>Buy</button>
                    </div>}
            </div>
            </>
            }
            {imageModal && (
                <div onClick={() => setImageModal(false)} className="fixed   bg-[#000000CC] z-50 top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
                    <div className="w-[50%]  xsm:w-full sm:w-full max-h-[80%]">
                        <img src={disc2} alt="" className="w-full object-contain" />
                    </div>
                </div>
            )}
            {modal && <ConfirmBid price={price} type={type} setModel={setModal} />}
            {oldModal && <OlderBids setModel={setOldModal} />}
        </div >
    )
}

export default SingleListCard

// min-h-[217.7px]  ${!extra ? "max-h-[217.7px]" : ""}