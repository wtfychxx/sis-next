import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import Link from 'next/link';

import {getBookList} from '../../api';
import BookDropdown from '../Dropdowns/BookDropdown';

const DataBook = ({ theme }) => {
    const {data} = useSWR(`/api/book`, () => { return getBookList() });

    if(data != undefined){
        return(
            <>
            {
                data.result.map((entry, i) => {
                    return(
                        <>
                            <tr key={i}>    
                                <td
                                    className={
                                        "px-6 align-middle border- border-solid py-3 text-xs border-1-0 border-r-0 whitespace-no-wrap font-semibold text-left "+
                                        (theme === "light" 
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-gray-700 text-gray-300 border-gray-600"
                                        )
                                    }
                                >
                                    {entry.number}
                                </td>

                                <td
                                    className={
                                        "px-6 align-middle border- border-solid py-3 text-xs border-1-0 border-r-0 whitespace-no-wrap font-semibold text-left "+
                                        (theme === "light" 
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-gray-700 text-gray-300 border-gray-600"
                                        )
                                    }
                                >
                                    {entry.title}
                                </td>

                                <td
                                    className={
                                        "px-6 align-middle border- border-solid py-3 text-xs border-1-0 border-r-0 whitespace-no-wrap font-semibold text-left "+
                                        (theme === "light" 
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-gray-700 text-gray-300 border-gray-600"
                                        )
                                    }
                                >
                                    {entry.genre}
                                </td>

                                <td
                                    className={
                                        "px-6 align-middle border- border-solid py-3 text-xs border-1-0 border-r-0 whitespace-no-wrap font-semibold text-left "+
                                        (theme === "light" 
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-gray-700 text-gray-300 border-gray-600"
                                        )
                                    }
                                >
                                    <BookDropdown />
                                </td>
                            </tr>
                        </>
                    )
                })
            }
            </>
        )
    }else{
        return(null)
    }
}

const TableBook = ({ color }) => {
    return(
        <>
            <div
                className={"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (color === "light" ? "bg-white" : "bg-gray-800 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-4 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg "+
                                    (color === "light" ? "text-gray-800" : "text-white")
                                }
                                
                                >
                                    Book
                            </h3>
                        </div>

                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <Link href="/admin/bookForm">
                                <button
                                    className="bg-gray-800 active:bg-gray-700 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 float-right">
                                        Add
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="block-w-full overtime-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th
                                    className={
                                        "px-6 align-middle border- border-solid py-3 text-xs uppercase border-1-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                                        (color === "light" 
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-gray-700 text-gray-300 border-gray-600"
                                        )
                                    }
                                >
                                    Number
                                </th>

                                <th
                                    className={
                                        "px-6 align-middle border- border-solid py-3 text-xs uppercase border-1-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                                        (color === "light" 
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-gray-700 text-gray-300 border-gray-600"
                                        )
                                    }
                                >
                                    Name
                                </th>

                                <th
                                    className={
                                        "px-6 align-middle border- border-solid py-3 text-xs uppercase border-1-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                                        (color === "light" 
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-gray-700 text-gray-300 border-gray-600"
                                        )
                                    }
                                >
                                    Genre
                                </th>

                                <th
                                    className={
                                        "px-6 align-middle border- border-solid py-3 text-xs uppercase border-1-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                                        (color === "light" 
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-gray-700 text-gray-300 border-gray-600"
                                        )
                                    }
                                >
                                    
                                </th>
                            </tr>
                        </thead>

                        <tbody id="show_data">
                            <DataBook theme={color} />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

TableBook.defaultProps = {
    color: "light"
}

TableBook.propTypes = {
    color: PropTypes.oneOf(["light", "dark"])
}

export default TableBook