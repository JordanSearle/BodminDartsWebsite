
import { Alert } from "react-bootstrap";
import { Accordion, BaseLayout, Spinner } from "../components";
import { useTables } from "../hooks/useTables";


export default function Tables () {
  const {
    tables,
    loading,
    error,
  } = useTables('1LKmRCg9vTRqxsiXzwPRDXjS5zWQZ_YvS');

  return (
    <BaseLayout title="Tables">
      <div className="py-4">
        <div className="mb-4">
          <h1>League Tables</h1>
          <p className="text-muted mb-0">
            View the latest league tables for each season.
          </p>
        </div>

        {loading && (
          <div className="d-flex justify-content-center py-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">
                Loading tables...
              </span>
            </Spinner>
          </div>
        )}

        {error && (
          <Alert variant="danger">
            <Alert.Heading>Unable to load tables</Alert.Heading>
            <p className="mb-0">{error.message}</p>
          </Alert>
        )}

        {!loading && !error && tables.length === 0 && (
          <Alert variant="info">
            No league tables are currently available.
          </Alert>
        )}

        {!loading && !error && tables.length > 0 && (
          <Accordion defaultActiveKey={[tables[0]?.id]}>
            {tables.map((year) => (
              <Accordion.Item
                eventKey={year.id}
                key={year.id}
              >
                <Accordion.Header>
                  {year.name}
                </Accordion.Header>

                <Accordion.Body>
                  {year.loading && (
                    <div className="d-flex align-items-center gap-2">
                      <Spinner animation="border" size="sm" />
                      <span>Loading tables...</span>
                    </div>
                  )}

                  {year.error && (
                    <Alert variant="danger" className="mb-0">
                      {year.error.message}
                    </Alert>
                  )}

                  {!year.loading &&
                    !year.error &&
                    year.tables?.length === 0 && (
                      <p className="text-muted mb-0">
                        No tables are available for this season.
                      </p>
                    )}

                  {!year.loading &&
                    !year.error &&
                    year.tables?.length > 0 && (
                      <div className="list-group">
                        {year.tables.map((table) => (
                          <div
                            key={table.id}
                            className="list-group-item d-flex align-items-center justify-content-between"
                          >
                            <div>
                              <div className="fw-semibold text-capitalize">
                                {table.name.replace('.pdf', '')}
                              </div>

                              <div className="text-muted small">
                                Updated{" "}
                                {new Date(
                                  table.createdTime
                                ).toLocaleDateString("en-GB")}
                              </div>
                            </div>

                            <a
                              href={`https://drive.google.com/file/d/${table.id}/view`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary"
                            >
                              View Table
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </div>
    </BaseLayout>
  )
}

