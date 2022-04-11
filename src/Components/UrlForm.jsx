import { render } from "@testing-library/react";
import React from "react";
function UrlForm() {
  return (
    <form className="Url-form">
      <input type="text" className="Url-text-area" />
      <input type="submit" value="Chopp!" />
    </form>
  );
}
export default UrlForm;
