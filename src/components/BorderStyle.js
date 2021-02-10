import React from 'react';

export const BorderStyle = ({
  topLeftRadius,
  topRightRadius,
  bottomLeftRadius,
  bottomRightRadius,
}) => {
  const style = `
.div {
  border-radius: ${topLeftRadius}% ${topRightRadius}% ${bottomLeftRadius}% ${bottomRightRadius}%;
}
  
  `;

  const onCopyText = () => {
    navigator.clipboard.writeText(style);
  };
  return (
    <div className="borderStyle-container">
      <form>
        <h4>CSS</h4>
        <textarea className="css-textarea" rows={10} cols={40} readOnly value={style} />
      </form>

      <button className="copy-btn" onClick={onCopyText}>
        Copy
      </button>
    </div>
  );
};
