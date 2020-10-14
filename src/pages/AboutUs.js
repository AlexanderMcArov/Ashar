import React, { useEffect } from 'react'
import { Container } from 'reactstrap';
import './Home.css'
import AboutUsPagination from '../components/paginations/AboutUsPagination';
import AboutUsCardColumns from '../components/cardColumns/HomeCardColumns';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions'


function AboutUs(props) {

    useEffect(() => {
        props.fetchData();
    }, []);

    if(props.error){
        return(
        <h4 className="text-danger">
            {props.error.message}
        </h4>)
    }

    return (
        <div className="AboutUsMainDiv">
            <Container>
                <AboutUsCardColumns data = {props.data}/>
            </Container>
            <AboutUsPagination />
        </div>
    )
}

const mapStateToProps = (state) => {
    const { data, loading, err } = state.ProductReducer;
    return { data, loading, err };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
