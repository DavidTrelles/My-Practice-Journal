import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const SessionDetails = () => {
  const { id } = useParams();
  const session = useSelector((store) => store.session);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_SESSION", payload: id });
  }, [id]);
  function deleteThis() {
    dispatch({ type: "DELETE", payload: id });
    history.push("/user");
  }
  console.log(session.title);
  return (
    <>
      {" "}
      {session.length > 0 && (
        <>
          <div>
            {session.map((detail) => {
              return <p>Your Previous Practice session: {detail.title}</p>;
            })}
            <button onClick={deleteThis}>Delete</button>
          </div>
        </>
      )}
    </>
  );
};
export default SessionDetails;
