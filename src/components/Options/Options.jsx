import style from "./Options.module.css"

const Options = ({updateFeedback, totalFeedback, resetFeedback}) => {
    return (
      <ul className={style.list}>
          <li className={style.listItem}><button onClick={() => updateFeedback('good')} className={style.btn}>Good</button></li>
          <li className={style.listItem}><button onClick={() => updateFeedback('neutral')} className={style.btn}>Neutral</button></li>
          <li className={style.listItem}><button onClick={() => updateFeedback('bad')} className={style.btn}>Bad</button></li>
          {totalFeedback ? <li className={style.listItem}><button onClick={resetFeedback} className={style.btn}>Reset</button></li> : ''}
      </ul>
    )
  }

export default Options