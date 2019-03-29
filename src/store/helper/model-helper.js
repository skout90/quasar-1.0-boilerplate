export const stateHelper = {
  res: {
    success: false,
    statusCode: '',
    errorMsg: '',
    isLoading: false
  }
}

export const getterHelper = {
  getIsLoading: state => state.res.isLoading
}

export const mutationHelper = {
  SET_IS_LOADING: (state, isLoading) => state.res.isLoading = isLoading,
  SET_RES_SUCCESS: (state, payload) => state.res = {
    success: true,
    statusCode: payload.status,
    errorMsg: '',
    isLoading: false
  },
  SET_RES_FAIL: (state, payload) => state.res = {
    success: false,
    statusCode: payload.status,
    errorMsg: payload.error,
    isLoading: false
  }
}
