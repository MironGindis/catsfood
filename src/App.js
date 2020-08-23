import React from 'react';
import Card from './components/Card/Card';
import './App.css';
import { connect } from 'react-redux';
import {toggleActiveMode} from './Redux/main-reducer';

let App = (props) => {
  return <div className='App'> 
      <h1>Ты сегодня покормил кота?</h1>
      <div className='Cards_block'>
        {props.Cards.map( item => {
          return <Card id={item.id} taste={item.taste} description={item.description} weight={item.weight} isActive={item.isActive} isDisabled={item.isDisabled} underCardInfo={item.underCardInfo} toggleActiveMode={props.toggleActiveMode}/>
        })}
      </div>
  </div>
}



let mapStateToProps = (state) => ({
  Cards : state.appPage.Cards,
})


export default connect(mapStateToProps, {toggleActiveMode})(App);
