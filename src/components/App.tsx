import React, { ChangeEvent, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Spinner, Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataA, fetchDataB, fetchDataC, routineA, routineB, routineC } from '../store/domain-data/demo-data/ducks';
import { selectAnyLoading, selectLoading, selectSomeLoading } from '../store/ui/loading/ducks';
import { selectError } from '../store/domain-data/error/ducks';

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

  const [makeError, setMakeError] = useState(false);

  return (
    <div className="container-fluid pt-3">
      <Card className="mb-3">
        <CardHeader>Fetch Data</CardHeader>
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
                onClick={() => dispatch(fetchDataA(makeError)).catch(console.error)}
              >
                A
              </Button>
            </div>
            <div className="col">
              <Button
                className="w-100 mb-3"
                color={makeError ? 'danger' : 'secondary'}
                outline={true}
                onClick={() => dispatch(fetchDataB(makeError)).catch(console.error)}
              >
                B
              </Button>
            </div>
            <div className="col">
              <Button
                className="w-100 mb-3"
                color={makeError ? 'danger' : 'secondary'}
                outline={true}
                onClick={() => dispatch(fetchDataC(makeError)).catch(console.error)}
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

export default App;
