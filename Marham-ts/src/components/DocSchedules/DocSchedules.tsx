import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DocSchedules = () => {
    return (
        <div className="LogIn">
            <div className="flex h-screen w-full">
                <div className="flex w-1/2 items-center justify-center bg-gray-300">
                    <div className="flex h-5/6 w-4/5 flex-col rounded-2xl border-2 border-blue-600 bg-white">
                        <label className="ml-auto mr-5 mt-3 bg-yellow-400 text-lg font-semibold text-blue-700 max-lg:text-base max-md1:text-sm ">
                            Pending Verification
                        </label>
                        <div className="mx-auto mt-5 flex h-24 w-24 rounded-full bg-black max-xl:h-20 max-xl:w-20">
                            <img
                                src="data:image/jpeg;base64,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"
                                className="h-full w-full rounded-full"
                            />
                        </div>
                        <div className="flex w-full flex-col">
                            <label className="mx-auto mt-2 text-sm font-bold text-blue-700">
                                Doctor Name
                            </label>
                            <label className="mx-auto mt-2 w-56 border-[2px] border-red-500 text-center text-sm text-red-500">
                                Stop Accepting Appointments
                            </label>
                            <label className="mx-auto mt-2 w-48 border-[2px] border-green-400 text-center text-sm text-green-400">
                                Share My Booking Page
                            </label>
                        </div>

                        <div className="flex w-full flex-col">
                            <label className="mt-5 h-8 cursor-pointer border-t-[1px] border-blue-600 pl-9 pt-1 text-sm text-blue-700 hover:text-green-500">
                                <span className="w-full">
                                    <FontAwesomeIcon icon={faSquareCaretDown} />
                                </span>{' '}
                                DashBoard
                            </label>
                            <label className="mt-2 h-8 cursor-pointer border-t-[1px] border-blue-600 pl-9 pt-1 text-sm text-blue-700 hover:text-green-500">
                                <span className="w-full">
                                    <FontAwesomeIcon icon={faSquareCaretDown} />
                                </span>{' '}
                                My Profile
                            </label>
                            <label className="mt-2 h-8 cursor-pointer border-t-[1px] border-blue-600 pl-9 pt-1 text-sm text-blue-700 hover:text-green-500">
                                <span className="w-full">
                                    <FontAwesomeIcon icon={faSquareCaretDown} />
                                </span>{' '}
                                Appointments
                            </label>
                            <label className="mt-2 h-8 cursor-pointer border-t-[1px] border-blue-600 pl-9 pt-1 text-sm text-blue-700 hover:text-green-500">
                                <span className="w-full">
                                    <FontAwesomeIcon icon={faSquareCaretDown} />
                                </span>{' '}
                                My Patients
                            </label>
                            <label className="mt-2 h-8 cursor-pointer border-t-[1px] border-blue-600 pl-9 pt-1 text-sm text-blue-700 hover:text-green-500">
                                <span className="w-full">
                                    <FontAwesomeIcon icon={faSquareCaretDown} />
                                </span>{' '}
                                Schedule Slots
                            </label>
                            <label className="mt-2 h-8 cursor-pointer border-b-[1px] border-t-[1px] border-blue-600 pl-9 pt-1 text-sm text-blue-700 hover:text-green-500">
                                <span className="w-full">
                                    <FontAwesomeIcon icon={faSquareCaretDown} />
                                </span>{' '}
                                Payments & Payouts
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex w-3/4 items-center justify-start bg-gray-300">
                    <div className="flex h-5/6 w-11/12 flex-col rounded-2xl border-2 border-blue-600 bg-white">
                        <div className="mt-4 flex max-xl:mt-2">
                            <label className="mb-5 ml-4 mt-5 text-3xl font-bold text-blue-700 max-sixthsmall:text-xl ">
                                Schedule Slots
                            </label>
                        </div>
                        <div className="mt-3 flex w-full flex-row max-xl:mt-1">
                            <label className="mx-auto flex h-8 w-24 items-center justify-center rounded-xl border-2 border-blue-800 text-sm font-semibold text-blue-800 hover:bg-blue-900 hover:text-white max-xl:w-20 max-lg:w-16 max-lg:text-xs max-md3:w-14 max-md3:text-xxs">
                                Monday
                            </label>
                            <label className="mx-auto flex h-8 w-24 items-center justify-center rounded-xl border-2 border-blue-800 text-sm font-semibold text-blue-800 hover:bg-blue-900 hover:text-white max-xl:w-20 max-lg:w-16 max-lg:text-xs max-md3:w-14 max-md3:text-xxs">
                                Tuesday
                            </label>
                            <label className="mx-auto flex h-8 w-24 items-center justify-center rounded-xl border-2 border-blue-800 text-sm font-semibold text-blue-800 hover:bg-blue-900 hover:text-white max-xl:w-20 max-lg:w-[68px] max-lg:text-xs max-md3:w-[60px] max-md3:text-xxs">
                                Wednesday
                            </label>
                            <label className="mx-auto flex h-8 w-24 items-center justify-center rounded-xl border-2 border-blue-800 text-sm font-semibold text-blue-800 hover:bg-blue-900 hover:text-white max-xl:w-20 max-lg:w-16 max-lg:text-xs max-md3:w-14 max-md3:text-xxs">
                                Thursday
                            </label>
                            <label className="mx-auto flex h-8 w-24 items-center justify-center rounded-xl border-2 border-blue-800 text-sm font-semibold text-blue-800 hover:bg-blue-900 hover:text-white max-xl:w-20 max-lg:w-16 max-lg:text-xs max-md3:w-14 max-md3:text-xxs">
                                Friday
                            </label>
                            <label className="mx-auto flex h-8 w-24 items-center justify-center rounded-xl border-2 border-blue-800 text-sm font-semibold text-blue-800 hover:bg-blue-900 hover:text-white max-xl:w-20 max-lg:w-16 max-lg:text-xs max-md3:w-14 max-md3:text-xxs">
                                Saturday
                            </label>
                            <label className="mx-auto flex h-8 w-24 items-center justify-center rounded-xl border-2 border-blue-800 text-sm font-semibold text-blue-800 hover:bg-blue-900 hover:text-white max-xl:w-20 max-lg:w-16 max-lg:text-xs max-md3:w-14 max-md3:text-xxs">
                                Sunday
                            </label>
                        </div>
                        <div className="mt-5 flex w-full justify-between max-xl:mt-3">
                            <label className="ml-4 text-lg font-bold text-blue-700 max-sixthsmall:text-xl ">
                                Time Slots
                            </label>
                            <label className="mr-4 mt-1 cursor-pointer text-base text-blue-700 max-sixthsmall:text-xl">
                                <FontAwesomeIcon
                                    icon={faCirclePlus}
                                    style={{ color: '#050985' }}
                                />{' '}
                                Add Slots
                            </label>
                        </div>
                        <div className="mt-2 flex w-full justify-center max-xl:mt-1">
                            <label className="text-base text-blue-700 max-sixthsmall:text-xl ">
                                No Slots Added Yet
                            </label>
                        </div>
                        <div className="mx-auto mt-2 flex h-[270px] w-3/5 flex-col rounded-2xl border-2 border-blue-800">
                            <div className="relative mt-5 max-xl:mt-3">
                                <label className=" max-sm1:ml-[-180px] ml-[60px] bg-white text-sm font-semibold text-blue-400 max-xl:ml-[20px] max-lg:ml-[20px] max-md1:ml-[20px] max-md2:ml-[20px]  max-md:ml-[20px] max-sm:ml-[20px] max-xs:ml-[20px] max-extrasmall:ml-[20px]">
                                    OPD Start Time
                                </label>
                                <input
                                    type="text"
                                    className="max-sm1:placeholder:pl-5 ml-auto mr-auto mt-2 block h-8 w-5/6 rounded-md border border-gray-300 bg-white px-8 py-3.5 pt-3.5 text-sm placeholder-blue-400 focus:border-black focus:outline-none max-md3:px-2 max-extrasmall:placeholder:pl-4"
                                    placeholder="9:00 AM"
                                />
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: '#06327f' }}
                                    className="absolute -mt-6 ml-[360px] cursor-pointer max-xl:ml-[285px] max-lg:ml-[260px] max-md3:ml-[230px] max-md1:ml-[200px]"
                                />
                            </div>
                            <div className="relative mt-4">
                                <label className=" max-sm1:ml-[-180px] ml-[60px] bg-white text-sm font-semibold text-blue-400 max-xl:ml-[20px] max-lg:ml-[20px] max-md1:ml-[20px] max-md2:ml-[20px]  max-md:ml-[20px] max-sm:ml-[20px] max-xs:ml-[20px] max-extrasmall:ml-[20px]">
                                    OPD End Time
                                </label>
                                <input
                                    type="text"
                                    className="max-sm1:placeholder:pl-5 ml-auto mr-auto mt-2 block h-8 w-5/6 rounded-md border border-gray-300 bg-white px-8 py-3.5 pt-3.5 text-sm placeholder-blue-400 focus:border-black focus:outline-none max-md3:px-2 max-extrasmall:placeholder:pl-4"
                                    placeholder="12:00 AM"
                                />
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: '#06327f' }}
                                    className="absolute -mt-6 ml-[360px] cursor-pointer max-xl:ml-[285px] max-lg:ml-[260px] max-md3:ml-[230px] max-md1:ml-[200px]"
                                />
                            </div>
                            <div className="relative mt-4">
                                <label className="max-sm1:ml-[-180px] ml-[60px] bg-white text-sm font-semibold text-blue-400 max-xl:ml-[20px] max-lg:ml-[20px] max-md1:ml-[20px] max-md2:ml-[20px]  max-md:ml-[20px] max-sm:ml-[20px] max-xs:ml-[20px] max-extrasmall:ml-[20px]">
                                    Slot Duration
                                </label>
                                <input
                                    type="text"
                                    className="max-sm1:placeholder:pl-5 ml-auto mr-auto mt-2 block h-8 w-5/6 rounded-md border border-gray-300 bg-white px-8 py-3.5 pt-3.5 text-sm placeholder-blue-400 focus:border-black focus:outline-none max-md3:px-2 max-extrasmall:placeholder:pl-4"
                                    placeholder="15 mins"
                                />
                                <FontAwesomeIcon
                                    icon={faSquareCaretDown}
                                    style={{ color: '#06327f' }}
                                    className="absolute -mt-6 ml-[360px] cursor-pointer max-xl:ml-[285px] max-lg:ml-[260px] max-md3:ml-[230px] max-md1:ml-[200px]"
                                />
                            </div>
                        </div>
                        <button
                            type="button"
                            className="mx-auto mb-1 mt-5 w-44 rounded-full bg-gradient-to-b from-green-600 from-20% to-blue-600 px-2 py-1 font-semibold text-gray-100 max-xl:mt-2"
                        >
                            Auto-Generate Slots
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocSchedules
