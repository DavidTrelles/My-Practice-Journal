import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const SessionDetails = () => {
  const { id } = useParams();
  const session = useSelector((store) => store.session);
  const history = useHistory();
  useEffect(() => {
    dispatch({ type: "FETCH_SESSION", payload: id });
  }, [id]);
  return (
    <>
      <p>Your Previous Practice session: {session.title}</p>
    </>
  );
};
export default SessionDetails;
