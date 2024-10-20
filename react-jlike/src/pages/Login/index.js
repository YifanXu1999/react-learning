import './index.scss'
import {Card, Form, Input, Button} from 'antd'
import logo from '@/assets/logo.png'

const Login = () => {
    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt=""/>
                {/* 登录表单 */}
                <Form >
                    <Form.Item
                        name="username"
                        validateTrigger="onBlur"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        {
                            pattern: /^1[0-9]\d{9}$/,
                            message: 'Invalid phone number'
                        }
                    ]}>
                        <Input size="large" placeholder="请输入手机号"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}>
                        <Input size="large" placeholder="请输入验证码"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login