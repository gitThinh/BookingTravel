import * as React from "react";
import { Link } from "react-router-dom";

import style from "./style.module.css";

interface IAppProps {
  blogId: string;
  blogMainImg: string;
  blogTitle: string;
  blogDescription: string;
  blogDateUploaded: string;
}

const index: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className={style.blogBoxWrapper}>
      <Link to={`blog-detail/${props.blogId}`}>
        <div>
          <img src={props.blogMainImg} alt="" className={style.blogMainImg} />
        </div>
        <div>
          <p className={style.blogTitle + " " + style.show2Line}>
            {props.blogTitle}
          </p>
          <p className={style.blogDesc + " " + style.show2Line}>
            {props.blogDescription}
          </p>
        </div>
        <div>
          <p className={style.blogDateUploaded}>{props.blogDateUploaded}</p>
        </div>
      </Link>
    </div>
  );
};

export default index;
