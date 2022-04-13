function ExternalUrl() {
  const urlRedirect = ""; //Necesito hacer un getUrl con req.param y cortar por el codigo para obtener el link
  return (
    <div className="test-view">
      {(window.location.href = urlRedirect)}</div>
  );
}
export default ExternalUrl;
