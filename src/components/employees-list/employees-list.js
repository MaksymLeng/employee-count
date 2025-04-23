import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, commitChangeSalary}) => {

    const elements = data.map(item => {
        const {id, ...itemData} = item;
       return (
           <EmployeesListItem
               key={id}
               {...itemData}
                onDelete={() => onDelete(id)}
                onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                commitChangeSalary = {(e) => commitChangeSalary(id, e.target.value)}/>
       )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList