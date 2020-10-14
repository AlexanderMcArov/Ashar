import React from 'react'
import {
    Pagination,
    PaginationItem,
    PaginationLink,
} from 'reactstrap';


function HomePagination() {
    return (
        <div>
            <Pagination aria-label="Page navigation example" className="HomeMainPagination">

                <PaginationItem active>
                    <PaginationLink href="#" className="HomePaginationLinks">
                        1
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink href="/about-us" className="HomePaginationLinks">
                        2
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink href="/about-us/1" className="HomePaginationLinks">
                        3
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink href="/about-us/2" className="HomePaginationLinks">
                        4
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink href="/about-us/3" className="HomePaginationLinks">
                        5
                    </PaginationLink>
                </PaginationItem>

            </Pagination>
        </div>
    )
}

export default HomePagination
