import { useState } from 'react';

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowinfo] = useState(false);

  return (
    <article className="question">
      <header>
        <div>
          <h5>{title}</h5>
          {showInfo && <p>{info}</p>}
        </div>
        <button
          className="question-btn"
          type="button"
          onClick={() => setShowinfo(!showInfo)}
        >
          show
        </button>
      </header>
    </article>
  );
};
export default SingleQuestion;
