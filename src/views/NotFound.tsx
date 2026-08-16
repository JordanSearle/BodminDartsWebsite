import { Container } from 'react-bootstrap'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center">
      <Container className="text-center">
        <div className="display-1 fw-bold text-primary mb-3">
          404
        </div>

        <h1 className="h2 mb-3">
          Page not found
        </h1>

        <p className="text-muted mb-4">
          Looks like this page missed the board.
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link to="/">
          Back to the home page
        </Link>
      </Container>
    </div>
  )
}

export default NotFound