import { Button, Form, Grid, Input, theme, Typography } from 'antd';
import { LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './style.scss';
import { ROUTER } from '../../enums/router';

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function RegisterPage() {
  const { token } = useToken();
  const screens = useBreakpoint();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const styles = {
    container: {
      margin: '0 auto',
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: '380px',
      background: 'rgb(255, 255, 255)',
      borderRadius: '8px',
      boxShadow:
        'rgba(0, 0, 0, 0.03) 0px 1px 2px 0px, rgba(0, 0, 0, 0.02) 0px 1px 6px -1px, rgba(0, 0, 0, 0.02) 0px 2px 4px 0px',
    },
    footer: {
      marginTop: token.marginLG,
    },
    header: {
      marginBottom: token.marginXL,
    },
    section: {
      alignItems: 'center',
      background: '#F3F5F5',
      display: 'flex',
      height: screens.sm ? '100vh' : 'auto',
      padding: screens.md ? `${token.sizeXXL}px 0px` : '0px',
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <section style={styles.section} className='register-page'>
      <div style={styles.container}>
        <div style={styles.header}>
          <div className='logo mb-[10px]'>
            <a href='' className='text-decoration-none'>
              <span className='h1 text-uppercase text-primary bg-dark px-2 text-base'>
                PHONE
              </span>
              <span className='h1 text-uppercase text-dark bg-primary px-2 ml-n1 text-base'>
                STORE
              </span>
            </a>
          </div>

          <Title style={styles.title}>ĐĂNG KÝ</Title>
        </div>
        <Form
          name='normal_login'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout='vertical'
          requiredMark='optional'
          form={form}
        >
          <Form.Item
            name='email'
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Vui lòng nhập vào email',
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder='Nhập vào email' />
          </Form.Item>
          <Form.Item
            name='phone'
            rules={[
              {
                validator: (_, value) => {
                  const isPhone =
                    /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(value);
                  if (!isPhone) {
                    return Promise.reject('Số điện thoại sai định dạng');
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder='Nhập vào số điện thoại'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type='password'
              placeholder='Nhập vào mật khẩu'
            />
          </Form.Item>
          <Form.Item
            name='confirmPassword'
            rules={[
              {
                validator: (_, value) => {
                  const password = form.getFieldValue('password');
                  if (password !== value) {
                    return Promise.reject('Mật khẩu nhập lại không chính xác');
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type='password'
              placeholder='Nhập lại mật khẩu'
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: '0px' }}>
            <Button block={true} type='primary' htmlType='submit'>
              Đăng ký
            </Button>
            <div style={styles.footer} className='footer'>
              <Text style={styles.text}>Bạn đã có tài khoản?</Text>{' '}
              <Link href={ROUTER.LOGIN}>Đăng nhập ngay</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}