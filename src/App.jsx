import React from "react";
import Header from "./components/Header";
import MarkDownComponent from "./components/MarkDownComponent";
import Test from "./components/MarkDownComponent";
import PageWrapper from "./components/PageWrapper";
import { editorActions, EditorContext } from "./state/contexts/EditorContext";
import styles from './App.module.css'

const App = () => {
  const { state,dispatch } = React.useContext(EditorContext);
  const [editorText, setEditorText] = React.useState(state.markdown);
  const handleEditorChange = (e) => {
    setEditorText(e.target.value);
  };
 React.useEffect(() => {
    dispatch({ type: editorActions.EDIT_MARKDOWN, payload: editorText });
  }, [editorText]);
console.log(state);
  return (
    <div className={styles.home_wrapper}>
      <Header />
      <PageWrapper>
        <div className="">
          {/* <h1></h1> */}
          <div className={styles.content_wrapper}>
            {state.preview ? (
              <>
                <MarkDownComponent
                  markdown={editorText}
                />
              </>
            ) : (
              <div className="text-area-wrapper">
                <textarea
                className="text-area"
                  name="editor"
                  id=""
                  cols="30"
                  rows="10"
                  value={editorText}
                  onChange={handleEditorChange}
                ></textarea>
              </div>
            )}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default App;
