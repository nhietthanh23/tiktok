import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountIem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8b2c8491d5592d95bcae59f54b6c0564~c5_100x100.jpeg?x-expires=1659970800&x-signature=VkHUd4wcyClrSMOKXFi6J74mu0A%3D"
                alt="Anh nen nha"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>NhietThanh23</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Trieu Nhiet Thanh</span>
            </div>
        </div>
    );
}

export default AccountIem;
