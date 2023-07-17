import React, { useState } from 'react'
import { addItem } from "../../store/cardSlice";
import { useDispatch } from "react-redux"
import { addItem2 } from '../../store/watchList';
import { useTranslation } from 'react-i18next';
export default function ModalMovie(props) {
  const [Open, SetOpen] = useState("none")
  const [Like, setLike] = useState(null)
  const [Watch, setWatch] = useState(null)
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();

  const localstorage1 = JSON.parse(localStorage.getItem("card"))
  const localstorage2 = JSON.parse(localStorage.getItem("card2"))
  const { t } = useTranslation();

  function MenuList() {
    if (Open == 'none') {
      SetOpen('inline')
    }
    else {
      SetOpen('none')
    }

    let data = localstorage1.filter(item => {
      return item.id == props.state.item.id
    })
    if (data.length > 0) {
      setLike(true);
    }
    else {
      setLike(false);
    }

    let data2 = localstorage2.filter(item => {
      return item.id == props.state.item.id
    })
    if (data2.length > 0) {
      setWatch(true)
    } else {
      setWatch(false)
    }

  }

  function handleClick1(product) {
    setLike(true)
    dispatch(addItem(product))
  }
  function handleClick2(product) {
    setWatch(true)
    dispatch2(addItem2(product))
  }
  return (
    <div>
      <div onClick={MenuList} className="menuList">
        <div className="menuList-round"></div>
        <div className="menuList-round"></div>
        <div className="menuList-round"></div>
      </div>
      <div className="Lists" style={{ display: `${Open}` }}>
        <div style={{ cursor: "pointer" }} className="Lists-elements">
          {
            (Like) ?
              <i onClick={() => handleClick1(props.state.item)} style={{ color: "rgb(221,86,178)", }} className="fa-solid fa-heart Lists-elements-icon"></i>
              :
              <i onClick={() => handleClick1(props.state.item)} className="fa-solid fa-heart Lists-elements-icon"></i>
          }
          <p className='Lists-elements-title' onClick={() => handleClick1(props.state.item)} >{t('Favourite_redux')}</p>
        </div>
        <div style={{ cursor: "pointer" }} className="Lists-elements">
          {
            (Watch) ?
              <i onClick={() => handleClick2(props.state.item)} style={{ color: "rgb(189,62,57)" }} class="fa-solid fa-bookmark Lists-elements-icon"></i>
              :
              <i onClick={() => handleClick2(props.state.item)} class="fa-solid fa-bookmark Lists-elements-icon"></i>

          }
          <p className='Lists-elements-title' onClick={() => handleClick2(props.state.item)} >{t('Watchlist_redux')}</p>
        </div>
      </div>
    </div>
  )
}
