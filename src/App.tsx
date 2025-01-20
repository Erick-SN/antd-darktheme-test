import { useState } from 'react';
import { ConfigProvider, Layout, Button, Card, Input, Form } from 'antd';
import { lightTheme, darkTheme } from './themeConfig';
import 'antd/dist/reset.css';

const { Header, Footer, Content } = Layout;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <h1 style={{ margin: 0 }}>Ant Design Dark Mode test</h1>
          <Button onClick={() => setIsDarkMode(!isDarkMode)}>
            Switch {isDarkMode ? 'light' : 'dark'} mode
          </Button>
        </Header>
        <Content
          style={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card title='Testing ant containers' style={{ width: 400 }}>
            <Form layout='vertical'>
              <Form.Item label='Name' required>
                <Input placeholder='Write your name' />
              </Form.Item>
              <Form.Item label='Password' required>
                <Input.Password placeholder='type your password' />
              </Form.Item>
              <Form.Item>
                <Button type='primary' block>
                  Send
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design Dark Mode test
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
