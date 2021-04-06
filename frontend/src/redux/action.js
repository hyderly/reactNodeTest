import axios from "axios";

export const calculateSumAction = (firstNumber, lastNumber) => async dispatch => {
    try {
      
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/sum",
        { firstNumber, lastNumber },
        config
      );

      const data1 = data
      dispatch({
        type: 'Sum_Success',
        payload: data1,
      });
  
      
    } catch (error) {
      dispatch({
        type: 'Sum_Fail',
        payload: error.response?.data.error,
      });
    }
  };