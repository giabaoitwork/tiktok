import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1689361200&x-signature=jKYgmp%2B2EMOt7TkfdX5pAhZk%2FOg%3D"
                alt="hoaaa"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Dao Le Phuong Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>daolephuonghoaaa</span>
            </div>
        </div>
    );
}

export default AccountItem;
