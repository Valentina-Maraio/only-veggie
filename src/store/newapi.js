import {createAction} from '@reduxjs/toolkit'

export const callFoodApi = createAction("call/foodApi")
export const successCall = createAction("success/call")
export const failedCall = createAction("failed/call")