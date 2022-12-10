import { StatusCodes, getReasonPhrase } from "http-status-codes"

type APIResponse<T> = {
  status: string
  data: T
}

export const createResponse = <T>(
  data: T,
  status: number = StatusCodes.OK
): APIResponse<T> => {
  return {
    status: getReasonPhrase(status),
    data
  }
}
