import styles from './Sidebar.module.scss';
import className from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupsIcon, LiveIcon } from '~/components/Icons';
const cx = className.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem to={config.routes.home} title="For You" icon={<HomeIcon />} />
                <MenuItem to={config.routes.following} title="Following" icon={<UserGroupsIcon />} />
                <MenuItem to={config.routes.live} title="LIVE" icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
