import React from 'react'
import Naverbanner from '../img/naver_banner.png'

const Naver = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (id.trim() !== '' && password.trim() !== '') {
            alert('로그인이 완료되었습니다.'); // 팝업창
        }
    };
    return (
        <div className='container'>
            <div className="head">Naver</div>
            <div className="loginForm">
                <input type="text" className='inputItem' placeholder='아이디' value={id} onChange={(e) => setId(e.target.value)} /> <br />
                <input type="password" className='inputItem' placeholder='비밀번호' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button type='button' className='loginBtn' onClick={handleLogin}>로그인</button>
            </div>
            <div className="banner">
                <img src={Naverbanner} alt="" />
            </div>
        </div>
    )
}

export default Naver