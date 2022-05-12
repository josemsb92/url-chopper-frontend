import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function RenderShortUrl({ shortUrl }) {
  const render =
    shortUrl === "localhost:3000/undefined" ? (
      <div className="display-short-url">Your url is not a valid url</div>
    ) : shortUrl !== "" ? (
      <div className="display-short-url">
        Your short url:{" "}
        <button
          className="clipboard-button"
          onClick={() => navigator.clipboard.writeText(shortUrl)}
        >
          {shortUrl}
          <ContentCopyIcon />
        </button>
      </div>
    ) : null;
  return render;
}
