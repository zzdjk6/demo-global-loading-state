import React, { ChangeEvent, useCallback, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Spinner, Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataA, fetchDataB, fetchDataC, routineA, routineB, routineC } from '../store/domain-data/demo-data/ducks';
import { selectAnyLoading, selectLoading, selectSomeLoading } from '../store/ui/loading/ducks';
import { selectError } from '../store/domain-data/error/ducks';
import { Abortable, AbortablePromise } from 'simple-abortable-promise';

const App: React.FC = () => {
  const dispatch = useDispatch<any>();

  // Select loading
  const isLoadingAny = useSelector(selectAnyLoading);
  const isLoadingA = useSelector(selectLoading(routineA.routineType));
  const isLoadingB = useSelector(selectLoading(routineB.routineType));
  const isLoadingC = useSelector(selectLoading(routineC.routineType));
  const isLoadingAorB = useSelector(selectSomeLoading([routineA.routineType, routineB.routineType]));

  // Select error
  const errorA = useSelector(selectError(routineA.routineType));
  const errorB = useSelector(selectError(routineB.routineType));
  const errorC = useSelector(selectError(routineC.routineType));

  // States
  const [makeError, setMakeError] = useState(false);
  const [abortables, setAbortables] = useState<Abortable[]>([]);

  // Util functions to manipulate states
  const addAbortable = useCallback(
    (abortable: Abortable) => {
      setAbortables([...abortables, abortable]);
    },
    [abortables, setAbortables]
  );
  const delAbortable = useCallback(
    (abortable: Abortable) => {
      setAbortables(abortables.filter(item => item !== abortable));
    },
    [abortables, setAbortables]
  );
  const execPromise = useCallback(
    async (promise: AbortablePromise<any>) => {
      try {
        addAbortable(promise);
        await promise;
      } catch (e) {
        logError(e);
      } finally {
        delAbortable(promise);
      }
    },
    [addAbortable, delAbortable]
  );

  // Handle button click
  const handleClickLoadA = useCallback(async () => {
    const promise = dispatch(fetchDataA(makeError));
    await execPromise(promise);
  }, [dispatch, makeError, execPromise]);
  const handleClickLoadB = useCallback(async () => {
    const promise = dispatch(fetchDataB(makeError));
    await execPromise(promise);
  }, [dispatch, makeError, execPromise]);
  const handleClickLoadC = useCallback(async () => {
    const promise = dispatch(fetchDataC(makeError));
    await execPromise(promise);
  }, [dispatch, makeError, execPromise]);
  const handleClickAbort = useCallback(() => {
    abortables.forEach(abortable => abortable.abort());
  }, [abortables]);

  return (
    <div className="container-fluid pt-3">
      <Card className="mb-3">
        <CardHeader>
          <div className="d-flex justify-content-between">
            <span>Fetch Data</span>
            <Button outline color="warning" className="py-0" onClick={handleClickAbort}>
              Abort
            </Button>
          </div>
        </CardHeader>
        <CardBody className="pb-1">
          <div className="form-check mb-3">
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

          <div className="row">
            <div className="col">
              <Button
                className="w-100 mb-3"
                color={makeError ? 'danger' : 'secondary'}
                outline={true}
                onClick={handleClickLoadA}
              >
                A
              </Button>
            </div>
            <div className="col">
              <Button
                className="w-100 mb-3"
                color={makeError ? 'danger' : 'secondary'}
                outline={true}
                onClick={handleClickLoadB}
              >
                B
              </Button>
            </div>
            <div className="col">
              <Button
                className="w-100 mb-3"
                color={makeError ? 'danger' : 'secondary'}
                outline={true}
                onClick={handleClickLoadC}
              >
                C
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className="mb-3">
        <CardHeader>Select Loading</CardHeader>
        <CardBody className="pb-1">
          <Table bordered size="sm">
            <colgroup>
              <col width="30%" />
              <col width="70%" />
            </colgroup>
            <tbody>
              <tr>
                <td>Any</td>
                <td>{isLoadingAny && <Spinner color="primary" />}</td>
              </tr>
              <tr>
                <td>A or B</td>
                <td>{isLoadingAorB && <Spinner color="primary" />}</td>
              </tr>
              <tr>
                <td>A</td>
                <td>{isLoadingA && <Spinner color="primary" />}</td>
              </tr>
              <tr>
                <td>B</td>
                <td>{isLoadingB && <Spinner color="primary" />}</td>
              </tr>
              <tr>
                <td>C</td>
                <td>{isLoadingC && <Spinner color="primary" />}</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>

      <Card className="mb-3">
        <CardHeader>Select Error</CardHeader>
        <CardBody className="pb-1">
          <Table bordered size="sm">
            <colgroup>
              <col width="30%" />
              <col width="70%" />
            </colgroup>
            <tbody>
              <tr>
                <td>A</td>
                <td className="text-danger">{errorA && errorA.message}</td>
              </tr>
              <tr>
                <td>B</td>
                <td className="text-danger">{errorB && errorB.message}</td>
              </tr>
              <tr>
                <td>C</td>
                <td className="text-danger">{errorC && errorC.message}</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

const logError = (e: Error) => {
  if (e.name === 'AbortError') {
    console.warn(e.message);
  } else {
    console.error(e);
  }
};

export default App;
