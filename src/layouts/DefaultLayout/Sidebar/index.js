import styles from './Sidebar.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>ssss</div>
        </div>
    );
}

export default Sidebar;
