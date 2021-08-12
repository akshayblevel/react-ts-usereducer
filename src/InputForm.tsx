import React from 'react';

export function InputForm() {
  interface State {
    service: string;
    operator: string;
    value: string;
    mobile: string;
  }

  type stateKeys = keyof State;

  type Action = {
    type: 'onchange';
    payload: { name: string; value: string };
  };

  const initialState: State = {
    service: '',
    operator: '',
    value: '',
    mobile: ''
  };

  function formReducer(state: State, action: Action) {
    switch (action.type) {
      case 'onchange':
        return { ...state, [action.payload.name]: action.payload.value };
      default:
        return state;
    }
  }

  const [formValues, dispatch] = React.useReducer(formReducer, initialState);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.currentTarget;
    console.log(target.value);
    dispatch({
      type: 'onchange',
      payload: {
        name: target.name as stateKeys,
        value: target.value
      }
    });
  }

  async function submitForm(e: React.SyntheticEvent) {
    e.preventDefault();
    setTimeout(() => {
      console.log(formValues);
    }, 2000);
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="inputservice">Service</label>
          <input
            name="service"
            id="inputservice"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="inputoperator">Operator</label>
          <input
            name="operator"
            id="inputoperator"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="inputvalue">Value</label>
          <input
            name="value"
            id="inputvalue"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="inputmobile">Mobile</label>
          <input
            name="mobile"
            id="inputmobile"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
