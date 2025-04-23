
import {Component} from "react";
import { withTranslation} from "react-i18next";

import i18n from "../locales/i18n";

import './app-filter.css'

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn1: true,
            btn2: false,
            btn3: false,
        }
    }

    toggleBtn = (e) => {
        const newState = Object.fromEntries(
            Object.entries(this.state).map(([key]) => {
                if (key === e.currentTarget.getAttribute('data-toggle')) {
                    return [key, true];
                }
                return [key, false];
            })
        );
        this.setState(newState);
        this.props.onFilterChange(e.currentTarget.getAttribute('data-toggle'));
    }

    languageSwitch = (lng) => {
        i18n.changeLanguage(lng);
    }

    render() {
        const {btn1, btn2, btn3} = this.state;
        const {t} = this.props;
        return (
            <div className="btn-wrapper">
                <div className="btn-group-filter">
                    <button
                        className={btn1 ? "btn btn-light" : "btn btn-outline-light"}
                        type="button"
                        onClick={this.toggleBtn}
                        data-toggle="btn1">
                        {t('allEmployees')}
                    </button>
                    <button
                        className={btn2 ? "btn btn-light" : "btn btn-outline-light"}
                        type="button"
                        onClick={this.toggleBtn}
                        data-toggle="btn2">
                        {t('forPromotion')}
                    </button>
                    <button
                        className={btn3 ? "btn btn-light" : "btn btn-outline-light"}
                        type="button"
                        onClick={this.toggleBtn}
                        data-toggle="btn3">
                        {t('salaryOver1000')}
                    </button>
                </div>
                <div className="language-btn-group btn-group">
                        <button
                            className= "btn btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            type="button">
                            {t('language')}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end shadow-sm rounded" style={{ minWidth: '120px' }}>
                            <li><button className="dropdown-item py-1 px-2 small" type="button" onClick={() => this.languageSwitch('en')}>{t('English')}</button></li>
                            <li><button className="dropdown-item py-1 px-2 small" type="button" onClick={() => this.languageSwitch('ru')}>{t('Russian')}</button></li>
                        </ul>
                </div>
            </div>
        );
    }
}

export default withTranslation()(AppFilter);