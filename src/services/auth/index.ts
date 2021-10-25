import {AuthStates} from '../../Constants'

const JWT_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

export const signInService = (
	email: string,
	password: string,
): Promise<string> => {
	return new Promise<string>(resolve => {
		setTimeout(() => {
			if (email.endsWith('itechart-group') && password === 'admin') {
				resolve(JWT_TOKEN)
			}
			resolve(AuthStates.AuthFail)
		}, 1000)
	})
}
