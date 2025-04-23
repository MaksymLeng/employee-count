import './app-info.css';
import { useTranslation } from 'react-i18next';

const AppInfo = ({numEmployees, numIncrease}) => {
    const {t} = useTranslation();

    return (
        <div className="app-info">
            <h1>{t('title')}</h1>
            <h2>{t('totalEmployees')} {numEmployees} </h2>
            <h2>{t('bonusEmployees')} {numIncrease}</h2>
        </div>
    )
}

export default AppInfo;