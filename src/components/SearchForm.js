import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const SearchForm = props => {
  const [sfCharacters, setSfCharacters] = useState([]);

  const { status, touched, errors, values } = props;

  useEffect(() => {
    console.log("status", status);
    if (status) {
      setSfCharacters(status);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  console.log("sfCharacters", sfCharacters);

  return (
    <div className="user-form">
      <h2>Search by Name</h2>
      <Form>
        <Field type="text" name="searchText" placeholder="Search by name" />
        {touched.searchText && errors.searchText && (
          <p className="error">{errors.searchText}</p>
        )}
        <button type="submit">Submit!</button>
      </Form>
      <section className="character-list">
        {sfCharacters.map(sfCharacter => {
          console.log("sfCharacter", sfCharacter);
          return <CharacterCard key={sfCharacter.id} character={sfCharacter} />;
        })}
      </section>
    </div>
  );
};

const myMapPropsToValues = props => {
  const { searchText } = props;

  const returnObj = {
    searchText: searchText || ""
  };

  return returnObj;
};

const myHandleSubmit = (values, { setStatus }) => {
  console.log("submit pressed! ... sending...");
  axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      console.log("values", values);

      const characters = res.data.results;

      console.log("characters", characters);

      const searchedForCharacters = characters.filter(character => {
        console.log("character", character);
        return character.name.includes(values.searchText);
      });

      console.log(
        "myHandleSubmit() searchedForCharacters",
        searchedForCharacters
      );

      setStatus(searchedForCharacters);
    })
    .catch(err => console.log(err));
};

const formikObj = {
  mapPropsToValues: myMapPropsToValues,
  handleSubmit: myHandleSubmit
};

const EnhancedFormHOC = withFormik(formikObj);

const EnhancedForm = EnhancedFormHOC(SearchForm);

export default EnhancedForm;

// export default function SearchForm() {
//   return <section className="search-form">// Add a search form here</section>;
// }
