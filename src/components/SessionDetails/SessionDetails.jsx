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
  console.log(session.title);
  return (
    <>
      {" "}
      {session.length > 0 && (
        <>
          <p>Your Previous Practice session: {session[0].title}</p>
        </>
      )}
    </>
  );
};
export default SessionDetails;
