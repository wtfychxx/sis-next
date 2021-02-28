import React from 'react';
import { createPopper } from '@popperjs/core';

const BookDropdown = () => {
    const [dropdownPopoverShow, setdropdownPopoverShow] = React.useState(false)
    const btnDropdownRef = React.createRef()
    const popoverDropdownRef = React.createRef()
    const openDropdownRef = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        })
        setdropdownPopoverShow(true)
    }

    const closeDropdownPopover = () => {
        setdropdownPopoverShow(false)
    }
    return(
        <>
            <a
                href="#"
                className="text-gray-600 py-1 px-3"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault()
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownRef()
                }}
            >
                <i className="fas fa-ellipsis-v"></i>
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-2-48"
                }
            >
                <a
                    href="#"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full shitespace-no-wrap bg-transparent text-gray-800"
                    }
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fas fa-pencil-alt"></i>&nbsp;Edit
                </a>

                <a
                    href="#"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full shitespace-no-wrap bg-transparent text-gray-800"
                    }
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                </a>
            </div>
        </>
    )
}

export default BookDropdown