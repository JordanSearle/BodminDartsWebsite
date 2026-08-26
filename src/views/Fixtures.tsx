import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";

import { useResults } from "../hooks/useResults";
import { BaseLayout } from "../components";

export default function Fixtures() {
  const {
    results,
    loading,
    error,
  } = useResults("1ib7FP8F__XjtehFZy0kZtEkZPP7R4Jgz");

  return (
    <BaseLayout title="Results">
      <div className="py-4">
        <div className="mb-4">
          <h1>Results</h1>
          <p className="text-muted mb-0">
            View the latest results from the league.
          </p>
        </div>

        {loading && (
          <div className="d-flex justify-content-center py-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">
                Loading results...
              </span>
            </Spinner>
          </div>
        )}

        {error && (
          <Alert variant="danger">
            <Alert.Heading>
              Unable to load results
            </Alert.Heading>

            <p className="mb-0">
              {error.message}
            </p>
          </Alert>
        )}

        {!loading && !error && results.length === 0 && (
          <Alert variant="info">
            No results are currently available.
          </Alert>
        )}

        {!loading && !error && results.length > 0 && (
          <Card>
            <ListGroup variant="flush">
              {results.map((result) => (
                <ListGroup.Item
                  key={result.id}
                  className="d-flex align-items-center justify-content-between"
                >
                  <div>
                    <div className="fw-semibold">
                      {result.name.replace(/\.pdf$/i, "")}
                    </div>

                    <div className="text-muted small">
                      {new Date(
                        result.createdTime
                      ).toLocaleDateString("en-GB")}
                    </div>
                  </div>

                  <a
                    href={`https://drive.google.com/file/d/${result.id}/view`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Results
                  </a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        )}
      </div>
    </BaseLayout>
  );
}