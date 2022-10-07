import React from "react";
import { getSvgIcon,arrowPath,doublePath } from "./createSvgIcon";
import "./index.scss";


export const Pagination = ({activePage, setActivePage}) => {


  const nextIcon = getSvgIcon(arrowPath, false, 'next', '#ABABAB')
  const prevIcon = getSvgIcon(arrowPath, true, 'prev', '#ABABAB')
  const jumpPrevIcon = getSvgIcon(doublePath, true, 'jump-prev', '#ABABAB')
  const isJumpPrevIconExist = activePage >= 3
  const isPrevIconExist = activePage >= 2
    return (
    <div className="div_pagination">
    <ul className="pagination">
        {isJumpPrevIconExist &&<li
          onClick={() => setActivePage(1)}
        >
          {jumpPrevIcon}
        </li>
        }
        {isPrevIconExist &&<li  onClick={() =>setActivePage(activePage - 1)}>
          {prevIcon}
        </li>}
        <li
          className={"active"}
        >
          {activePage}
        </li>
      <li
          onClick={() => setActivePage(activePage + 1)}
        >
          {nextIcon}
        </li>
    </ul>
  </div>
  )
}