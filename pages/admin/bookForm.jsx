import React from 'react';
import Admin from 'layouts/Admin.js';
import CardBookForm from 'components/Cards/CardBookForm';

export default function bookForm(){
    return(
        <div className="flex flex-wrap mt-4">
            <div className="w-full mb-2 px-4">
                <CardBookForm />
            </div>
        </div>
    )
}

bookForm.layout = Admin;