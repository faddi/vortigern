import { Dispatch } from 'redux';

export interface IStars {
  isFetching?: boolean;
  count?: number;
  error?: boolean;
  message?: any;
}

/** Action Types */

export const GET_REQUEST = 'stars/GET_REQUEST';
export const GET_SUCCESS = 'stars/GET_SUCCESS';
export const GET_FAILURE = 'stars/GET_FAILURE';

export interface IActionGetRequest {
  type: typeof GET_REQUEST;
}

export interface IActionGetSuccess {
  type: typeof GET_SUCCESS;
  count: number;
}

export interface IActionGetFailure {
  type: typeof GET_FAILURE;
  message: string;
}

export type IStarsAction = IActionGetRequest | IActionGetSuccess | IActionGetFailure;

/** Initial State */
const initialState: IStars = {
  isFetching: false,
};

/** Reducer */
export function starsReducer(state = initialState, action: IStarsAction) {
  switch (action.type) {
    case GET_REQUEST:
      return {
        isFetching: true,
        ...state,
      };

    case GET_SUCCESS:
      return {
        isFetching: false,
        count: action.count,
        ...state,
      };

    case GET_FAILURE:
      return {
        isFetching: false,
        message: action.message,
        error: true,
        ...state,
      };

    default:
      return state;
  }
}

/** Async Action Creator */
export function getStars() {
  return async (dispatch: Dispatch<IStarsAction>) => {
    dispatch(starsRequest());

    try {
      const response = await fetch('https://api.github.com/repos/barbar/vortigern');
      const json = await response.json();

      if (response.ok) {
        return dispatch(starsSuccess(json.stargazers_count));
      } else {
        return dispatch(starsFailure(json.message));
      }
    } catch (e) {
      return dispatch(starsFailure(e));
    }
  };
}

/** Action Creator */
export function starsRequest(): IActionGetRequest {
  return {
    type: GET_REQUEST,
  };
}

/** Action Creator */
export function starsSuccess(count: number): IActionGetSuccess {
  return {
    type: GET_SUCCESS,
    count,
  };
}

/** Action Creator */
export function starsFailure(message: string): IActionGetFailure {
  return {
    type: GET_FAILURE,
    message,
  };
}
