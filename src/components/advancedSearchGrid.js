
import React, { Component } from 'react';
import AdvancedSearchRow from './advancedSearchRow'
import AdvancedSearchRowComplex from './advancedSearchRowComplex'
import SubmitAdvancedSearch from './submitAdvancedSearch'


class AdvancedSearchGrid extends Component {
  constructor(props){
    super(props);

    this.state = {
      complexRowCounter: 0
    }

    this.handleAddRowClick = this.handleAddRowClick.bind(this);
    this.handleMinusRowClick = this.handleMinusRowClick.bind(this);
    this.handleAdvanceSearchSubmit = this.handleAdvanceSearchSubmit.bind(this);
    this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);

  }

  handleAddRowClick() {
    this.setState({
      complexRowCounter: this.state.complexRowCounter + 1
    })
  }

  handleMinusRowClick() {
    this.setState({
      complexRowCounter: this.state.complexRowCounter - 1
    })
  }

  handleAdvanceSearchSubmit(e){
    this.props.onSubmit(e);
  }

  handleAdvancedSearchChange(searchParams){
    this.props.onAdvancedSearchChange(searchParams);
  }


  render() {
    let complexRows = [];

    for (var i = 0; i < this.state.complexRowCounter; i++){
      complexRows.push(
        <AdvancedSearchRowComplex
          onAddRowClick={this.handleAddRowClick}
          onMinusRowClick={this.handleMinusRowClick}
          onAdvancedSearchChange={this.handleAdvancedSearchChange}
        />)
    }

    return (
      <div>
        <form id="advanced-search" onSubmit={this.handleAdvanceSearchSubmit}>
          <AdvancedSearchRow
            complexRowCounter={this.state.complexRowCounter}
            onAddRowClick={this.handleAddRowClick}
            onAdvancedSearchChange={this.handleAdvancedSearchChange}

          />
          {complexRows}
          <SubmitAdvancedSearch />
        </form>

      </div>

    )
  }
}


export default AdvancedSearchGrid
