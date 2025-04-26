import React from "react";

function Icons({ width, height, fill, name }) {
  let content = "";

  if (name === "plus-outline") {
    content = (
      <svg
        width={width || 18}
        height={height || 18}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 7.5H13.5V13.5H7.5V16.5H13.5V22.5H16.5V16.5H22.5V13.5H16.5V7.5ZM15 0C6.735 0 0 6.735 0 15C0 23.265 6.735 30 15 30C23.265 30 30 23.265 30 15C30 6.735 23.265 0 15 0ZM15 27C8.385 27 3 21.615 3 15C3 8.385 8.385 3 15 3C21.615 3 27 8.385 27 15C27 21.615 21.615 27 15 27Z"
          fill={fill || "#004B93"}
        />
      </svg>
    );
  } else if (name === "plus") {
    content = (
      <svg
        width={width || 18}
        height={height || 18}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM22.5 16.5H16.5V22.5H13.5V16.5H7.5V13.5H13.5V7.5H16.5V13.5H22.5V16.5Z"
          fill={fill || "#004B93"}
        />
      </svg>
    );
  } else if (name === "plus-square") {
    content = (
      <svg
        width={width || 18}
        height={height || 18}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.6667 0H3.33333C1.48333 0 0 1.5 0 3.33333V26.6667C0 28.5 1.48333 30 3.33333 30H26.6667C28.5 30 30 28.5 30 26.6667V3.33333C30 1.5 28.5 0 26.6667 0ZM23.3333 16.6667H16.6667V23.3333H13.3333V16.6667H6.66667V13.3333H13.3333V6.66667H16.6667V13.3333H23.3333V16.6667Z"
          fill={fill || "#004B93"}
        />
      </svg>
    );
  } else if (name === "radio-chosen") {
    content = (
      <svg
        width={width || 18}
        height={height || 18}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 7.5C10.86 7.5 7.5 10.86 7.5 15C7.5 19.14 10.86 22.5 15 22.5C19.14 22.5 22.5 19.14 22.5 15C22.5 10.86 19.14 7.5 15 7.5ZM15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 27C8.37 27 3 21.63 3 15C3 8.37 8.37 3 15 3C21.63 3 27 8.37 27 15C27 21.63 21.63 27 15 27Z"
          fill={fill || "#004B93"}
        />
      </svg>
    );
  } else if (name === "radio-not-chosen") {
    content = (
      <svg
        width={width || 18}
        height={height || 18}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 27C8.37 27 3 21.63 3 15C3 8.37 8.37 3 15 3C21.63 3 27 8.37 27 15C27 21.63 21.63 27 15 27Z"
          fill={fill || "#004B93"}
        />
      </svg>
    );
  } else if (name === "checkbox-not-chosen") {
    content = (
      <svg
        width={width || 18}
        height={height || 18}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.6667 3.33333V26.6667H3.33333V3.33333H26.6667ZM26.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V26.6667C0 28.5 1.5 30 3.33333 30H26.6667C28.5 30 30 28.5 30 26.6667V3.33333C30 1.5 28.5 0 26.6667 0Z"
          fill={fill || "#004B93"}
        />
      </svg>
    );
  } else if (name === "checkbox-chosen") {
    content = (
      <svg
        width={width || 18}
        height={height || 18}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.6667 0H3.33333C1.48333 0 0 1.5 0 3.33333V26.6667C0 28.5 1.48333 30 3.33333 30H26.6667C28.5167 30 30 28.5 30 26.6667V3.33333C30 1.5 28.5167 0 26.6667 0ZM11.6667 23.3333L3.33333 15L5.68333 12.65L11.6667 18.6167L24.3167 5.96667L26.6667 8.33333L11.6667 23.3333Z"
          fill={fill || "#004B93"}
        />
      </svg>
    );
  }

  return <div>{content}</div>;
}

export default Icons;
