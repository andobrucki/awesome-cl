import React, { useState } from "react"; // Import React and useState hook
import { FaRegCopy } from "react-icons/fa6"; // Import copy icon from react-icons
// import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"; // Import SyntaxHighlighter component
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"; // Import syntax highlighting style
import styles from "./RenderCode.module.scss"; // Import CSS module styles
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

export function RenderCode({ code }) {
  const [copied, setCopied] = useState(false); // State to track if code is copied
  //SyntaxHighlighter.registerLanguage("jsx", jsx);
  const copyToClipboard = (code) => {
    navigator.clipboard
      .writeText(code) // Copy code to clipboard
      .then(() => {
        setCopied(true); // Set copied state to true
        setTimeout(() => {
          setCopied(false); // Reset copied state after 1 second
        }, 1000);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err); // Log error if copying fails
      });
  };

  return (
    <div className={styles.div}>
      <button
        onClick={() => copyToClipboard(code)}
        className={styles.copyButton}
      >
        {copied ? <span className="copy-message">Copied</span> : <FaRegCopy />}
      </button>
      <SyntaxHighlighter
        className={styles.code}
        language="javascript"
        style={atelierDuneDark}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
