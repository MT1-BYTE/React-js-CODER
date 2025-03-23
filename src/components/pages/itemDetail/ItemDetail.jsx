import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Counter from "../../common/cartWidget/counter/Counter";
import { dataBase } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let refCollection = collection(dataBase, "products");
    let refDoc = doc(refCollection, id);
    const getProduct = getDoc(refDoc);
    getProduct
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.imageUrl} alt="" />
      <p>{item.description}</p>
      <Counter item={item} />
    </div>
  );
};

export default ItemDetail;
