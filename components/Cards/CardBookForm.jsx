import React from 'react';
import useSWR from 'swr';
import { generate } from '../../api';


const bookNumberGenerate = () => {
    const {data} = useSWR(`/api/generate`, () => { return generate('book_number', 'ci_sis_library_master_book') });

    return data.number;
}

const CardBookForm = () => {
    return(
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <div className="text-gray-800 text-xl font-bold"> Book Form </div>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                        <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                            Book Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-9/12 px-4">
                                <label
                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                >
                                    Number
                                </label>
                                <input
                                    type="text"
                                    name="txtinput[70]"
                                    id="txt70"
                                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                    readOnly
                                    value={bookNumberGenerate()}
                                />
                            </div>

                            <div className="w-full lg:w-3/12 px-4 mt-8">
                                <a href="javascript:void(0)" className="px-3 py-3 text-blue-500 hover:text-blue-700 text-md"> Change </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CardBookForm;