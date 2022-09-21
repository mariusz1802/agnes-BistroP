import React, { Children, useEffect, useState } from "react";
import styled from "styled-components";
import * as styles from "./CircleAnimation.module.scss";

function CircleAnimation({
  size,
  strokeWidth,
  percentage,
  color,
  fontSize,
  children,
}) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;
  return (
    <ProgressWrapper>
      <svg width={size} height={size} viewBox={viewBox}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd800" />
            <stop offset="100%" stopColor="#fbf675" />
          </linearGradient>
        </defs>
        <circle
          fill="none"
          stroke="#ccc"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          fill="none"
          stroke="url(#gradient)"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeDasharray={[dash, circumference - dash]}
          strokeLinecap="round"
          style={{ transition: "all 1s" }}
        />
        <text
          fill="yellow"
          fontSize={`${fontSize}px`}
          fontWeight="600"
          x="50%"
          y="50%"
          dy="20px"
          textAnchor="middle"
        >
          {`${percentage}%`}
        </text>
      </svg>
      <Text>{children}</Text>
    </ProgressWrapper>
  );
}

export default CircleAnimation;

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1250px) {
    margin-bottom: 70px;
  }
`;

const Text = styled.p`
  margin-top: 20px;
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
  @media screen and (max-width: 1250px) {
    font-size: 3rem;
  }
`;
