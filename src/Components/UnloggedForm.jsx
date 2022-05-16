import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function UnloggedForm({ shortUrl }) {
  const advice = (
    <p>
      Do you have an account? Loging with us and you will be able to see and
      manage all your urls.
    </p>
  );
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

  return (
    <>
      {advice} {render}
    </>
  );
}
