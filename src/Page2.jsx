import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="page1/detailB">ページBの詳細</Link>
    </div>
  );
};