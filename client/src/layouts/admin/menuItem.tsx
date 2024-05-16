import {
  BarChartOutlined,
  UserOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import { ROUTER } from '../../enums/router';

export const MenuItem = [
  {
    key: 'admin-dashboard',
    icon: <BarChartOutlined />,
    label: (
      <a href={ROUTER?.ADMIN} className='text-base'>
        Dashboard
      </a>
    ),
  },
  {
    key: 'admin-user',
    icon: <UserOutlined />,
    label: (
      <a href={ROUTER?.ADMIN_USER} className='text-base'>
        Người dùng
      </a>
    ),
  },
  {
    key: 'admin-administration',
    icon: <ToolOutlined />,
    label: 'Nhân viên',
    children: [
      {
        key: 'admin-role',
        label: (
          <a href={ROUTER?.ADMIN_ROLE} className='text-base'>
            Phân quyền
          </a>
        ),
      },
      {
        key: 'admin-list',
        label: (
          <a href={ROUTER?.ADMIN_ADMINISTRATION} className='text-base'>
            Danh sách
          </a>
        ),
      },
    ],
  },
];
