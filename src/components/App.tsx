import React from 'react';
import { Button, Spinner } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData1, fetchData2, fetchData3, routine1, routine2 } from '../store/domain-data/demo-data/ducks';
import { RootState } from '../store/store';
import { selectAnyLoading, selectLoading, selectSomeLoading } from '../store/ui/loading/ducks';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const isAnyLoading = useSelector((state: RootState) => selectAnyLoading(state));

  const isLoading1 = useSelector((state: RootState) => selectLoading(routine1.actionType)(state));

  const isLoading1and2 = useSelector((state: RootState) =>
    selectSomeLoading([routine1.actionType, routine2.actionType])(state)
  );

  return (
    <div className="container-fluid">
      <div className="px-3 pt-3">
        <div className="row">
          <div className="col">
            <Button className="w-100 mb-3" onClick={() => dispatch(fetchData1())}>
              Fetch 1
            </Button>
          </div>
          <div className="col">
            <Button className="w-100 mb-3" onClick={() => dispatch(fetchData2())}>
              Fetch 2
            </Button>
          </div>
          <div className="col">
            <Button className="w-100 mb-3" onClick={() => dispatch(fetchData3())}>
              Fetch 3
            </Button>
          </div>
        </div>
      </div>
      <div className="px-3">
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
        {isLoading1and2 && (
          <div className="w-100">
            <Spinner color="info" /> Loading routine 1 and 2...
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
