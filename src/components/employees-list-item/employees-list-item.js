import './employees-list-item.css'
import {Component} from "react";

class EmployeesListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const {name, salary, onDelete, onToggleProp, increase, raising, commitChangeSalary} = this.props;
        let classNames = "list-group-item d-flex justify-content-between";
        classNames = increase ? classNames + " increase" : classNames;
        classNames = raising ? classNames + " like" : classNames;
        return (
            <li className={classNames}>
                <span
                    tabIndex="0"
                    className="list-group-item-label custom-focus"
                    onClick={onToggleProp}
                    data-toggle="raising"
                    role="button">{name}</span>
                <input
                    type="text"
                    className="list-group-item-input"
                    value={salary + '$'}
                    onChange={commitChangeSalary}/>
                <div className=" d-flex justify-content-center align-items-center">
                    <button type="button"
                            className="btn-cookie btn-sm"
                            onClick={onToggleProp}
                            data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className = "fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;