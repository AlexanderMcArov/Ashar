import React from 'react'
import {
    Pagination,
    PaginationItem,
    PaginationLink,
} from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';


function AboutUsPagination() {
    const location = useLocation();
    const search = new URLSearchParams(location.search);
    const createPaginations = ()=>{
        const total = parseInt(localStorage.getItem("totalCount"));
        let arr = [];
        for(let i = 1; i <= Math.round(total/6); i++){
            arr.push(
                <PaginationItem key={i + "-pagination-item"} active={search.get("page") === i.toString()}>
                    <Link to={`/?page=${i}`}>
                        <PaginationLink className="HomePaginationLinks">
                            {i}
                        </PaginationLink>
                    </Link>
                </PaginationItem>
            )
        }
        return arr;
    }
    return (
        <div>
            <Pagination aria-label="Page navigation example" className="HomeMainPagination">

                {createPaginations(10)}

            </Pagination>
        </div>
    )
}

export default AboutUsPagination
