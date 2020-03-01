import React, { useState, ChangeEvent } from 'react';
import { Button, Spinner } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData1, fetchData2, fetchData3, routine1, routine2, routine3 } from '../store/domain-data/demo-data/ducks';
import { RootState } from '../store/store';
import { selectAnyLoading, selectLoading, selectSomeLoading } from '../store/ui/loading/ducks';
import { selectError } from '../store/domain-data/error/ducks';

const App: React.FC = () => {
  const dispatch = useDispatch<any>();

  // Select loading
  const isAnyLoading = useSelector((state: RootState) => selectAnyLoading(state));
  const isLoading1 = useSelector((state: RootState) => selectLoading(routine1.routineType)(state));
  const isLoading1or2 = useSelector((state: RootState) =>
    selectSomeLoading([routine1.routineType, routine2.routineType])(state)
  );

  // Select error
  const error1 = useSelector((state: RootState) => selectError(routine1.routineType)(state));
  const error2 = useSelector((state: RootState) => selectError(routine2.routineType)(state));
  const error3 = useSelector((state: RootState) => selectError(routine3.routineType)(state));

  const [makeError, setMakeError] = useState(false);

  return (
    <div className="container-fluid pt-3">
      <div className="px-3 mb-3">
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              checked={makeError}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setMakeError(event.target.checked);
              }}
            />
            Make Error
          </label>
        </div>
      </div>
      <div className="px-3 mb-3">
        <div className="row">
          <div className="col">
            <Button className="w-100 mb-3" onClick={() => dispatch(fetchData1(makeError)).catch(console.error)}>
              Fetch 1
            </Button>
          </div>
          <div className="col">
            <Button className="w-100 mb-3" onClick={() => dispatch(fetchData2(makeError)).catch(console.error)}>
              Fetch 2
            </Button>
          </div>
          <div className="col">
            <Button className="w-100 mb-3" onClick={() => dispatch(fetchData3(makeError)).catch(console.error)}>
              Fetch 3
            </Button>
          </div>
        </div>
      </div>
      <div className="px-3 mb-3">
        {isAnyLoading && (
          <div className="w-100">
            <Spinner color="primary" /> Loading...
          </div>
        )}
        {isLoading1 && (
          <div className="w-100">
            <Spinner color="secondary" /> Loading routine 1...
          </div>
        )}
        {isLoading1or2 && (
          <div className="w-100">
            <Spinner color="info" /> Loading routine 1 or 2...
          </div>
        )}
      </div>
      <div className="px-3 mb-3">
        <ul className="p-0 m-0">
          <li>Error 1: {error1 ? error1.message : 'null'}</li>
          <li>Error 2: {error2 ? error2.message : 'null'}</li>
          <li>Error 3: {error3 ? error3.message : 'null'}</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
