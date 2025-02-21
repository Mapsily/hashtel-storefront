export default function PDFViewver() {
  return (
    <object
      data="/pdfs/web-catalogue.pdf"
      type="application/pdf"
      width="100%"
      height="600px"
    >
      <p>
        Your browser does not support PDFs.{" "}
        <a href="/pdfs/web-catalogue.pdf">Download the Catalogue</a>.
      </p>
    </object>
  );
}
