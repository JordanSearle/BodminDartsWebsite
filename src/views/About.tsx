import Card from "react-bootstrap/Card";
import { BaseLayout } from "../components";

interface CommitteeMember {
  name: string;
  role?: string;
}

const committeeMembers: CommitteeMember[] = [
  {name: "Pete Stocker", role: "President"},
  {name: "Jason Carthew", role: "Chairman"},
  {name: "Matt Wilson", role: "Vice-Chairman"},
  {name: "Sarah Williams", role: "Secretary"},
  {name: "Graham Toms", role: "Treasurer"},
  {name: "Jordan Searle", role: "Fixtures Secretary"},
  {name: "Charlotte Bunt"},
  {name: "Emma Dow"},
  {name: "Izack Chapman"},
  {name: "Michelle Bellamy"},
  {name: "Natasha Kestle"},
  {name: "Ryan Collinson"},
  {name: "Ryan Prideaux"},
  {name: "Tiffany Sweet"},
];

const RULES_URL = 
  "https://docs.google.com/file/d/1WzWBprmhgIp2Nxml3AtgpThBtimMDFTj/preview";

export default function About() {
  return (
    <BaseLayout title="About">
      <div className="py-4">
        <div className="mb-5">
          <h1>About the League</h1>
          <p className="text-muted">
            Find out more about the league, our committee and
            the rules of competition.
          </p>
        </div>

        <section className="mb-5">
            <Card className="h-100 mb-5">
                <Card.Body>
                    <h2 className="mb-3">Committee Members</h2>
                    <Card.Text>
                    {committeeMembers.map((member) => 
                        <p className="fw-normal">{member.name} {member.role && <span className="fw-light">- {member.role}</span>}</p>
                    )}
                    </Card.Text>
                </Card.Body>
            </Card>
        </section>

        <section id="rules">
          <Card>
            <Card.Body>
                <h2 className="mb-3">League Rules</h2>

              <iframe
                src={RULES_URL}
                title="League Rules"
                width="100%"
                height="800"
                style={{
                  border: 0,
                }}
              />
            </Card.Body>
          </Card>
        </section>
      </div>
    </BaseLayout>
  );
}