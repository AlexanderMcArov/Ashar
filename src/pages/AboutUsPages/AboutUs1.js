import React, { useEffect } from 'react'
import { Container } from 'reactstrap';
import '../Home.css'
import AboutUs1Pagination from '../../components/paginations/AboutUs1Pagination';
import AboutUsCardColumns1 from '../../components/cardColumns/AboutUsCardColumns1';
import { connect } from 'react-redux';
import { fetchData } from '../../redux/actions'

function AboutUs1(props) {
    
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
                <AboutUsCardColumns1 data = {props.data}/>
            </Container>
            <AboutUs1Pagination />
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs1);
