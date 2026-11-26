import { useState } from 'react'
import { login } from './api'

export default function LoginPage({ onLoggedIn }: { onLoggedIn: (nickname: string) => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await login(email, password)
      localStorage.setItem('accessToken', result.accessToken)
      onLoggedIn(result.nickname)
    } catch (err) {
      setError((err as Error).message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>로그인</h2>
      <input placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p role="alert">{error}</p>}
      <button type="submit">로그인</button>
    </form>
  )
}
