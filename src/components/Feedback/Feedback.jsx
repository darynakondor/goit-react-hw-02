import style from "./Feedback.module.css"

const Feedback = ({feedback, totalFeedback, positiveFeedback}) => {
    return (
      <ul className={style.list}>
          <li className={style.listItem}><p>Good: {feedback.good}</p></li>
          <li className={style.listItem}><p>Neutral: {feedback.neutral}</p></li>
          <li className={style.listItem}><p>Bad: {feedback.bad}</p></li>
          <li className={style.listItem}><p>Total: {totalFeedback}</p></li>
          <li className={style.listItem}><p>Positive: {positiveFeedback}%</p></li>
      </ul>
    )
}

export default Feedback