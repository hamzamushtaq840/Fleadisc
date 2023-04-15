import React, { useMemo, useState } from 'react'
import OlderBids from '../listings/OlderBids';
import moment from 'moment';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const FinishedListing = ({ value, userCurrency }) => {
    const [oldModal, setOldModal] = useState(false)
    const oldModalComponent = useMemo(() => <OlderBids setModel={setOldModal} discId={value._id} />, [setOldModal]);
    const auth = useAuth()
    const navigate = useNavigate()

    function getMonthAndDate(dateString) {
        const date = moment(dateString);

        const monthName = date.format("MMM");
        const dayOfMonth = date.format("D");
        return `${dayOfMonth} ${monthName}`;
    }

    function remainingTime(endDay, endTime) {
        const endDateTime = moment(`${endDay} ${endTime}`);
        const start = moment();
        const diff = start.diff(endDateTime);
        const duration = moment.duration(diff);
        const years = duration.years();
        const months = duration.months();
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        let passedTime;
        if (years > 0) {
            passedTime = `${years} ${years === 1 ? 'year' : 'years'}`;
        } else if (months > 0) {
            passedTime = `${months} ${months === 1 ? 'month' : 'months'}`;
        } else if (days > 0) {
            passedTime = `${days} ${days === 1 ? 'day' : 'days'} ${hours}h`;
        } else if (hours > 0) {
            passedTime = `${hours}h ${minutes} ${minutes === 1 ? 'min' : 'mins'}`;
        } else if (minutes > 0) {
            passedTime = `${minutes} ${minutes === 1 ? 'min' : 'mins'}`;
            if (seconds > 0) {
                passedTime += ` ${seconds} s`;
            }
        } else {
            passedTime = `${seconds} s`;
        }

        return passedTime;
    }

    return (
        <div className={`flex relative mb-[10px]  xsm:text-[1.07rem] sm:text-[1.07rem] text-[1.2rem] pb-[8px] card rounded-[8px] bg-[#ffffff] flex-wrap xsm:min-w-[165px] xsm:max-w-[165px] sm:min-w-[165px] sm:max-w-[165px] md:min-w-[200px] md:max-w-[200px] lg:min-w-[210px] lg:max-w-[210px] xl:min-w-[220px] xl:max-w-[220px] 2xl:min-w-[240px] 2xl:max-w-[240px]  h-[0%] flex-col`}>
            <img src={value.pictureURL} className=' w-full rounded-t-[8px]' alt="" />
            <div className='flex justify-between px-[0.625em] py-[0.425em]'>
                <div className='flex flex-col justify-between'>
                    <div className='flex items-start'>
                        <div className='flex flex-col mr-[0.425em]'>
                            <h1 className='text-[0.75em] font-[700]' >{value.discName}</h1>
                            <h1 className='text-[0.55em] font-[500] mt-[-0.413em] text-[##595959]' >{value.brand}</h1>
                        </div>
                        <span className='px-[0.5em] mt-[2px] text-[0.563em] border-[1px] rounded-full border-[#595959]'>{value.condition}</span>
                    </div>
                    <div className='flex mt-[5px] flex-col  text-[#595959]'>
                        <span className='font-[600] text-[0.6em]'>{getMonthAndDate(value.endDay)} - {value.endTime} </span>
                        <span className='font-[500] text-[#595959BF] text-[0.55em]'>{remainingTime(value.endDay, value.endTime)} ago</span>
                    </div>
                </div>

                <div className='flex flex-col  justify-end items-end'>
                    <div className='flex flex-col items-end'>
                        <span className='text-[0.65em] mb-[-3px] text-end flex items-end font-[600]'>{value.startingPrice} {userCurrency}</span>
                        {value.priceType === 'fixedPrice' && <span className='text-[0.6em] font-[500] text-[#595959bf]'>Fixed price</span>}
                        {(value.priceType !== 'fixedPrice') &&
                            <div className='flex items-center  text-[1em]'>
                                <p onClick={(e) => {
                                    if (value.bids.length === 0)
                                        return
                                    setOldModal(true); e.stopPropagation();
                                }} className='text-[0.6em] cursor-pointer hover:underline hover:text-text font-[500] text-[#595959BF] '>{value.bids.length} Bids</p>
                            </div>}
                    </div>
                </div>


            </div>
            {(value.bids.length === 0 && auth.userId === value.seller._id) && <div className='px-[10px]'>
                <button onClick={() => navigate('/create/relist', { state: value })} className='w-full py-[.3em] rounded-[4px] text-[#ffffff] bg-[#F21111] mb-[0.6em] text-[0.75em]'>Re-list</button>
            </div>
            }
            {oldModal && oldModalComponent}
        </div>
    )
}

export default FinishedListing