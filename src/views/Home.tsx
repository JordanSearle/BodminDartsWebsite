import { Container, Row, Col } from 'react-bootstrap'
import { BaseLayout, Button, Card } from '../components'
import { Link } from 'react-router'

const Home = () => {
  return (
    <BaseLayout title="Home">
      {/* Hero */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center py-5">
            <Col lg={12}>
              <p className="text-primary fw-semibold mb-2">
                BODMIN DARTS LEAGUE
              </p>

              <h1 className="display-3 fw-bold mb-4">
                Welcome to the
                <br />
                Bodmin Darts League
              </h1>

              <p className="lead text-muted mb-4">
                Fixtures, results, league tables and everything you need
                to keep up with darts in Bodmin.
              </p>

              <div className="d-flex gap-2">
                {/* @ts-expect-error TODO resolve */}
                <Button as={Link} to="/tables" >
                  View League Tables
                </Button>

                {/* @ts-expect-error TODO resolve */}
                <Button as={Link} to="/results" variant="outline-primary">
                  View Results
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">
              League Information
            </h2>

            <p className="text-muted">
              Everything you need for the current season.
            </p>
          </div>

          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <h3 className="h5 fw-bold">
                    League Tables
                  </h3>

                  <p className="text-muted">
                    Keep up with the latest league standings and
                    team positions.
                  </p>

                {/* @ts-expect-error TODO resolve */}
                  <Button as={Link} to="/tables" variant="outline-primary">
                    View Tables
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <h3 className="h5 fw-bold">
                    Fixtures & Results
                  </h3>

                  <p className="text-muted">
                    Find upcoming fixtures and see the results from
                    previous matches.
                  </p>

                    {/* @ts-expect-error TODO resolve */}
                  <Button as={Link} to="/results" variant="outline-primary">
                    View Results
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100">
                <Card.Body>
                  <h3 className="h5 fw-bold">
                    League Rules
                  </h3>

                  <p className="text-muted">
                    View the current rules and regulations for the
                    Bodmin Darts League.
                  </p>

                    {/* @ts-expect-error TODO resolve */}
                  <Button as={Link} to="/about" variant="outline-primary">
                    View Rules
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center py-4">
              <h2 className="fw-bold mb-3">
                About the League
              </h2>

              <p className="text-muted">
                The Bodmin Darts League brings together local teams
                and players for competitive darts throughout the
                season.
              </p>

              <p className="text-muted mb-0">
                Check back regularly for the latest fixtures,
                results and league standings.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </BaseLayout>
  )
}

export default Home