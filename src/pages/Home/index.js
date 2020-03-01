import React, { useContext, useEffect } from "react";
import { Form, Notes } from "../../components";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import { Loader } from "../../components/Loader";

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote } = useContext(
    FirebaseContext
  );

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
    </>
  );
};
