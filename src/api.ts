const BASE_URL = import.meta.env.VITE_API_BASE_URL

export type LoginResult = { accessToken: string; nickname: string }

export async function login(email: string, password: string): Promise<LoginResult> {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  if (!res.ok) {
    throw new Error('로그인에 실패했어요.')
  }
  return res.json()
}

export async function signup(email: string, password: string, nickname: string): Promise<void> {
  const res = await fetch(`${BASE_URL}/api/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, nickname }),
  })
  if (!res.ok) {
    throw new Error('회원가입에 실패했어요.')
  }
}
