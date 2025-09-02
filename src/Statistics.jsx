function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div className="feedback-statistics">
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive Feedback: {positivePercentage}</p>
        </div>
    )
}
// dsfddfdff
export default Statistics