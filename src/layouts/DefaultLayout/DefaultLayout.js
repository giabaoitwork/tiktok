import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaulLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

function DefaulLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaulLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaulLayout;
