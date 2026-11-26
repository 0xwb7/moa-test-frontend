import { useState } from 'react'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 서버 연동
    alert(`${nickname}님, 회원가입은 아직 준비 중이에요.`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>회원가입</h2>
      <input placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <button type="submit">가입하기</button>
    </form>
  )
}
