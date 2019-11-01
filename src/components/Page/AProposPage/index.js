/* eslint-disable react/style-prop-object */
import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';

const AProposPage = () => (

  <div className="container mt-2 overflow-auto">

    <CardColumns>

    <Card border="warning" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Franchement, c'est impossible les gars, j'ai même provoqué un débat sur un groupe Facebook
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Brice - <cite title="Source Title">bloqué 3j sur le même problème </cite>
        </small>
      </footer>
    </blockquote>
  </Card>

      <Card>
        <Card.Img variant="top" src="src/components/Page/AProposPage/coderr.jpg" />
        <Card.Body>
          <Card.Title><span className="text-monospace">Kevin : Lead DevBack.</span></Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="warning" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            <b>Et les gars</b>, c'est quoi les identifiants AWS ?
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Julien - <cite title="Source Title">Environ 3x/jour</cite>
            </small>
          </footer>
        </blockquote>
      </Card>

      <Card>
        <Card.Img variant="top" src="src/components/Page/AProposPage/coderr.jpg" />
        <Card.Body>
        <Card.Title><span className="text-monospace">Brice : Trello, c'est mon crénaux</span></Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg="warning" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        <b>Localisation ton parcours, optimise ton entrainement, atteint tes objectifs !</b>
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          RunMap -<cite title="Source Title">le site de référence.</cite>
        </small>
      </footer>
    </blockquote>
  </Card>

      <Card>
        <Card.Img variant="top" src="src/components/Page/AProposPage/coderr.jpg" />
        <Card.Body>
        <Card.Title><span className="text-monospace">Miguel : Intégration ? Quelqu'un à dit intégration ? </span></Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="warning" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Hey lave toi les mains après être allé aux toilettes : important pour le titre pro.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              JC -<cite title="Source Title">entrain de refaire le cahier des charges</cite>
            </small>
          </footer>
        </blockquote>
      </Card>

      <Card>
        <Card.Img variant="top" src="src/components/Page/AProposPage/coderr.jpg" />
        <Card.Body>
        <Card.Title><span className="text-monospace">Julien : Alias, GitPush</span></Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      

      <Card>
        <Card.Img variant="top" src="src/components/Page/AProposPage/coderr.jpg" />
        <Card.Body>
        <Card.Title><span className="text-monospace">JC : LeadDev Front Infiltré</span></Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>

    </CardColumns>

  </div>
);

export default AProposPage;
