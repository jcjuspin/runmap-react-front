// == Import : npm
import React from 'react';
import axios from 'axios';

// == Import : local

// == Composant
class FrontGetJson extends React.Component {
  state = {
    inputSearch: ' valeur initial',
  }

  changeValue = (inputSearch) => {
    this.setState({
      inputSearch,
    });
  };

  validateSearch = () => {
    const { inputSearch } = this.state;
    console.log('valeur soumise : ', inputSearch )
    // https://api.github.com/search/repositories?q=${inputSearch}  pour se connecter à l'api de git pour tester...


    /*
     * CHANGE LE LIEN HTTP CI-DESSOUS. C'est votre route!
     */

    axios.get(`http://brice-ouaali.vpnuser.oclock.io/projet-Runmap/public/place`)
      .then((response) => {
        console.log('réponse de mr API : ', response)
        // eslint-disable-next-line arrow-body-style
      })
      .catch((error) => {
        console.log('Apparement ça marche pas')
       
      })
      .finally(() => {
        
      });
  };


  render() {
    const handleChange = (event) => {
    const { value } = event.target;
    this.changeValue(value);
    console.log('ce que tu es en train d\'écrire dans l\'input : ', value)
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      this.validateSearch();
    };

    console.log('valeur de inputSearch dans le state : ', this.state.inputSearch)

    return (
    <>
     <form onSubmit={handleSubmit}>
       <input onChange={handleChange} placeholder="tappe entrée svp"></input>
     </form>
    </>
    )

  }
};

// == Export
export default FrontGetJson;
