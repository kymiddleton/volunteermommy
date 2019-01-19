import React from 'react'
import './SelectGrade.css'


class SelectGrade extends React.Component  {
    state = {
        ...this.props,
        gradeOptions: this.props.gradeOptions || [],
        // selectedItem: this.props.items[0] || this.props.selectedItem,
        selectedGrade: this.props.Grade && this.props.Grade[0],
        showGrades: false
    }

    dropDown = () => {
        this.setState(
            prevState => ({
                showGrades: !prevState.showGrades }))
    }

    selectGrade = (grade) => {
        this.setState(
            {selectedGrade: grade, showGrades: false,})
    }

    render() {
        return <div>
            <div className="select-box--box" style={{width: this.state.width || 180}}>
                <div className="select-box--container">
                    <div className="select-box--selected-item">{this.state.selectedGrade.value}</div>
                    <div className="select-box--arrow" onClick={this.dropDown}>
                    <span className={`${this.state.showGrades ? 'select-box--arrow-up' : 'select-box--arrow-down'}`} /></div>
                </div>
                <div className="select-box--items" style={{ display: this.state.showGrades ? 'block' : 'none' }}>
                    {this.state.grades.map(grade => 
                        <div key={grade.id} onClick={() => this.selectGrade(grade)}
                            className={this.state.selectedGrade === grade ? 'selected' : ''}>
                            {grade.value}
                        </div>
                    )}
                </div>
            </div>
            <input type="hidden" name={this.state.name} value={this.state.grades && this.state.selectedGrade.id } />
        </div>
    }
}

export default SelectGrade