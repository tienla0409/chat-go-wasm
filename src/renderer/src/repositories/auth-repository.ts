import axiosInstance from '../libs/axios'
import IRegisterData from '../interfaces/IRegisterData'

const authRepository = {
  register: (data: IRegisterData) => axiosInstance.post('/register', data)
}

export default authRepository
