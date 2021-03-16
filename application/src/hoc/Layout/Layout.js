import React, { Component } from 'react'
import WordSearch from '../../components/Algorithms/WordSearchVisualiser/WordSearch'
import Auxillary from '../Auxiliary/Auxillary'
import Practice from '../../components/Practice/Practice'
// import classes from './Layout.module.css'

class Layout extends Component {
  state = {
    //To handle Practice section
    showPractice: false
  }

  showPracticeToggleHandler = () => {
    console.log('clicked')
    this.setState((prevState) => {
      return {
        showPractice: !prevState.showPractice
      }
    })
    console.log(this.state)
  }
  render() {
    return (
      <Auxillary>
        <WordSearch clicked={this.showPracticeToggleHandler} />
        <Practice show={this.state.showPractice} />
      </Auxillary>
    )
  }
}
export default Layout