import './search-panel.css';
import {Component} from "react";
import {withTranslation} from "react-i18next";

class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        const {t} = this.props;
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder={t('searchPlaceholder')}
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        )
    }
}

export default withTranslation()(SearchPanel);