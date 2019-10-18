// == Import : npm
import React from 'react';
import {
  Container,
  Button,
  Menu,
  Header,
  Form,
  Input,
  Select,
  Grid,
  Icon,
} from 'semantic-ui-react';

// == Import : local
import './inscriptionPage.scss';

// TODO: Ajouter un template footer plus tard. 

// == Composant
const InscriptionPage = () => (
  <>
    {/* Menu */}
    <Container fluid>
      <Menu>
        <Menu.Item
          name="RunMap"
          // onClick="#"
        />
        <Menu.Item position="right">
          <Button
            color="grey"
            content="Connexion"
            // onClick="#"
          />
        </Menu.Item>
      </Menu>
    </Container>

    {/* Header */}
    <Container
      fluid
      className="header"
      style={{
        margin: '0',
        height: '40vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Header
        className="header-title"
        as="h2"
        textAlign="center"
      >
        COURTE PHRASE
      </Header>
    </Container>

    {/* Inscription Form */}
    <Container fluid style={{ margin: '2em 0' }}>
      <Form>
        <Grid stackable columns={4}>
          <Grid.Row>

            <Grid.Column
              style={{
                margin: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon.Group size='massive'>
                <Icon name='user' color="grey" circular />
                <Icon corner='top right' name='add' color='grey' size="tiny"/>
              </Icon.Group>
            </Grid.Column>

            <Grid.Column>
              <Form.Field
                fluid
                control={Input}
                label="NOM"
              />
              <Form.Field
                fluid
                control={Input}
                label="PRENOM"
              />
              <Grid columns="equal">
                <Grid.Row>
                  <Grid.Column>
                    <Form.Field
                      fluid
                      control={Input}
                      
                      label="AGE"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field
                      fluid
                      control={Input}
                      label="SEXE"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column>
              <Form.Field
                fluid
                control={Input}
                label="ADRESSE MAIL"
              />
              <Form.Field
                fluid
                control={Input}
                label="VILLE"
              />
            </Grid.Column>

            <Grid.Column>
              <Form.Field
                fluid
                control={Input}
                label="MOT DE PASSE"
              />
              <Form.Field
                fluid
                control={Input}
                label="CONFIRMATION DU MOT DE PASSE"
              />
              <Button
                fluid
                color="grey"
                type="submit"
                content="BIENVENUE !"
                position="right"
                style={{ marginTop: '1.5em' }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Container>

    {/* Footer */}
    <Container
      fluid
      style={{
        height: '10em',
        backgroundColor: '#E2E2E4',
      }}
    >
      <Grid divided stackable />
    </Container>
  </>
);

// == Export
export default InscriptionPage;
