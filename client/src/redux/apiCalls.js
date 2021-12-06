import { loginFalure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethood";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFalure());
  }
};
