import { Nav } from 'react-bootstrap'

import style from './style.module.css'
function App() {
    return (
        <div className={style.main}>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item >
                    <Nav.Link href="/registration" className='link-light'>Registration</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/login" className='link-light'>login</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/resetPwd" className='link-light'>reset password</Nav.Link>
                </Nav.Item>
            </Nav>
            <h1 className="text-center mt-4 mb-4">AD</h1>
        </div>
    );

}

export default App;