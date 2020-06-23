import React from 'react'
import { connect } from 'react-redux'
import { buyOlive } from './redux'

function OliveContainer(props) {
    return (
        <div>
            <h2>num of olives - {props.numOfOlives}</h2>
            <button onClick = {props.buyOlive}>buy olive</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfOlives : state.olive.numOfOlives
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyOlive : ()=>dispatch(buyOlive())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(OliveContainer)
