import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {

    let {id} = useParams();
    return (
        <div>
            <h2>this a category: {id}</h2>
        </div>
    );
};

export default Category;