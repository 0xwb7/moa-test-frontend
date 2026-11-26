import { useState } from 'react'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'

export default function App() {
  const [page, setPage] = useState<'login' | 'signup'>('login')
  const [nickname, setNickname] = useState<string | null>(null)

  if (nickname) {
    return <h1>{nickname}님, 환영해요!</h1>
  }

  return (
    <main>
      <h1>MOA 테스트 서비스</h1>
      <nav>
        <button onClick={() => setPage('login')}>로그인</button>
        <button onClick={() => setPage('signup')}>회원가입</button>
      </nav>
      {page === 'login' ? <LoginPage onLoggedIn={setNickname} /> : <SignupPage />}
    </main>
  )
}
