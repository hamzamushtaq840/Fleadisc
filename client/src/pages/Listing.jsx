import React, { useEffect, useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import { Us } from "react-flags-select";
import SingleList from '../components/listings/SingleList';
import { useQuery } from '@tanstack/react-query'
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';
import { getCountryInfoByISO } from '../utils/iso-country-currency';
import { ColorRing } from 'react-loader-spinner';
import { io } from 'socket.io-client'

const Loader =
    <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} className=''>
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#494949', '#494949', '#494949', '#494949', '#494949']}
        />
    </div>

const Listing = () => {
    const [selected, setSelected] = useState('SE');
    const [moreFilters, setMoreFilters] = useState(false)
    const [data, setData] = useState([])
    const { auth } = useAuth();
    const userCurrency = "SEK";
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    //array contains unique key that this query represents i.e cahching,refectching,etc
    const [socket, setSocket] = useState(null);
    const { isLoading: isLoadingListings, data: listingsData, refetch: listingsRefetch } = useQuery(
        ['listings', { userCurrency }],
        async () => {
            const response = await axios.get(`/disc?userCurrency=${userCurrency}`);
            setData(response.data)
            console.log(response.data);
            return response.data;
        },
        { staleTime: 1000 * 60 * 60 * 24, refetchOnWindowFocus: false }
    );

    useEffect(() => {
        const newSocket = io('http://localhost:5001');
        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, []);

    useEffect(() => {
        if (socket) {
            socket.on('bid_added', () => {
                listingsRefetch();
            });
        }
    }, [socket, listingsRefetch]);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [appliedFilters, setAppliedFilters] = useState([]);

    const applyFilters = (appliedFilters2) => {
        let tempDiscs = data;


        if (appliedFilters2.length > 0) {
            tempDiscs.forEach((disc) => {
                disc.discs.forEach((d, index) => {

                    appliedFilters2.forEach(filter => {

                        if (filter === 'shortOnTime') {
                            console.log('short on time');
                        }

                        if (d[filter]) {
                            console.log('disc should be included');
                        }
                    })
                })
            })
        }
        else {
            setData(listingsData)
        }
    }


    const handleFilterClick = filter => {
        let tempFilters = [...appliedFilters];

        if (tempFilters.includes(filter)) {
            tempFilters = tempFilters.filter(f => f !== filter);
        } else {
            tempFilters.push(filter);
        }

        setAppliedFilters(tempFilters);
        applyFilters(tempFilters)
    }


    return (
        <div className=' w-full m-auto text-[1.2rem] sm:text-[1rem] xsm:text-[1rem]'>
            <div className='listingBackgroundImage flex justify-center h-[35vw] min-h-[135px] max-h-[300px] bg-[rgba(0,0,0,0.1)] relative'>
                <h1 className='text-[35px] sm:text-[20px] xsm:text-[20px] w-[80%] md:text-[30px] text-[white] font-logo text-center relative z-10 sm:mt-[30px] my-auto xsm:mt-[30px]'>Disc-over your game with pre-loved gear</h1>
                <input style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className='border-[1px] w-[64.10vw] max-w-[500px] min-w-[250px] border-[#81B29A] absolute bottom-[-24px] bg-[white] z-10 h-[47px] rounded-lg px-[14px] font-sans' type='text' placeholder='Search...'></input>
            </div>
            <div className='mt-[45px] xsm:mt-[35px] sm:mt-[35px] xsm:mb-[5px] sm:mb-[5px] mb-[10px] px-[5px] xsm:px-0 flex gap-[10px] xsm:gap-[5px] items-center xsm:justify-start  justify-center  xsm:w-[310px] w-full m-auto '>
                <div className='pl-[4px] xsm:border-[0px] border-[1px] rounded-[2px] h-[27px] flex items-center '>
                    <ReactFlagsSelect
                        selected={selected}
                        fullWidth={true}
                        searchable={true}
                        alignOptionsToRight={true}
                        onSelect={(code) => { setSelected(code); console.log(code); }}
                        className='min-w-[125px] xsm:min-w-[0px] text-text font-sans'
                        placeholder=""
                        showSelectedLabel={screenSize.width > 576 ? true : false}
                        showOptionLabel={true}
                    />
                </div>
                <select defaultValue='range' className='outline-none w-[74px] text-[#1E1E21] text-center border-[1px] border-[#000000] text-[12px] leading-[14.63px] h-[27px] rounded-[2px] bg-[white]'>
                    <option disabled value='range'>Range</option>
                </select>
                <select defaultValue='brand' className='outline-none w-[76px]  text-[#1E1E21] text-center border-[1px] border-[#000000] text-[12px] leading-[14.63px] h-[27px] rounded-[2px] bg-[white]'>
                    <option disabled value='brand'>Brand</option>
                </select>
                <select defaultValue='condition' className='outline-none w-[92px] text-[#1E1E21] text-center border-[1px] border-[#000000] text-[12px] leading-[14.63px] h-[27px] rounded-[2px] bg-[white]'>
                    <option disabled value='condition'>Condition</option>
                </select>
            </div>
            <div className='px-[5px] xsm:px-0 flex gap-[10px] xsm:gap-[5px] items-center xsm:justify-start justify-center flex-wrap xsm:w-[320px] w-[405px]  m-auto'>
                <button className='w-[57px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>New</button>
                <button className='w-[66px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>Popular</button>
                <button className='w-[77px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33]'>Following</button>
                <button className={`w-[99px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33] ${appliedFilters.includes('shortOnTime') ? "border-[#81B29A] bg-[#81B29A33]" : ""}`} onClick={() => handleFilterClick('shortOnTime')}>Short on time</button>
                {moreFilters && <>
                    <button className={`w-[74px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33] ${appliedFilters.includes('named') ? "border-[#81B29A] bg-[#81B29A33]" : ""}`} onClick={() => handleFilterClick('named')}>Named</button>
                    <button className={`w-[79px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33] ${appliedFilters.includes('unamed') ? "border-[#81B29A] bg-[#81B29A33]" : ""}`} onClick={() => handleFilterClick('unnamed')}>Unamed</button>
                    <button className={`w-[50px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33] ${appliedFilters.includes('dyed') ? "border-[#81B29A] bg-[#81B29A33]" : ""}`} onClick={() => handleFilterClick('dyed')}>Dyed</button>
                    <button className={`w-[87px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33] ${appliedFilters.includes('collectible') ? "border-[#81B29A] bg-[#81B29A33]" : ""}`} onClick={() => handleFilterClick('collectible')}>Collectible</button>
                    <button className={`w-[59px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33] ${appliedFilters.includes('blank') ? "border-[#81B29A] bg-[#81B29A33]" : ""}`} onClick={() => handleFilterClick('blank')}>Blank</button>
                    <button className={`w-[68px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33] ${appliedFilters.includes('firstRun') ? "border-[#81B29A] bg-[#81B29A33]" : ""}`} onClick={() => handleFilterClick('firstRun')}>First Run</button>
                    <button className={`w-[51px] h-[27px] rounded-[6px] font-sans text-[12px] leading-[15px]text-[#1E1E21] font-medium hover:text-[black] border-[1px] hover:border-[#81B29A] hover:bg-[#81B29A33] ${appliedFilters.includes('glow') ? "border-[#81B29A] bg-[#81B29A33]" : ""}`} onClick={() => handleFilterClick('glow')} >Glow</button>
                </>}
            </div>
            <div className='flex justify-start xsm:w-[320px] w-[405px] m-auto'>
                <div className='flex justify-start'>
                    <p onClick={() => setMoreFilters((prev) => !prev)} className='text-[0.75em] text-[#595959] mt-[10px] cursor-pointer'>{moreFilters ? 'Close more filters' : 'Show more filters'}</p>
                </div>
            </div>
            {isLoadingListings ? (
                <div style={{ position: "relative", minHeight: "200px" }}>
                    {Loader}
                </div>
            ) : (
                <div className='flex flex-col xsm:w-full sm:w-full w-[90%] m-auto overflow-hidden mb-[50px]'>
                    {data?.length > 0 ?
                        data?.map((value, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <SingleList value={value} discs={value.discs} index={index} />
                                </React.Fragment>
                            )
                        }) : <p className='mt-[20px] text-[1em] font-[500] text-center'>No discs found</p>}
                </div>
            )}
        </div >
    )
}

export default Listing