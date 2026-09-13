
import { Alert } from "react-bootstrap";
import { Accordion, BaseLayout, Spinner } from "../components";
import type { Table } from "../hooks/useTables";
import { useTables } from "../hooks/useTables";
import { useMemo } from "react";
import groupBy from 'lodash/groupBy';

type TableItemProps = {
  table: Table
  showUpdated?: boolean
}

const TableItem = ({ table, showUpdated = true }: TableItemProps) => {
  return (
  <div
    className="list-group-item d-flex align-items-center justify-content-between"
  >
    <div>
      <div className="fw-semibold text-capitalize">
        {table.name.replace('.pdf', '')}
      </div>

      {
        showUpdated && (
          <div className="text-muted small">
            Updated{" "}
            {new Date(table.createdTime).toLocaleDateString("en-GB")}
          </div>
        )
      }
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
  )
}


export default function Tables () {
  const {
    tables: activeTables,
    loading: isLoadingActive,
    error: activeError,
  } = useTables('150ZOirU5r3m7R6k8Zju_hKk1QXhttOtD');

  const {
    tables: archivedTables,
    loading: isLoadingArchive,
    error: archiveError,
  } = useTables('1s4W3UfLYECDvHw0MdarhxZJYDpJbXTfj');

  const loading = isLoadingActive || isLoadingArchive
  const error = activeError || archiveError

  const formattedArchivedTables = useMemo(() => {
    return groupBy(archivedTables?.tables ?? [], (table: Table )=> table.name.split(' - ')[0]);
  }, [archivedTables])

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

        {!loading && !error && activeTables?.tables?.length === 0 && (
          <Alert variant="info">
            No league tables are currently available.
          </Alert>
        )}


        <div className="d-flex flex-column gap-4">
          <div className="list-group">
            {activeTables?.tables?.map((table) => (
              <TableItem key={table.id} table={table} />
            ))}
          </div>

          {!loading && !error && archivedTables?.tables?.length > 0 && (
            <Accordion defaultActiveKey={'archive'}>
                <Accordion.Item eventKey={'archive'} key={'archive'}>
                  <Accordion.Header>
                    Archive
                  </Accordion.Header>

                  <Accordion.Body>
                    <div className="d-flex flex-column gap-2">
                      {
                        Object.values(formattedArchivedTables).map((tables) => {
                          return (
                            <div className="list-group">
                              {tables?.map((table) => (
                                <TableItem key={table.id} table={table} showUpdated={false} />
                              ))}
                            </div>
                          )
                        })
                      }
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          )}
        </div>
      </div>
    </BaseLayout>
  )
}

