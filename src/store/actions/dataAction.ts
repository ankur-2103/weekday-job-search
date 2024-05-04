import { Dispatch } from "redux";
import { JobModel, JobParentModel } from "../../models/job.model";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const data: JobParentModel<JobModel> = await response.json();
        dispatch({ type: FETCH_DATA_SUCCESS, payload: data.jdList });
    } catch (error: any) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    }
  };
};
