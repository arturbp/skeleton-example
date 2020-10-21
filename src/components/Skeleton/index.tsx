import React from 'react';
import './styles.css'

export const Skeleton: React.FC<{ circle?: boolean, style?: React.CSSProperties }> = ({ circle, style = {} }) => {
  return (
    <div
      className={`skeleton-wrapper${circle ? ' skeleton-wrapper-circle' : ''}`}
      style={style}
    >
      <div className="skeleton">
        <div className="skeleton-indicator" />
      </div>
    </div>
  );
}