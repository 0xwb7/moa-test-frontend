import { useState } from 'react'
import { signup } from './api'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [message, setMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signup(email, password, nickname)
      setMessage(`${nickname}님, 가입이 완료됐어요. 로그인해 주세요.`)
    } catch (err) {
      setMessage((err as Error).message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>회원가입</h2>
      <input placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      {message && <p role="status">{message}</p>}
      <button type="submit">가입하기</button>
    </form>
  )
}
