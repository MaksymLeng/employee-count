import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import '../locales/i18n';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        const savedItems = localStorage.getItem('data');
        this.state = {
            data: savedItems ? JSON.parse(savedItems) : [],
            term: '',
            filterId: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.state.data) {
            localStorage.setItem('data', JSON.stringify(this.state.data));
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id) // второй способ имутабельности
            }
        })
    }

    addItem = (e, name, salary) => {
        e.preventDefault();
        if (name.length >= 3 && salary) {
            this.setState(({data}) => {
                return {
                    data: [...data, {name, salary, increase: false, raising: false, id: data.length + 1}]
                }
            })
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    commitChangesSalary = (id, salaryNum) => {
        const salary = Number(salaryNum.replace('$', ''));
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    raisedFilter = (items,filterId) => {
      switch (filterId) {
          case 'btn2':
              return items.filter(item => item.raising);
          case 'btn3':
              return items.filter(item => item.salary > 1000);
          default:
              return items;
      }
    }

    onFilterChange = (filterId) => {
        this.setState({filterId});
    }

    render() {
        const {data,term, filterId} = this.state;
        const increased = data.filter(item => item.increase).length;
        const visibleData = this.raisedFilter(this.searchEmp(data, term), filterId);
        return (
            <div className="app">
                <AppInfo
                    numEmployees = {data.length}
                    numIncrease = {increased}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filterId} onFilterChange={this.onFilterChange}/>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp = {this.onToggleProp}
                    commitChangeSalary={this.commitChangesSalary}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;