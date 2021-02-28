import React from 'react';

import TableBook from 'components/Table/TableBook.jsx';

import Admin from 'layouts/Admin.js';

export default function Book({props}){
    return(
        <div className="flex flex-wrap mt-4">
            <div className="w-full mb-2 px-4">
                <TableBook />
            </div>
        </div>
    )
}

Book.layout = Admin;