import { BeatLoader } from "react-spinners";
import { useFetch } from "../hooks/useFetch";

const Comments = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.org/comments"
  );

  console.log(error);

  return (
    <div>
      {isLoading ? (
        <BeatLoader color="red" size={25} />
      ) : (
        <div>
          {data.map((comment) => {
            return (
              <div key={comment.id}>
                <h2>{comment.comment}</h2>
              </div>
            );
          })}
        </div>
      )}
      {error && <h2>{error.message}</h2>}
    </div>
  );
};

export default Comments;

/*
    const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = fetch("https://jsonplaceholder.org/comments", {
      method: "POST",
      body: JSON.stringify({
        id: 3,
        postId: 3,
        userId: 2,
        comment: "Hola, ¿cómo estás?",
      }),
      headers: {
        Authorization: "Código token",
      },
    });
    getComments.then((res) => res.json()).then((res) => setComments(res));
  }, []);

  console.log(comments);

  return <div>Comments</div>;
};
*/
