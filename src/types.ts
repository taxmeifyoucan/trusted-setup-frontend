export type TryContributeRes = {
  ValidContribution: number
}

export type ContributeRes = any

// TODO: API backend is sending session_id & other params
export type GetAuthorizedRes = {
  id_token: string
  session_id: string
}

export type ErrorRes = {
  error: string
  message?: string
}
