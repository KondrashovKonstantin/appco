import React from 'react'
import { connect } from "react-redux";
import ChartsPage from "./Charts";
import {calendarChange, getStatistic} from '../../Redux/charts-reducer'

class ChartsContainer extends React.Component{
    componentDidMount(){
        let id = this.props.match.params.userId
        this.props.getStatistic(id)
        this.setDate()
    }
    setDate = () => {
        let currentDate = new Date()
        let startDate = currentDate - 6*24*60*60*1000 // week
        this.props.calendarChange([new Date(startDate), new Date(currentDate)])
    }

    render(){
        return(
            <ChartsPage {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return{
        dateArray: state.chartsReducer.dateArray,
        usersStatistic: state.chartsReducer.usersStatistic,
        userName: state.chartsReducer.userName
    }
}

export default connect(mapStateToProps,{calendarChange, getStatistic})(ChartsContainer)