
import './employees-add-form.css'
import {Component} from "react";
import {withTranslation} from "react-i18next";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClearValue = (e) => {
        this.props.onAdd(e, this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;
        const {t} = this.props;
        return (
            <div className="app-add-form">
                <h3>{t('addTitle')}</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder={t('namePlaceholder')}
                           name="name"
                           value={name}
                           onChange={this.onValueChange}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder={t('salaryPlaceholder')}
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}/>
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={(e) =>  this.onClearValue(e)}>{t('addButton')}
                    </button>
                </form>
            </div>
        )
    }
}

export default withTranslation() (EmployeesAddForm)