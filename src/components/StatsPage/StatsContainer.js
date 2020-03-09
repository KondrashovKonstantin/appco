import React from 'react'
import { connect } from "react-redux";
import StatsPage from './StatsPage';
import {getUsers, changeCurrentPage} from '../../Redux/charts-reducer'
import { withRouter } from 'react-router-dom';

class StatsContainer extends React.Component{
    componentDidMount(){
        this.getPage(this.props.currentPage)
    }
    getPage = (page) => {
        this.props.getUsers(page, this.props.usersPerPage)
    }

    render(){
        return(
            <StatsPage {...this.props} getPage={this.getPage} />
        )
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.chartsReducer.users,
        totalPages: state.chartsReducer.totalPages,
        currentPage: state.chartsReducer.currentPage,
        usersPerPage: state.chartsReducer.usersPerPage,
        isFetching: state.chartsReducer.isFetching
    }
}

export default connect(mapStateToProps,{getUsers, changeCurrentPage})(withRouter(StatsContainer))